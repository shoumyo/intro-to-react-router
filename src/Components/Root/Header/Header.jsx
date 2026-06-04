import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css';

const Header = () => {
    return (
        <div>
            <p>This is the header</p>
            {/* <nav>
                <a href='/Home'>Home</a>
                <a href='/Mobiles'>Mobiles</a>
                <a href='/Laptops'>Laptops</a>
            </nav> */}
            <nav>
                <NavLink to="/Home">Home</NavLink>
                 <NavLink to="/Laptops">Laptops</NavLink>
                <NavLink to="/Mobiles">Mobiles</NavLink>
            </nav>
        </div>
    );
};

export default Header;