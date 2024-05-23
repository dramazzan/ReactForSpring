import {useState} from "react";
import {loginUser} from "./api";
import {Link, useNavigate} from "react-router-dom";
import './styles/forms.css'

export default function Login(){

    const [message ,  setMessage] = useState()
    const navigate = useNavigate()

    const [user, setUser] = useState({
        username:'',
        password:''
    });

    const handleUsername = (e) => {
        setUser({...user, username:e.target.value})
    }

    const handlePassword = (e) => {
        setUser({...user, password:e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await loginUser(user)
        if(response.success){
            navigate("/cars")
            console.log(response)
        }else{
            navigate("/login")
            setMessage(response.error)
            setTimeout(()=>{
                setMessage("")
            } , 4000)
        }

    }

    return(
        <>
        <div className="form_box">
            <div className="container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="username_box">
                        <label htmlFor="username">Username</label>
                        <input onChange={handleUsername} type="text" id="username" name="username"/>
                    </div>
                    <div className="password_box">
                        <label htmlFor="password">Password</label>
                        <input onChange={handlePassword} type="password" id="password" name="password"/>
                    </div>
                    {message && (<p className="message">{message}</p>)}
                    <div className="submit_box">
                        <button type="submit">Login</button>
                    </div>
                    <div className="link_box">
                        <span>Not registered yet?</span>
                        <Link to="/register">Register</Link>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}