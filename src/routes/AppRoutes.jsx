import{Routes,Route,useLocation} from 'react-router-dom';
import React from 'react';
import Header from '../components/Header';
import Home from '../pages/Home.jsx';
import Landing from '../pages/Landing.jsx';
import Login from '../pages/Login.jsx';
import SignUp from '../pages/SignUp.jsx';

const AppRoutes=()=>{
    const location=useLocation();
    return(
        <>
        {!(location.pathname==='/'||location.pathname==='/login'||location.pathname==='/signup')&& <Header/>}
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
        </>
    )
}

export default AppRoutes;

