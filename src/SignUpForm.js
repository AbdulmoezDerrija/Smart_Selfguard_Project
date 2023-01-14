import React from 'react';

const SignUpForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
            const formData = new FormData(event.target);
            fetch('/signup', {
                method: 'POST',
                body: formData,
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type="text" name="firstName" />
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" name="lastName" />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <br />
            <label>
                Confirm Password:
                <input type="password" name="confirmPassword" />
            </label>
            <br />
            <label>
                Gender:
                <input type="radio" name="gender" value="male" /> Male
                <input type="radio" name="gender" value="female" /> Female
            </label>
            <br />
            <label>
                Phone Number:
                <input type="text" name="phone" />
            </label>
            <br />
            <label>
                Age:
                <input type="number" name="age" />
            </label>
            <br />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUpForm;