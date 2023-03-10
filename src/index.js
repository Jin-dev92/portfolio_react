import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {ConfigProvider, theme} from "antd";

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            // suspense: true
        }
    },

})
root.render(
    <ConfigProvider
        theme={{
            algorithm: theme.darkAlgorithm,
        }}
    >
        <QueryClientProvider client={queryClient}>
            {/* devtools */}
            {
                process.env.NODE_ENV === 'development' ?
                    <ReactQueryDevtools initialIsOpen={false}/> : null
            }
            <App/>
        </QueryClientProvider>
    </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
