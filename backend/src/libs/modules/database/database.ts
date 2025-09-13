import { config } from '../config/config.js';
import { logger } from '../logger/logger.js';
import { BaseDatabase } from './base-database.module.js';

const database = new BaseDatabase(config, logger);

export { database };
export { AbstractModel } from './abstract.model.js';
export { BaseRepository } from './base-repository.js';
