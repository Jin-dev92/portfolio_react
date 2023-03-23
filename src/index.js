import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {ConfigProvider, theme} from "antd";
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Netflix from "./pages/Netflix";
import LoadingIndicator from "./components/common/LoadingIndicator";

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            suspense: true,
            useErrorBoundary: true,
        }
    },
})
// const router =
//     [
//         {
//             path: '/',
//             element: <App/>,
//             children: [
//                 {
//                     path: "netflix",
//                     element: <Netflix/>,
//                 }
//             ]
//         }
//     ]

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
            {/*<RouterProvider router={router} fallbackElement={<LoadingIndicator/>}/>*/}
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<App/>}/>
                    <Route path={"/netflix"} element={<Netflix/>}/>
                {/*    useParams*/}
                </Routes>
            </BrowserRouter>

        </QueryClientProvider>
    </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
