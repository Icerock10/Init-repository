import { type UserDto } from 'shared';

import { type Encryptor } from '~/libs/modules/encryptor/encryptor.js';

import { UserEntity } from './user.entity.js';
import { type UserRepository } from './user.repository.js';

type UserSignUpRequestDto = {
    email: string;
    name: string;
    password: string;
};

class UserService {
    private encryptor: Encryptor;
    private userRepository: UserRepository;
    public constructor(userRepository: UserRepository, encryptor: Encryptor) {
        this.userRepository = userRepository;
        this.encryptor = encryptor;
    }

    public async create(payload: UserSignUpRequestDto): Promise<UserDto> {
        const { hash } = await this.encryptor.encrypt(payload.password);

        const item = await this.userRepository.create(
            UserEntity.initializeNew({
                email: payload.email,
                name: payload.name,
                passwordHash: hash,
            }),
        );

        return item.toObject();
    }
    public async find(id?: number): Promise<null | UserDto> {
        const item = await this.userRepository.find(String(id));

        return item ? item.toObject() : null;
    }
}

export { UserService };
