import { useCallback, useState } from 'react';
import { type UserDto } from 'shared';

import '~/App.scss';
import reactLogo from '~/assets/react.svg';
import viteLogo from '~/assets/vite.svg';

const App: React.FC = () => {
    const firstNumberOfUser: number = 0;
    const [count, setCount] = useState<number>(firstNumberOfUser);
    const counterNumber = 1;
    const changeCountOnClick = useCallback(() => {
        setCount(count + counterNumber);
    }, [count]);

    const user: UserDto = {
        avatarUrl: ' this is avatar',
        email: 'string',
        id: 5,
        name: 'string',
    };

    return (
        <>
            <div>
                <a href="https://vite.dev" rel="noreferrer" target="_blank">
                    <img alt="Vite logo" className="logo" src={viteLogo} />
                </a>
                <a href="https://react.dev" rel="noreferrer" target="_blank">
                    <img
                        alt="React logo"
                        className="logo react"
                        src={reactLogo}
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={changeCountOnClick}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code>
                    {user.avatarUrl} and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
};

export { App };
