import React from 'react';
import {Link} from 'react-router-dom';

const Landing=()=>{
    return(
        <>
        
        <Link to="/login">
        <button class="btn btn-primary">Login</button>
        </Link>
        <Link to="/signup">
        <button class="btn btn-danger">Sign Up</button>
        </Link>
        </>
    )
}
export default Landing;