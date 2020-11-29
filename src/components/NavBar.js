import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const NavBar = () => {
    const themeContextType = useContext(ThemeContext);
    const authContext = useContext(AuthContext);

    const { isLightTheme, dark, light } = themeContextType;
    const theming = isLightTheme ? light : dark;
    const { isAuthenticated, toggleAuth } = authContext;

    return ( 
        <nav style={{background: theming.ui, color: theming.syntax}}>
            <h1>Learn React-Context</h1>
            <div onClick={toggleAuth} style={{cursor: "pointer"}}>
                {
                    isAuthenticated ? 'logged In' : 'logged out'
                }
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
     );
}
 
export default NavBar;