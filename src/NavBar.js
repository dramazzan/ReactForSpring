import './styles/navbar.css'
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export default function NavBar(){
    const navigate = useNavigate()
    const [token , setToken] = useState(null)

    useEffect(()=>{
        const user = localStorage.getItem('user')
        setToken(user)
    })


    const logout = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }



    return (
        <>
            <div className="navigation_box">
                <div className="container">
                    <div className="logo">
                        <h1>
                            <Link to="/">BuyCar</Link>
                        </h1>
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <Link to="/cars">cars</Link>
                            </li>
                            <li>
                                <Link to="/addcar">add</Link>
                            </li>
                            <li>
                                {
                                    token? (
                                        <button onClick={logout}>logout</button>
                                    ) : (
                                        <Link to="/login">login</Link>
                                    )
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}

