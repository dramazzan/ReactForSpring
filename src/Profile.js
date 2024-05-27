import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './styles/profile.css';

export default function Profile() {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser) {
                setUser(storedUser);
                if (storedUser.role === "ROLE_ADMIN") {
                    setRole(true);
                }
            }
        } catch (error) {
            console.error("Error parsing user data from localStorage", error);
            // Optionally, clear the corrupted data from localStorage
            localStorage.removeItem('user');
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <>
            <div className="profile_box">
                <div className="mini_nav_bar">
                    <Link to="/">Home</Link>
                    <Link to="/cars">Cars</Link>
                </div>
                {user ? (
                    <div className="profile_container">
                        <h1>Profile</h1>
                        <p>Name: {user.username}</p>
                        <p>Age: {user.age}</p>
                        {role ? (
                            <Link to="/admin"><b>ADMIN</b></Link>
                        ) : (
                            <Link to="/orders">Orders</Link>
                        )}
                        <button onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <div className="route_box">
                        <h2>You need to log in</h2>
                        <Link to="/login">Login</Link>
                    </div>
                )}
            </div>
        </>
    );
}
