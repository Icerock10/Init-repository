import { type AppEnvironment } from '~/libs/enums/enums.js';

import { type ValueOf } from './types.js';

type EnvironmentSchema = {
    APP: {
        ENVIRONMENT: ValueOf<typeof AppEnvironment>;
        HOST: string;
        PORT: number;
    };
    DB: {
        CONNECTION_STRING: string;
    };
};

export { type EnvironmentSchema };
