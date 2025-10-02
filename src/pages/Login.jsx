import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const authContext = useContext(AuthContext);
  const { loginUser, loading, setLoading } = authContext;
  const location = useLocation();
  const navigate = useNavigate(location);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password)
        .then(() => {
          navigate(`${location.state ? location.state : '/'}`);
          toast.success('Login successful!');
        });
    } catch (error) {
      toast.error('Invalid email or password');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='flex items-center justify-center min-h-[80vh] px-4'>
      <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-6 sm:p-8'>
        <h2 className='font-semibold text-2xl text-center'>Login Your Account</h2>
        <form onSubmit={handleSubmit} className='card-body p-0 mt-4'>
          <fieldset className='fieldset flex flex-col gap-4'>
            {/* email */}
            <label className='block text-sm font-medium'>Email</label>
            <input 
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="input input-bordered w-full bg-gray-100"
              required />

            {/* password */}
            <label className='block text-sm font-medium'>Password</label>
            <input 
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="input input-bordered w-full bg-gray-100"
              required />

              <div>
                <a href="#" className='link link-hover'>Forgot Password?</a>
              </div>

              <button type="submit" className='btn btn-primary mt-4' disabled={loading}>
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Logging in...
                  </>
                ) : (
                  'Login'
                )}
              </button>

              <div className='mt-4 text-center'>
                <span>Don't have an account? </span>
                <a href="/auth/register" className='text-secondary'>Register</a>
              </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Login;
