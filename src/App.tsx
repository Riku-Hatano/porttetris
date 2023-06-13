import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Nopage from "./pages/Nopage"
import Register from "./pages/Register";
import User from "./pages/User";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user" element={<User />} />
                <Route path="*" element={<Nopage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;