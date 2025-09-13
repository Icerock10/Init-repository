import { BaseController } from '~/libs/modules/controller/base-controller.module.js';
import {
    type APIHandlerOptions,
    type APIHandlerResponse,
} from '~/libs/modules/controller/controller.js';
import { type Logger } from '~/libs/modules/logger/libs/types/types.js';

import { type UserService } from './user.service.js';

const HTTPRequestMethod = {
    GET: 'GET',
    POST: 'POST',
} as const;

type UserSignUpRequestDto = {
    email: string;
    name: string;
    password: string;
};

const UsersApiPath = {
    CREATE: '/create',
    ROOT: '/',
    USER: '/:id',
} as const;

const APIPath = {
    AUTH: '/auth',
    USERS: '/users',
} as const;

class UserController extends BaseController {
    private userService: UserService;

    public constructor(logger: Logger, userService: UserService) {
        super(logger, APIPath.USERS);

        this.userService = userService;

        this.addRoute({
            handler: (options) =>
                this.findById(
                    options as APIHandlerOptions<{
                        query?: { id: number };
                    }>,
                ),
            method: HTTPRequestMethod.GET,
            path: UsersApiPath.ROOT,
        });

        this.addRoute({
            handler: (options) =>
                this.create(
                    options as APIHandlerOptions<{
                        body: UserSignUpRequestDto;
                        query?: { planId: string };
                    }>,
                ),
            isPublic: true,
            method: HTTPRequestMethod.POST,
            path: UsersApiPath.CREATE,
        });
    }
    private async create(
        options: APIHandlerOptions<{
            body: UserSignUpRequestDto;
            query?: { planId: string };
        }>,
    ): Promise<APIHandlerResponse> {
        const createdUser = await this.userService.create(options.body);

        return {
            payload: createdUser,
            status: 200,
        };
    }
    private async findById(
        options: APIHandlerOptions<{ query?: { id: number } }>,
    ): Promise<APIHandlerResponse> {
        return {
            payload: await this.userService.find(options.query?.id),
            status: 200,
        };
    }
}

export { UserController };
