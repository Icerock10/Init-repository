import { type FastifyReply, type FastifyRequest } from 'fastify';
import { type ZodType as ValidationSchema } from 'zod';

import { type HTTPMethod } from '~/libs/modules/http/http.js';
// TODO: fix move z lib to shared
type ServerApplicationRouteParameters = {
    handler: (
        request: FastifyRequest,
        reply: FastifyReply,
    ) => Promise<void> | void;
    isPublic?: boolean;
    method: HTTPMethod;
    path: string;
    validation?: {
        body?: ValidationSchema;
        queryString?: ValidationSchema;
    };
};

export { type ServerApplicationRouteParameters };
