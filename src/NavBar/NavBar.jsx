import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import icon from '../assets/user.png'
import Login from '../component/Catagory/login';
import { AuthProvider } from '../FireBaseAuth/FireBaseAuth';
const NavBar = () => {
    const { user,userSignOut } = useContext(AuthProvider)
    console.log(user?.photoURL)
    const handleSignOut = () => {
        userSignOut()
        .then(res => {
            console.log(res)
        })
        .catch(error => alert(error.code))
    }
    return (

        <div className="container flex justify-between items-center w-11/12 py-4 mx-auto">
            <div>
                {/* <Login></Login> */}
            </div>
            <div className='space-x-3'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/carrer'>Career</NavLink>
            </div>
            <div className='flex items-center gap-2'>
                {
                    user && user.photoURL ? <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" /> : <img src={icon} alt="" />
                }
                
                {
                   user && user.email ? <button onClick={handleSignOut} className='btn bg-black text-white'>Log-out</button> : <Link to='/login' className='btn bg-black text-white'>Login</Link>
                }

            </div>
        </div>
    );
};

export default NavBar;