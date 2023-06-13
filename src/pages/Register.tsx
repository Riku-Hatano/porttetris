import { ChangeEvent, SyntheticEvent } from "react";
import { useState } from "react";
import axios from "axios";

const initialVal = {
    name: "",
    pw: "",
    regdate: "2023-04-10"
}

const Register = () => {
    const [inputVal, setInputVal] = useState(initialVal);
    const inputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputVal({
            ...inputVal,
            [e.target.name]: e.target.value
        })
    }
    const register = (e: SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log("supposed to register one user");
    }
    const getUsers = () => {
        console.log("supposed to get all user data");
    }
    return (
        <>
            <form onSubmit={register}>
                <input type="text" placeholder="name" name="name" value={inputVal.name} onChange={inputChange} required />
                <input type="text" placeholder="password" name="pw" value={inputVal.pw} onChange={inputChange} required />
                <input type="date" placeholder="date" name="regdate" value={inputVal.regdate} onChange={inputChange} required />
                <button type="submit">register</button>
            </form>
            <button onClick={getUsers}>check users in database</button>
        </>
    )
}

export default Register;