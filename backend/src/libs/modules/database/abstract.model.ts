import { modelOptions, type mongoose, prop } from '@typegoose/typegoose';

@modelOptions({
    schemaOptions: {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
})
class AbstractModel {
    @prop() public _id!: mongoose.Types.ObjectId;
    @prop() public createdAt?: Date;
    @prop() public updatedAt?: Date;
    public get id(): string {
        return this._id.toHexString();
    }
}

export { AbstractModel };
