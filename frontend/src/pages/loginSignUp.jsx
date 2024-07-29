import react, { useState } from 'react'
import './css/loginSignUp.css'
const LoginSignUp = () => {

    const [state, setState] = useState("Login")
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const login = async () => {
        let responseData;
        await fetch("http://localhost:4000/login", {
            method: "post",
            headers: {
                Accept: "application/form-data",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((resp) => resp.json())
            .then((data) => responseData = data)

        if (responseData.success) {
            localStorage.setItem("authToken", responseData.token)
            window.location.replace("/")
        } else {
            alert(responseData.errors)
        }
    }
    const signup = async () => {
        let responseData;
        await fetch("http://localhost:4000/signup", {
            method: "post",
            headers: {
                Accept: "application/form-data",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((resp) => resp.json())
            .then((data) => responseData = data)

        if (responseData.success) {
            localStorage.setItem("authToken", responseData.token)
            window.location.replace("/")
        } else {
            alert(responseData.errors)
        }
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    return (
        <div className="loginSignUp">
            <div className="loginSignUp-container">
                <h1>{state}</h1>
                <div className="loginSignUp-fields">
                    {state === "Sign Up" ? <input onChange={handleChange} name="username" value={formData.username} type="text" placeholder="Your Name" /> : <></>}
                    <input onChange={handleChange} name="email" value={formData.email} type="email" placeholder="Email Address" />
                    <input onChange={handleChange} name="password" value={formData.password} type="password" placeholder="Password" />
                </div>
                <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
                {state === "Sign Up" ?
                    <p className="loginSignUp-login">
                        Already have an account? <span onClick={() => setState("Login")}>Login here</span>
                    </p> : <></>}
                {state === "Login" ?
                    <p className="loginSignUp-login">
                        Create an account? <span onClick={() => setState("Sign Up")}>Click here</span>
                    </p> : <></>}
                <div className="loginSignUp-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignUp