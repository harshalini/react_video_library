import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AccLinks, Navbar } from "../../components/allComp"
import { useAuth } from "../../contexts/allContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
export const Login = () => {
    const { UserLoginHandler } = useAuth()
    const [userLogIn, setUserLogIn] = useState({
        email: "",
        password: ""
    })
    const guestCredentials = {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123"
    }

    return (
        <div>
            <Navbar />
            <div className="account-page">
                <div className="account-container">
                    <div className="form-container">
                        <AccLinks />
                        <form className="login-form" onSubmit={(e) => {
                            e.preventDefault()
                            UserLoginHandler(guestCredentials)
                            toast.success("Logged in successfully")
                        }}>
                             <ToastContainer />
                            <input type="text" placeholder="Email"
                                onChange={(e) => setUserLogIn({ ...userLogIn, email: e.target.value })}
                            />
                            <input type="password" placeholder="Password"
                                onChange={(e) => setUserLogIn({ ...userLogIn, password: e.target.value })}
                            />
                            <div className="pswd-rem">
                                <input type="checkbox" id="check" />
                                <label id="remember-check">Remember me</label>
                            </div>
                            <button type="button" className="account-btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    UserLoginHandler(userLogIn)
                                    toast.success("Logged in successfully")
                                }}
                            >Login</button>
                            <a href="#" className="fr-pswd">Forgot password?</a>
                            <button type="submit" className="account-btn"
                            >Login as Guest</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
