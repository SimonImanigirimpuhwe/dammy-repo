import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    
    return ( 
        <ThemeContext.Consumer>{(context) => {
            const { toggleTheme } = context;
            return (
                <button onClick={toggleTheme}>Toggle Theme</button>
            )
        }}
        </ThemeContext.Consumer>
     );
}
 
export default ThemeToggle;