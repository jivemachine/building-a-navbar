import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route to="/" element={<Home />}>Home</Route>
                <Route to="/about" element={<About />}>About</Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;