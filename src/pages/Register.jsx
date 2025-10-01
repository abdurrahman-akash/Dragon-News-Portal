import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
  const authContext = useContext(AuthContext);
  const { registerUser, loading, setLoading } = authContext;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await registerUser(email, password);
      toast.success('Account created successfully!');
      // You can add profile update logic here if needed
    } catch (error) {
      toast.error(error.message || 'Registration failed');
      console.error('Registration error:', error);
    }
    finally{
      setLoading(false);
    }
  }

  if(authContext.user){
    return <Navigate to="/" />
  }

  return (
    <div className='flex items-center justify-center min-h-[80vh] px-4'>
      <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-8'>
        <h2 className='font-semibold text-2xl text-center mb-6'>Register your account</h2>
        <form onSubmit={handleSubmit} className='card-body p-0'>
          <div className='flex flex-col gap-6'>
            {/* name */}
            <div>
              <label className='block text-sm font-medium'>Your Name</label>
              <input 
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full bg-gray-100"
                required />
            </div>

            {/* Photo URL */}
            <div>
              <label className='block text-sm font-medium mb-2'>Photo URL</label>
              <input 
                type="text"
                name="photo"
                placeholder="Enter your password"
                className="input input-bordered w-full bg-gray-100"
                required />
            </div>

            {/* email */}
            <div>
              <label className='block text-sm font-medium mb-2'>Email</label>
              <input 
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full bg-gray-100"
                required />
            </div>

            {/* password */}
            <div>
              <label className='block text-sm font-medium mb-2'>Password</label>
              <input 
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full bg-gray-100"
                required />
            </div>

            {/* Terms checkbox */}
            <div className='flex items-center gap-2'>
              <input type="checkbox" className="checkbox checkbox-sm" required />
              <span className='text-sm'>Accept Term & Conditions</span>
            </div>

            <button type="submit" className='btn btn-primary w-full' disabled={loading}>
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Creating Account...
                </>
              ) : (
                'Register'
              )}
            </button>

            <div className='text-center'>
              <span className='text-sm'>Already have an account? </span>
              <a href="/auth/login" className='text-secondary'>Login</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register;
