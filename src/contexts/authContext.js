import { createContext, useContext, useState } from "react";
import { SignupServiceHandler, LoginServiceHandler } from "../services/allServices";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AuthContext = createContext()

const AuthenticationProvider = ({ children }) => {
    const navigate = useNavigate()
    const location = useLocation();
    const authToken = localStorage.getItem("authToken")
    const [authUser, setAuthUser] = useState({
        isUserLoggedIn: authToken ? true : false,
        token: authToken
    })
    const UserSignUpHandler = async ({ firstName, lastName, email, password }) => {
        const data = await SignupServiceHandler(firstName, lastName, email, password)
        localStorage.setItem("authToken", data.encodedToken);
        setAuthUser({
            token: data.encodedToken,
            isUserLoggedIn: true,
        })
        navigate("/videoListing")
    }

    const UserLoginHandler = async ({ email, password }) => {
        const data = await LoginServiceHandler(email, password);
        localStorage.setItem("authToken", data.encodedToken);
        setAuthUser({
            token: data.encodedToken,
            isUserLoggedIn: true,
        });
        navigate(location?.state?.from?.pathname, { replace: true })
    };

    const logOutHandler = () => {
        setAuthUser({
            token: null,
            isUserLoggedIn: false
        })
        localStorage.removeItem("authToken")
        toast.success("Logged out successfully")
    }
    return <AuthContext.Provider
        value={{ authUser, setAuthUser, UserLoginHandler, UserSignUpHandler, logOutHandler }}>
        {children}
    </AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)

export { AuthenticationProvider, useAuth }