import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
    const [logUser, setLogUser] = useState(null);
    const router = useLocation;

    useEffect(() => { //This useEffect will be caused by SSR. //サーバーサイドレンダリング時のためのuseEffect
        if(sessionStorage.getItem("logUser") !== null) {
            // setLogUser(JSON.parse(sessionStorage.getItem("logUser"))[0].name);
        } else {
            setLogUser(null);
        }
    }, []);
    useEffect(() => { //This useEffect will be caused by change by CSR when user move to another page. //ユーザーがサイト内のページ遷移したときのためのuseEffect
        if(sessionStorage.getItem("logUser") !== null) {
            // setLogUser(JSON.parse(sessionStorage.getItem("logUser"))[0].name);
        } else {
            setLogUser(null);
        }
    }, [router]);
   
    const logout = () => {
        sessionStorage.clear();
    }
    
    return (
        <>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/game">game</Link></li>
                { logUser ? null : <li><Link to="/login">login</Link></li> }
                { logUser ? null : <li><Link to="/register">register</Link></li> }
                { logUser ? <li><Link to="/user">user</Link></li> : null }
                { logUser ? <li><Link to="/" onClick={logout}>logout</Link></li> : null }
            </ul>
        </>
    )
}

export default Header;