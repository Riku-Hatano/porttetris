import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const CheckLogUser = (): null | string => {
    const router = useLocation();
    let logUser;

    useEffect(() => { //This useEffect will run in the first rendering, which means just after web page is refreshed.
        if(sessionStorage.getItem("logUser") !== null) {
            // console.log(sessionStorage.getItem("logUser"));
            // logUser = JSON.parse(sessionStorage.getItem("logUser"))[0].name;
        } else {
            console.log("no logged in user");
        }
    }, []);
    useEffect(() => { //This useEffect will run after second rendering. Only with the useEffecth which doesn't contain the pathname as the watching variable.
        if(sessionStorage.getItem("logUser") !== null) {
            // console.log(sessionStorage.getItem("logUser"));
            // logUser = JSON.parse(sessionStorage.getItem("logUser"))[0].name;
        } else {
            console.log("no logged in user");
        }
    }, [router.pathname]);
    return "dummy user";
}

export default CheckLogUser;