import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const initialState = {
    isLightTheme: true,
    light: {
        syntax: '#555',
        ui: '#ddd',
        bg: '#eee'
    },
    dark: {
        syntax: '#ddd',
        ui: '#333',
        bg: '#555'
    }
}
const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState(initialState);

    const { isLightTheme } = theme
    const toggleTheme = () => {
        setTheme({...theme, isLightTheme: !isLightTheme})
    }
    return ( 
        <ThemeContext.Provider value={{...theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;