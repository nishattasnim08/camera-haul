import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <Link to="/">Home</Link>
            <Link to="/review">Review</Link>
            <Link to="">Dashboard</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="">About</Link>
        </nav>
    );
};

export default Header;