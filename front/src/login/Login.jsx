import React, {useState} from "react";
import axios from 'axios';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    async function makePostCall(email, pass){
        try {
            const response = await axios.post('http://localhost:5000/login', {
                    email: email,
                    pass: pass,
                    flag: 'login'
                });
            return response.data; 
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(makePostCall(email, pass));
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"></input>
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>No Account? Register Here</button>
        </div>
    )
}