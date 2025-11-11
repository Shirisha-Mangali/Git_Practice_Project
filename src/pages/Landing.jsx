import React from 'react';
import {Link} from 'react-router-dom';

const Landing=()=>{
    return(
        <>
        <h1>Daily status</h1>
        <Link to="/login">
        <button>Login</button>
        </Link>
        <Link to="/signup">
        <button>Sign Up</button>
        </Link>
        </>
    )
}
export default Landing;