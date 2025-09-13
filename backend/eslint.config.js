import baseConfig from '../eslint.config.js';

/** @typedef {import("eslint").Linter.Config} */
let Config;

/** @type {Config} */
const ignoresConfig = {
    ignores: ['build'],
};

/** @type {Config[]} */
const overridesConfigs = [{}];

/** @type {Config[]} */
const config = [...baseConfig, ignoresConfig, ...overridesConfigs];

export default config;
