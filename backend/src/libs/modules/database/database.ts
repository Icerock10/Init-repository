import mongoose from 'mongoose';

import { config } from '~/libs/modules/config/config.js';
import { type Config } from '~/libs/modules/config/libs/types/types.js';

import { type Logger } from '../logger/libs/types/types.js';
import { logger } from '../logger/logger.js';
import { type DataBase } from './libs/types/types.js';

class MongoDatabase implements DataBase {
    private appConfig: Config;
    private logger: Logger;

    public constructor(config: Config, logger: Logger) {
        this.appConfig = config;
        this.logger = logger;
    }

    public async connect(): Promise<void> {
        const uri = this.appConfig.ENV.DB.CONNECTION_STRING;

        this.logger.info(`Connecting to MongoDB... uri- ${uri}`);

        await mongoose.connect(uri, {});

        this.logger.info('MongoDB connected!');
    }

    public async disconnect(): Promise<void> {
        await mongoose.disconnect();
        this.logger.info('❌ MongoDB disconnected');
    }
}

const dataBase = new MongoDatabase(config, logger);

export { dataBase };
