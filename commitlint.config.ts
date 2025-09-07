import type { UserConfig } from '@commitlint/types';
import { ProjectPrefix } from './project.config';

const COMMIT_MESSAGE_REGEX = new RegExp(
    `^(\\w+-\\d+): ([${ProjectPrefix.MODIFIERS.join('')}]) (.+)$`,
);

const ERROR_MESSAGE = `❌ Invalid commit message format.

Expected: <project-prefix>-<issue-number>: <modifier> <description>

Where:
- <project-prefix>: ${ProjectPrefix.APP}
- <modifier>: one of ${ProjectPrefix.MODIFIERS.join(', ')}
- <environment>: ${ProjectPrefix.ENVIRONMENTS.join(', ')}
- <description>: non-empty text

Examples:
- rg-45: + dashboard component
- rg-212: - dashboard card size
`;

const config: UserConfig = {
    extends: [],
    defaultIgnores: true,
    plugins: [
        {
            rules: {
                'custom-commit-format': ({ header }: { header: any }) => {
                    if (!COMMIT_MESSAGE_REGEX.test(header)) {
                        return [false, ERROR_MESSAGE];
                    }
                    return [true];
                },
            },
        },
    ],
    rules: {
        'custom-commit-format': [2, 'always'],
    },
};

export default config;
