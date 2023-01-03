import React, { useState } from 'react';
import { fetch } from 'isomorphic-fetch';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // make POST request to backend server
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                // handle response from server
                if (data.success) {
                    // login successful, do something here
                } else {
                    // login failed, do something here
                }
            })
            .catch((error) => {
                // handle error
            });
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        style={styles.input}
                    />
                </label>
                <br />
                <label style={styles.label}>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        style={styles.input}
                    />
                </label>
                <br />
                <input type="submit" value="Login" style={styles.button} />
            </form>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#333',
        color: '#fff',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    label: {
        margin: '1rem 0',
    },
    input: {
        width: '20rem',
        height: '2rem',
        border: 'none',
        borderRadius: '0.5rem',
        padding: '0.5rem',
        margin: '0.5rem 0',
        fontSize: '1rem',
    },
    button: {
        width: '10rem',
        height: '2rem',
        border: 'none',
        borderRadius: '0.5rem',
        backgroundColor: '#0074d9',
        color: '#fff',
        fontSize: '1rem',
    },
};

export default LoginPage;
