import './styles/navbar.css'
import {Link} from "react-router-dom";

export default function NavBar(){


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
                                    <Link to="/profile">profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}

