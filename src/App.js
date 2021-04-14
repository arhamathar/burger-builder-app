import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Routes from "./Routes";
import { AuthContext } from "./context/authContext";

function App() {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [expirationDate, setExpirationDate] = useState(null);

    const login = (uid, token, expiresIn) => {
        setToken(token);
        setUserId(uid);
        const tokenExpiration =
            expiresIn || new Date().getTime() + expiresIn * 1000;
        setExpirationDate(tokenExpiration);
        localStorage.setItem(
            "userData",
            JSON.stringify({
                userId: userId,
                token: token,
                expirationDate: new Date(tokenExpiration),
            })
        );
    };

    const logout = () => {
        setToken(null);
        setUserId(null);
        setExpirationDate(null);
        localStorage.removeItem("userData");
    };

    // Auto logout feature after 1h
    // useEffect(() => {
    //     if (token && expirationDate < new Date().toISOString()) {
    //         setTimeout(() => {
    //             logout()
    //             console.log(expirationDate);
    //         }, expirationDate);
    //     }
    // }, [token, expirationDate]);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userData"));

        if (
            userData &&
            userData.token &&
            userData.expirationDate > new Date().toISOString()
        ) {
            login(userData.userId, userData.token, userData.expirationDate);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                token: token,
                userId: userId,
                login: login,
                logout: logout,
            }}
        >
            <Router>
                <Layout>
                    <Routes token={token} />
                </Layout>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
