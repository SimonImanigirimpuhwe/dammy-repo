import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
    // const contextType = useContext(ThemeContext);
    // const { isLightTheme, dark, light } = contextType;
    // const theming = isLightTheme ? light : dark;

    return ( 
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, dark, light } = context;
            const theming = isLightTheme ? light : dark;

           return (
            <div className="book-list" style={{ background: theming.bg, color: theming.syntax}}>
                <ul>
                    <li style={{background: theming.ui}}>The goals</li>
                    <li style={{background: theming.ui}}>Poor Dad and rich Dad</li>
                    <li style={{background: theming.ui}}>Everything is fucked</li>
                </ul>
            </div>
           )
        }}         
        </ThemeContext.Consumer>
     );
}
 
export default BookList;