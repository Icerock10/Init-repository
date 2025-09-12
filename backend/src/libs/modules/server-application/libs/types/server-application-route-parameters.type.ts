import { type FastifyReply, type FastifyRequest } from 'fastify';

import { type HTTPMethod } from '~/libs/modules/http/http.js';

type ServerApplicationRouteParameters = {
    handler: (
        request: FastifyRequest,
        reply: FastifyReply,
    ) => Promise<void> | void;
    isPublic?: boolean;
    method: HTTPMethod;
    path: string;
    // validation?: {
    //     body?: ValidationSchema;
    //     queryString?: ValidationSchema; /TODO: add validation schema
    // };
};

export { type ServerApplicationRouteParameters };
