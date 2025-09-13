import { BaseRepository } from '~/libs/modules/database/database.js';

import { UserEntity } from './user.entity.js';
import { type User, userModel } from './user.model.js';

class UserRepository extends BaseRepository<typeof User, UserEntity> {
    constructor() {
        super(userModel);
    }

    public async create(entity: UserEntity): Promise<UserEntity> {
        const user = await this.model.create(entity);

        return UserEntity.initialize(user);
    }
    public async find(id: string): Promise<null | UserEntity> {
        const foundUser = await this.model.findById(id);

        return foundUser ? UserEntity.initialize(foundUser) : null;
    }
}

export { UserRepository };
