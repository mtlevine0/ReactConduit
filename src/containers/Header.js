import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                <Link className="navbar-brand" to="/">conduit</Link>
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/login">Sign in</Link>
                    <Link className="nav-item nav-link" to="register">Sign up</Link>
                </div>
            </nav>
        );
    }
}

export default Header;