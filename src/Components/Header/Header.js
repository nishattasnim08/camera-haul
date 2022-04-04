import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <a href="/">Home</a>
            <a href="/review">Review</a>
            <a href="">Dashboard</a>
            <a href="">Blogs</a>
            <a href="">About</a>
        </nav>
    );
};

export default Header;