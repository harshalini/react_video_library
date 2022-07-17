import { useState } from "react"
import { AccLinks, Navbar } from "../../components/allComp"
import { useAuth } from "../../contexts/allContext"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignUp = () => {
    const { UserSignUpHandler } = useAuth()

    const [userSignUp, setUserSignUp] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    return (
        <div>
            <Navbar />
            <div className="account-page">
                <div className="form-container">
                    <AccLinks />
                    <form className="register-form">
                        <input type="text" placeholder="Firstname" required
                            onChange={(e) => setUserSignUp({ ...userSignUp, firstName: e.target.value })}
                        />
                        <input type="text" placeholder="LastName" required
                            onChange={(e) => setUserSignUp({ ...userSignUp, lastName: e.target.value })}
                        />
                        <input type="email" placeholder="Email" required
                            onChange={(e) => setUserSignUp({ ...userSignUp, email: e.target.value })}
                        />
                        <input type="password" placeholder="Password" required
                            onChange={(e) => setUserSignUp({ ...userSignUp, password: e.target.value })}
                        />
                        <div className="pswd-rem">
                            <input type="checkbox" id="check" />
                            <label id="remember-check">I accept the terms and conditions</label>
                        </div>
                        <button type="submit" className="account-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                UserSignUpHandler(userSignUp)
                                toast.success("Signed up successfully")
                            }
                            }
                        >Signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
