import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "./api";

export default function Register() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        age: 13,
        password: '',
    });

    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsername = (event) => {
        setUser({ ...user, username: event.target.value });
    };

    const handleAge = (event) => {
        setUser({ ...user, age: event.target.value });
    };

    const handlePassword = (event) => {
        setUser({ ...user, password: event.target.value });
    };

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        // Валидация пароля
        if (user.password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return;
        }

        if (user.password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        const response = await registerUser(user);
        if (response.success) {
            navigate("/login");
        } else {
            setError('Registration failed.');
        }
    };

    return (
        <>
            <div className="form_box">
                <div className="container">
                    <h2>Register</h2>
                    {error && <div className="message">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="username_box">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" onChange={handleUsername} />
                        </div>
                        <div className="age_box">
                            <label htmlFor="age">Age</label>
                            <input type="number" name="age" id="age" onChange={handleAge} />
                        </div>
                        <div className="password_box">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" onChange={handlePassword} />
                        </div>
                        <div className="confirm_password_box">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" onChange={handleConfirmPassword} />
                        </div>
                        <div className="submit_box">
                            <button type="submit">Register</button>
                        </div>
                        <div className="link_box">
                            <span>You are already registered?</span>
                            <Link to="/login">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
