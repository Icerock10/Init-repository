import { type HTTPMethod } from '~/libs/modules/http/http.js';

import { type APIHandler } from './types.js';

type ControllerRouteParameters = {
    handler: APIHandler;
    isPublic?: boolean;
    method: HTTPMethod;
    path: string;
};

export { type ControllerRouteParameters };
