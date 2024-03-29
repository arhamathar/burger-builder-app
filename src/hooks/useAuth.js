import { useState, useEffect, useCallback } from 'react';

let logoutTimer;

const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [expirationDate, setExpirationDate] = useState(null);

    const login = useCallback((uid, token, expiresIn) => {
        setToken(token);
        setUserId(uid);
        const tokenExpiration =
            expiresIn || new Date().getTime() + expiresIn * 1000;
        setExpirationDate(tokenExpiration);
        localStorage.setItem(
            'userData',
            JSON.stringify({
                userId: uid,
                token: token,
                expirationDate: new Date(tokenExpiration),
            })
        );
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setExpirationDate(null);
        localStorage.removeItem('userData');
    }, []);

    // Auto logout feature after 1h
    useEffect(() => {
        if (token && expirationDate) {
            const remainingTime =
                new Date(expirationDate).getTime() -
                new Date().getTime();
            logoutTimer = setTimeout(logout, remainingTime);
        } else {
            clearTimeout(logoutTimer);
        }
    }, [token, expirationDate, logout]);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (
            userData &&
            userData.token &&
            userData.expirationDate > new Date().toISOString()
        ) {
            login(
                userData.userId,
                userData.token,
                userData.expirationDate
            );
        }
    }, [login]);

    return { token, login, logout, userId };
};

export default useAuth;
