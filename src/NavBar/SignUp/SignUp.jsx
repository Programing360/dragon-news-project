import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import { useContext, useState } from "react";
import { AuthProvider } from "../../FireBaseAuth/FireBaseAuth";

const SignUp = () => {
  const [successful,setSuccessful] = useState(false)
  const [error, setError] = useState('')
  const {signIn} = useContext(AuthProvider)
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const handleSubmitBtn = (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value
    console.log( email, password)

    signIn(email,password)
    .then(result => {
      console.log(result.user)
      navigate(location?.state ? location.state : '/category/01')
      setSuccessful(true)
      
    })
    .catch(error => {
      console.log(error)
      setSuccessful(false)
      setError(error.message)
    })
  }
  return (
    <div>
      <NavBar></NavBar>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>

          </div>
          <div className="card bg-base-100 w-full max-w-sm p-10 shrink-0 shadow-2xl">
            <div className="card-body">
              {
                successful && <p className="text-center font-semibold text-emerald-500">Login successful</p>
              }
              <form onSubmit={handleSubmitBtn}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" name="email" className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input type="password" name="password" className="input" placeholder="Password" />
                  {
                    error && <p className="text-red-600">You didn't current Information</p>
                  }
                  <div><a className="link link-hover">Forgot password?</a></div>
                  <button className="btn btn-neutral mt-4">Login</button>
                  <p>Don't have an account? <Link to='/register' className="text-center font-semibold">Register</Link></p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;