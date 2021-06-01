import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Layout from './components/Layout/Layout';
import { AuthContext } from './context/authContext';
import useAuth from './hooks/useAuth';

function App() {
    const { token, login, logout, userId } = useAuth();

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
                    <Suspense
                        fallback={
                            <div className='center'>Loading ...</div>
                        }
                    >
                        <Routes token={token} />
                    </Suspense>
                </Layout>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
