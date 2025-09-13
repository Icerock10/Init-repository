import fastifyStatic from '@fastify/static';
import Fastify, { type FastifyInstance } from 'fastify';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { type Config } from '~/libs/modules/config/libs/types/types.js';
import { type DataBase } from '~/libs/modules/database/libs/types/types.js';
import { type Logger } from '~/libs/modules/logger/libs/types/types.js';

import {
    type ServerApplication,
    type ServerApplicationApi,
    type ServerApplicationRouteParameters,
} from './libs/types/types.js';

type Constructor = {
    apis: ServerApplicationApi[];
    config: Config;
    database: DataBase;
    logger: Logger;
};

type WhiteRoute = { method: string; path: string };

class BaseServerApplication implements ServerApplication {
    private apis: ServerApplicationApi[];

    private app: FastifyInstance;

    private config: Config;

    private database: DataBase;

    private logger: Logger;

    public constructor({ apis, config, database, logger }: Constructor) {
        this.config = config;
        this.logger = logger;
        this.apis = apis;
        this.database = database;
        this.app = Fastify({
            routerOptions: {
                ignoreTrailingSlash: true,
            },
        });
    }

    public addRoute(parameters: ServerApplicationRouteParameters): void {
        const { handler, method, path } = parameters;

        this.app.route({
            handler,
            method,
            // schema: {
            //     body: validation?.body, /TODO: add validation schema
            //     querystring: validation?.queryString,
            // },
            url: path,
        });

        this.logger.info(`Route: ${method} ${path} is registered`);
    }

    public addRoutes(parameters: ServerApplicationRouteParameters[]): void {
        for (let parameter of parameters) {
            this.addRoute(parameter);
        }
    }

    public async init(): Promise<void> {
        this.logger.info('Application initialization');

        await this.initServer();

        this.initRoutes();
        await this.database.connect();

        try {
            await this.app.listen({
                host: this.config.ENV.APP.HOST,
                port: this.config.ENV.APP.PORT,
            });

            this.logger.info(
                `Application is listening on PORT ${this.config.ENV.APP.PORT.toString()}, on ENVIRONMENT ${
                    this.config.ENV.APP.ENVIRONMENT as string
                }.`,
            );
        } catch (error) {
            if (error instanceof Error) {
                this.logger.error(error.message, {
                    cause: error.cause,
                    stack: error.stack,
                });
            }

            throw error;
        }
    }

    public initRoutes(): void {
        const routers = this.apis.flatMap((api) => api.routes);

        this.addRoutes(routers);
    }

    private getWhiteRoutes(): WhiteRoute[] {
        const publicApiRoutes: WhiteRoute[] = this.apis.flatMap((api) =>
            api.routes
                .filter((route) => route.isPublic)
                .map((route) => ({
                    method: route.method,
                    path: route.path,
                })),
        );

        return publicApiRoutes;
    }

    private async initServer(): Promise<void> {
        const staticPath = path.join(
            path.dirname(fileURLToPath(import.meta.url)),
            '../../../../public',
        );

        await this.app.register(fastifyStatic, {
            prefix: '/',
            root: staticPath,
        });

        this.app.setNotFoundHandler(async (_request, response) => {
            await response.sendFile('index.html', staticPath);
        });
    }
}

export { BaseServerApplication };
