import { useCallback, useState } from 'react';

import reactLogo from '~/assets/react.svg';

import viteLogo from '../public/vite.svg';
import './App.scss';

const App: React.FC = () => {
    const firstNumberOfUser: number = 0;
    const [count, setCount] = useState<number>(firstNumberOfUser);
    const counterNumber = 1;
    const changeCountOnClick = useCallback(() => {
        setCount(count + counterNumber);
    }, [count]);

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
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
};

export { App };
