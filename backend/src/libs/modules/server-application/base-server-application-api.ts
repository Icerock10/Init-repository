import { type Config } from '~/libs/modules/config/libs/types/types.js';

import {
    type ServerApplicationApi,
    type ServerApplicationRouteParameters,
} from './libs/types/types.js';

class BaseServerApplicationApi implements ServerApplicationApi {
    public routes: ServerApplicationRouteParameters[];

    public version: string;
    private config: Config;

    public constructor(
        version: string,
        config: Config,
        ...handlers: ServerApplicationRouteParameters[]
    ) {
        this.version = version;
        this.config = config;
        this.routes = handlers.map((handler) => ({
            ...handler,
            path: `/api/${this.version}${handler.path}`,
        }));
    }
}

export { BaseServerApplicationApi };
