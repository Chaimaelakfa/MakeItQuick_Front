import React from 'react';
import Header from '../components/Header';

function Home() {
    const handleSignInClick = () => {
        console.log("Sign In clicked!");
    };

    return (
        <div>
            <Header isAuthenticated={false} onSignInClick={handleSignInClick} />
            <div className="home-body">
                <div className="left-side">
                    <img src="image.png" alt="Large" />
                </div>
                <div className="right-side">
                    <h2>Welcome to the To-Do List App</h2>
                    <p>Create your to-do lists, manage tasks, and stay organized!</p>
                    <div className="auth-buttons">
                        <button onClick={handleSignInClick}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

