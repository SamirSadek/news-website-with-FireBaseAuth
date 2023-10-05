import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {

    const {logInUser} = useContext(AuthContext)

    const location = useLocation()
    console.log(location.pathname)
    const Navigate = useNavigate()


    const handleLogin = e =>{
        e.preventDefault();
        // const email = e.target.email.value
        // console.log("line no 7 :" , email)

        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(form.get('email'))
        logInUser(email,password)
        .then(result => {
          console.log(result.user)
          // navigate after login
          Navigate(location?.state? location.state : '/')
        })
        .catch()

        
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-9 bg shadow-lg p-24">
        <h2 className="font-semibold text-center mb-10 text-4xl">Login your account</h2>

        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="mt-4 text-center">
        Dont’t Have An Account ? <Link className="text-red-500" to='/register'>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
