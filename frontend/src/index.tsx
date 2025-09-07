import * as React from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import { App } from './app.js';

createRoot(document.querySelector('#root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
