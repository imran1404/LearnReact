import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Nav from './Components/Nav';
import Products from './pages/Products'
import Cart from './pages/Cart';



const App = () => {
    return (
        <>
            <Router>

                <Nav />

                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='./pages/Products' element={<Products />} />
                    <Route path='/Cart' element={<Cart />} />

                </Routes>
            </Router>

        </>



    );
}

export default App;