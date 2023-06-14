import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useLocation } from "react-router";
const initialVal = {
    name: "",
    pw: ""
}

const Login = () => {
    const [inputVal, setInputVal] = useState(initialVal);
    const router = useLocation();
    const inputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputVal({
            ...inputVal,
            [e.target.name]: e.target.value
        })
    }
    const login = (e: SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log("supposed to login");
    }
    return (
        <>
            <form onSubmit={login}>
                <input type="text" placeholder="name" name="name" value={inputVal.name} onChange={inputChange} required/>
                <input type="password" placeholder="password" name="pw" value={inputVal.pw} onChange={inputChange} required/>
                <button type="submit">login</button>
            </form>
        </>
    )
}

export default Login;