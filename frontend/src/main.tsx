import { createTheme, MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const theme = createTheme({
    fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    scale: 1,
});

export const ThemedApp = () => {
    return (
        <MantineProvider theme={theme}>
            <App />
        </MantineProvider>
    );
};
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemedApp />
    </React.StrictMode>
);
