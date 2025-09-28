import { useState } from 'react';

const Login = () => {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError(true);
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

              {error && (
                <div className='mt-4 text-red-500'>
                  Invalid email or password
                </div>
              )}

              <button type="submit" className='btn btn-primary mt-4'>Login</button>

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
