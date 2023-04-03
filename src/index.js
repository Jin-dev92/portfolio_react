import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './anime.css';
import App from './App';
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {ConfigProvider, theme} from "antd";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Netflix from "./pages/Netflix";
import {Provider} from "react-redux";
import {RTKStore} from "./redux/store";
import NetflixMovieDetail from "./pages/NetflixMovieDetail";
import {SuspenseComponent} from "./components/common/SuspenseComponent";

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

root.render(
    <Provider store={RTKStore}>
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
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<App/>}/>
                        <Route path={"/netflix"} element={<SuspenseComponent children={<Netflix/>}/>}/>
                        {/*<Route path={"/netflix/:id"} element={<NetflixMovieDetail/>}/>*/}
                    </Routes>
                </BrowserRouter>

            </QueryClientProvider>
        </ConfigProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
