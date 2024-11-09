import { createTheme, MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './AppRoutes.tsx';
import './index.css';

const theme = createTheme({
    fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    scale: 1,
});

export const ThemedApp = () => {
    return (
        <MantineProvider theme={theme} classNamesPrefix="DataTab">
            <AppRoutes />
        </MantineProvider>
    );
};
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemedApp />
    </React.StrictMode>
);
