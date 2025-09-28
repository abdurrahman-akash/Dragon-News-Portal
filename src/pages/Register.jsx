import { useState } from 'react';

const Register = () => {
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

            {error && (
              <div className='text-red-500 text-sm'>
                Invalid email or password
              </div>
            )}

            <button type="submit" className='btn btn-primary w-full'>Register</button>

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
