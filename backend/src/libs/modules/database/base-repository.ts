import { type ReturnModelType, type types } from '@typegoose/typegoose';

type Repository<T = unknown> = {
    create(payload: T): Promise<T>;
    find(id: string): Promise<null | T>;
};

class BaseRepository<TModel extends types.AnyParamConstructor<unknown>, TEntity>
    implements Repository<TEntity>
{
    constructor(public model: ReturnModelType<TModel>) {}

    public async create(payload: TEntity): Promise<TEntity> {
        return (await this.model.create(payload)) as TEntity;
    }

    public find(id: string): Promise<null | TEntity> {
        return this.model.findById(id);
    }
}

export { BaseRepository };
