import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  useEffect(() => {
    document.title = "Register | CareHive";
}, []);

  const{createNewUser,setUser}=useContext(AuthContext);


  const handleSubmit = (e)=>{
    e.preventDefault();
    const form =new FormData (e.target);
    const name = form.get('name');
    const photoUrl = form.get('photo');
    const password = form.get('password');
    const email = form.get('email');
createNewUser(email,password)
.then(result =>{
  const user = result.user;
  setUser(user);
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(`Error:${errorMessage}`)
  // ..
});



  }
    return (
        <div>
            <div>
                <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name="name" type="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input name="photo" type="photo" placeholder="photo url" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <div className="flex gap-10 mt-2">
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Already have an account?</a>
                </label>
                <label className="label">
                  <Link to='/auth/login' className="label-text-alt link link-hover">Login Here</Link>
                </label>
                </div>
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
            </div>
            <Footer></Footer>
        </div>
       
    );
};

export default Register;