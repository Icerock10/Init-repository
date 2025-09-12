import { type EnvironmentSchema } from './types.js';

type Config = LibraryConfig<EnvironmentSchema>;

type LibraryConfig<T> = {
    ENV: T;
};

export { type Config };
