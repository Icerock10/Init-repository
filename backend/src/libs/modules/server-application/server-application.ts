import { config } from '~/libs/modules/config/config.js';
import { database } from '~/libs/modules/database/database.js';
import { logger } from '~/libs/modules/logger/logger.js';
import { userController } from '~/modules/users/users.js';

import { BaseServerApplicationApi } from './base-server-application-api.js';
import { BaseServerApplication } from './base-server-application.js';

const apiV1 = new BaseServerApplicationApi(
    'v1',
    config,
    ...userController.routes,
);
const serverApplication = new BaseServerApplication({
    apis: [apiV1],
    config,
    database,
    logger,
});

export { serverApplication };
export { type ServerApplicationRouteParameters } from './libs/types/types.js';
