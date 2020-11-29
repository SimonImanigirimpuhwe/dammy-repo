import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [auth, setAuth] = useState({
        isAuthenticated: false
    });
    const { isAuthenticated } = auth;
    const toggleAuth = () => {
        setAuth({ isAuthenticated: !isAuthenticated })
    };

    return ( 
        <AuthContext.Provider value={{isAuthenticated, toggleAuth}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;