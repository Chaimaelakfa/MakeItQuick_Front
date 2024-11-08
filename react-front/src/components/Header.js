import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isAuthenticated, userName, userImage, onSignInClick }) {
    return (
        <header>
            <div className="logo">
                <img src="image.png" alt="Logo" />
                <h1>Make It Quick</h1>
            </div>
            <div className="auth-links">
                {isAuthenticated ? (
                    <div className="user-info">
                        <img src={userImage} alt={userName} className="user-img" />
                        <span>{userName}</span>
                    </div>
                ) : (
                    <button onClick={onSignInClick}>Sign In</button>
                )}
            </div>
        </header>
    );
}

export default Header;
