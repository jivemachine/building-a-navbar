import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route to="/" element={<Home />}>Home</Route>
                <Route to="/about" element={<About />}>About</Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;