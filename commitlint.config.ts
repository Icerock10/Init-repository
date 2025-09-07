import type { UserConfig } from '@commitlint/types';
import { ProjectPrefix } from './project.config';

const COMMIT_MESSAGE_REGEXP = new RegExp(
    `^(((${ProjectPrefix.APP})-[0-9]{1,6})|(${ProjectPrefix.ENVIRONMENTS.join(
        '|',
    )})): ([${ProjectPrefix.MODIFIERS.join(',')}]) (.*\\S)$`,
);
const COMMIT_ERROR_MESSAGE = `❌ Invalid commit message format.

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

const validateCommitMessage = (
    header: string,
): [boolean, string] | [boolean] => {
    if (!COMMIT_MESSAGE_REGEXP.test(header)) {
        return [false, COMMIT_ERROR_MESSAGE];
    }
    return [true];
};

const config: UserConfig = {
    extends: [],
    defaultIgnores: true,
    plugins: [
        {
            rules: {
                'custom-commit-format': ({ header }: { header: any }) =>
                    validateCommitMessage(header),
            },
        },
    ],
    rules: {
        'custom-commit-format': [2, 'always'],
    },
};

export default config;
