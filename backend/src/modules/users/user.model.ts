import { getModelForClass, prop } from '@typegoose/typegoose';

import { AbstractModel } from '~/libs/modules/database/database.js';

class User extends AbstractModel {
    @prop({ type: () => String })
    public email!: string;

    @prop({ type: () => String })
    public name!: string;

    @prop({ type: () => String })
    public passwordHash!: string;
}

const userModel = getModelForClass(User);

export { User, userModel };
