import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Nopage from "./pages/Nopage"
import Register from "./pages/Register";
import User from "./pages/User";
import Layout from "./components/Layout";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<>
                        <Layout>
                            <Home />
                        </Layout>
                    </>} />
                    <Route path="/game" element={<>
                        <Layout>
                            <Game />
                        </Layout>
                    </>} />
                    <Route path="/login" element={<>
                        <Layout>
                            <Login />
                        </Layout>
                    </>} />
                    <Route path="/register" element={<>
                        <Layout>
                            <Register />
                        </Layout>
                    </>} />
                    <Route path="/user" element={<>
                        <Layout>
                            <User />
                        </Layout>
                    </>} />
                    <Route path="*" element={<>
                        <Layout>
                            <Nopage />
                        </Layout>
                    </>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;