import { type Entity, type UserDto } from '~/libs/types/types.js';

class UserEntity implements Entity {
    private email: string;
    private id: null | string;
    private name: string;
    private passwordHash: string;

    private constructor({
        email,
        id,
        name,
        passwordHash,
    }: {
        email: string;
        id: null | string;
        name: string;
        passwordHash: string;
    }) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.passwordHash = passwordHash;
    }

    public static initialize({
        email,
        id,
        name,
        passwordHash,
    }: UserDto & {
        passwordHash: string;
    }): UserEntity {
        return new UserEntity({
            email,
            id,
            name,
            passwordHash,
        });
    }

    public static initializeNew(properties: {
        email: string;
        name: string;
        passwordHash: string;
    }): UserEntity {
        return new UserEntity({
            email: properties.email,
            id: null,
            name: properties.name,
            passwordHash: properties.passwordHash,
        });
    }

    public static initializeWithShortInfo({
        email,
        id,
        name,
    }: {
        email: string;
        id: string;
        name: string;
    }): UserEntity {
        return new UserEntity({
            email,
            id,
            name,
            passwordHash: '',
        });
    }

    public getPasswordData(): { passwordHash: string } {
        return {
            passwordHash: this.passwordHash,
        };
    }

    public toNewObject(): {
        email: string;
        name: string;
        passwordHash: string;
    } {
        return {
            email: this.email,
            name: this.name,
            passwordHash: this.passwordHash,
        };
    }

    public toObject(): UserDto {
        return {
            email: this.email,
            id: this.id,
            name: this.name,
        };
    }
}

export { UserEntity };
