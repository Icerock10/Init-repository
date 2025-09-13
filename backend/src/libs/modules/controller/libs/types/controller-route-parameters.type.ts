import { type ZodType as ValidationSchema } from 'zod';

import { type HTTPMethod } from '~/libs/modules/http/http.js';

import { type APIHandler } from './types.js';
// TODO: move Zod lib to shared
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
