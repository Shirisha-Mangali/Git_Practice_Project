import React from 'react';
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
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" value={password} onClick={(e)=>setPassword(e.target.value)} required/>
            </div>
            <button tupe="submit">Login</button>
        </form>
        </>
    )
}

export default Login;