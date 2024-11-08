import React, { useState, useEffect } from 'react';

function UserAccount() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('http://localhost:8000/api/user/');
            const data = await response.json();
            setUser(data);
        };
        fetchUser();
    }, []);

    if (!user) {
        return <p>Loading user data...</p>;
    }

    return (
        <div>
            <h1>User Account</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {/* Add other account settings or actions */}
        </div>
    );
}

export default UserAccount;
