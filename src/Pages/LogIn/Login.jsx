import { Link, useNavigate } from 'react-router-dom';
//import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProviders';
import Swal from 'sweetalert2';
//import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {

  const navigate = useNavigate();

  const {logIn,googleLogIn,GithubLogIn} = useContext(AuthContext);

    const handleLogin = event =>{
      event.preventDefault();
        const from = event.target;
        
        const email = from.email.value;
        const password = from.password.value;
    
        //console.log(email,password);

        logIn(email,password)
        .then(result =>{
          console.log(result.user);
          Swal.fire({
            title: 'Successful',
            text: 'LogIn Successful',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          navigate('/')
        })
        .catch(error =>{
          console.log(error);
        })
}

const handleGoogle = () =>{
  googleLogIn()
  .then(result=>{
    console.log(result.user);
    Swal.fire({
        title: 'Successful',
        text: 'LogIn Successful',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      navigate('/')
  })
  .catch(error =>{
    console.log(error)
  })
}


const handleGithub = () =>{
  GithubLogIn()
  .then(result=>{
    console.log(result.user);
    Swal.fire({
        title: 'Successful',
        text: 'LogIn Successful',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      navigate('/')
  })
  .catch(error =>{
    console.log(error)
  })
}

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    {/* <div className="mr-20 w-1/2">
      <img src={img} alt="" />
    </div> */}
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-3xl text-center font-bold mt-4">Login</h1>
      
      <form className="card-body" onSubmit={handleLogin}>
      {/* --------------Email---------------- */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        
        {/* ------------Password------------- */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

      {/* ------------submit button------------------ */}
        <div className="form-control mt-6">
          
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p className='my-4 text-center'>New to Car Doctors <Link className='text-orange-600 font-bold' to="/signUp">Sign Up</Link></p>

    <div className="flex justify-around">
      <p>
      <button onClick={handleGoogle}  className="mx-6 mb-4 btn btn-ghost">Google</button>
      </p>
      <p>
      <button  onClick={handleGithub} className="mx-6 mb-4 btn btn-ghost">GitHub</button>
      </p>
    </div>

    </div>
  </div>
</div>
    );
};

export default Login;