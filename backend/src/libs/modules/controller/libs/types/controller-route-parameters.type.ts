import { type HTTPMethod } from '~/libs/modules/http/http.js';
import { type ValidationSchema } from '~/libs/types/types.js';

import { type APIHandler } from './types.js';

type ControllerRouteParameters = {
    handler: APIHandler;
    isPublic?: boolean;
    method: HTTPMethod;
    path: string;
    validation?: {
        body?: ValidationSchema;
        queryString?: ValidationSchema;
    };
};

export { type ControllerRouteParameters };
