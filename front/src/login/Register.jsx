import React, {useState} from 'react';
import axios from 'axios';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    async function makePostCall(email, name, pass){
        try {
            const response = await axios.post('http://localhost:5000/login', {
                    email: email,
                    name: name,
                    pass: pass
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
        console.log(makePostCall(email, name, pass))
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Your Name" id="name" name="name"/>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"></input>
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Have an account? Login Here</button>
        </div>
    )
}