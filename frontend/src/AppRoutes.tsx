import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Location from './Location/Location';
import StandAlone from './Location/StandAlone';
function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/image/:id" element={<StandAlone />} />
                <Route element={<App />}>
                    <Route path="*" element={<Home />} />
                    <Route path="/:location" element={<Location />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default AppRoutes;
