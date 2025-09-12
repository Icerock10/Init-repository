import { type ServerApplicationRouteParameters } from './server-application-route-parameters.type.js';

type ServerApplication = {
    addRoute(parameters: ServerApplicationRouteParameters): void;
    addRoutes(parameters: ServerApplicationRouteParameters[]): void;
};

export { type ServerApplication };
