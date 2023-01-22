import React, {useState} from "react";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(pass);
    }

    return (
        <form onSubmit={handleSubmit}>
          <label for="email">email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
          <label value={pass} onChange={(e) => setPass(e.target.value)} for="password">password</label>
          <input type="password" placeholder="*********" id="password" name="password"></input>
          <button type="submit">Log In</button>
        </form>
    )
}