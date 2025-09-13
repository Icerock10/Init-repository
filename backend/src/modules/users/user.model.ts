import { getModelForClass, prop } from '@typegoose/typegoose';

import { AbstractModel } from '~/libs/modules/database/database.js';

class User extends AbstractModel {
    @prop({ type: () => String })
    public email!: string;

    @prop({ required: true })
    public name!: string;

    @prop({ required: true })
    public passwordHash!: string;
}

const userModel = getModelForClass(User);

export { User, userModel };
