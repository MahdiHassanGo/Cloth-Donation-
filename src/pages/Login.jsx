import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaGoogle } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  useEffect(() => {
    document.title = "Login | CareHive";
}, []);

const { userLogin, setUser, googleSignIn } = useContext(AuthContext);
const [error, setError] = useState({});
const location = useLocation();
const navigate = useNavigate();
console.log(location);


const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    userLogin(email, password)
        .then((result) => {
            const user = result.user;
            setUser(user);
            toast.success("Login successful!");
            setTimeout(() => {
                navigate(location?.state ? location.state : "/");
            }, 2000);
        })
        .catch((err) => {
            setError({ ...error, login: err.code });
            toast.error("Login failed: " + err.message);
        })
};

const handleGoogleSignIn = () => {
    googleSignIn()
        .then((result) => {
            const user = result.user;
            setUser(user);
            toast.success("Google Sign-In successful!");
            setTimeout(() => {
                navigate(location?.state || "/");
            }, 2000);
        })
        .catch((err) => {
            toast.error("Google Sign-In failed: " + err.message);
        });
};


  return (
    <div>
      <Navbar />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <div className="flex gap-10 mt-2">
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <label className="label">
                    <Link to="/auth/register" className="label-text-alt link link-hover">
                      Register Here
                    </Link>
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <button onClick={handleGoogleSignIn} className="btn mt-5">
                  <FaGoogle /> Login with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;