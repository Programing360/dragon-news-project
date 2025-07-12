import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import { AuthProvider } from '../../FireBaseAuth/FireBaseAuth';

const Register = () => {
    const { signUp, successful } = useContext(AuthProvider)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleSubmitBtn = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const photoURL = e.target.photo.value
        console.log(name, email, password,photoURL)
        signUp(email, password,photoURL)
            .then(result => {
                console.log(result.user)
                // setSuccessful(result.user)
                navigate('/category/01')
            })
            .catch(error => {
                console.log(error)
                setError(error)
                // setSuccessful(false)
            })

    }


    return (
        <div>
            <NavBar></NavBar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm p-10 shrink-0 shadow-2xl">
                        <div className="card-body">
                            {
                                successful && <p className="text-center font-semibold text-emerald-500">Sign Up Success</p> 
                            }
                            <form onSubmit={handleSubmitBtn}>
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input type="text" name='name' className="input" placeholder="Your Name" />
                                    <label className="label">Photo URL</label>
                                    <input type="lable-text" name='photo' className="input" placeholder="Photo URL" />
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />
                                    {
                                        error && <p className="text-red-600">You didn't current Information</p>
                                    }
                                    <button className="btn btn-neutral mt-4">Register</button>
                                    <p>Already have an account? <Link to='/Login' className="text-center font-semibold">Login</Link></p>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;