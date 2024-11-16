import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
function App() {
    return (
        <div className="app">
            <HashRouter>
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="/image/:id" element={<Home />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
