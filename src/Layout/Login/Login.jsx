import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';
import FindUs from '../FindUs/FindUs';
import { AuthProvider } from '../../FireBaseAuth/FireBaseAuth';

const Login = () => {
    const {loginWithGoogle} = useContext(AuthProvider)
    const handlegoogleLogin = () => {
        loginWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            alert(error.code)
        })
    }
    return (
        <div>
            <h1 className="font-semibold">Login with</h1>
            <div className='my-3 space-y-3 mx-auto container'>
                <button onClick={handlegoogleLogin} className='btn w-full hover:bg-blue-500'><FaGoogle></FaGoogle>Login with google</button>
                <button className='btn w-full hover:bg-blue-500'><FaGithub></FaGithub> Login with Github</button>
            </div>
            <div className='mt-10 border-2 p-2 border-gray-100'>
                <FindUs></FindUs>
            </div>
        </div>
    );
};

export default Login;