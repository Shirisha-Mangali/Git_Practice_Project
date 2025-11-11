import React from 'react';
import { useState } from 'react';
    import 'bootstrap/dist/css/bootstrap.css';
const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!email||!password){
            setErrorMeassage('please enter both email and password');
            return;
        }
          console.log('Logging in with:', { email, password });
          if(email==='abc@gmail.com' && password==='12345'){
            console.log('Login successful!');
            setEmail('');
            setPassword('');
            }else{
                console.log('Invalid email or password');
            }
          };
    
    return(
        <>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <div class="d-flex flex-column justify-content-center p-3 mb-3">
                <div class="d-flex flex-column justifty-content-center p-3">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div class="d-flex flex-column justifty-content-center p-3">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
            </div>
            <button class="btn btn-primary" tupe="submit">Login</button>

            
        </form>
        </>
    )
}

export default Login;