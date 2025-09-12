import { config } from '../config/config.js';
import { dataBase } from '../database/database.js';
import { logger } from '../logger/logger.js';
import { BaseServerApplicationApi } from './base-server-application-api.js';
import { BaseServerApplication } from './base-server-application.js';

const apiV1 = new BaseServerApplicationApi('v1', config);
const serverApplication = new BaseServerApplication({
    apis: [apiV1],
    config,
    dataBase,
    logger,
});

export { serverApplication };
