import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './styles/profile.css'
import NavBar from "./NavBar";
export default function Profile() {
    const [user, setUser] = useState(null);  // Инициализация состояния пользователя с null
    const navigate = useNavigate();
    const [role, setRole] = useState(false)

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
            if(storedUser.role === "ROLE_ADMIN"){
                setRole(true)
            }

        }
    }, []);

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
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
                        {
                            role ? (<Link to="/admin">Admin page</Link> ) : (<p></p>)
                        }
                        <button onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <div className={"route_box"}>
                        <h2>You need to log in</h2>
                        <Link to="/login">Login</Link>
                    </div>
                )}
            </div>
        </>
    );
}
