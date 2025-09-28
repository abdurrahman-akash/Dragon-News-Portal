import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import AuthContext from "../contexts/AuthContext";
import { useContext } from "react";

const SocialLogin = () => {
  const googleProvider = new GoogleAuthProvider();
  const { socialSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    // Handle Google sign-in logic here
    socialSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error("Error during Google sign-in:", error);
      });
  };

  const handleGithubSignIn = (e) => {
    e.preventDefault();
    // Handle Github sign-in logic here
  };
  return (
    <div className="mb-6">
      <h2 className="font-bold mb-4 text-lg sm:text-xl">Login with</h2>
        <div className="space-y-3">
            <button onClick={handleGoogleSignIn} className="btn btn-info btn-outline w-full text-xs sm:text-sm">
                <FcGoogle size={20} className="sm:w-6 sm:h-6" /> 
                <span className="hidden sm:inline">Login with Google</span>
                <span className="sm:hidden">Google</span>
            </button>
            <button onClick={handleGithubSignIn} className="btn btn-primary btn-outline w-full text-xs sm:text-sm">
                <FaGithub size={20} className="sm:w-6 sm:h-6" /> 
                <span className="hidden sm:inline">Login with Github</span>
                <span className="sm:hidden">Github</span>
            </button>
        </div>
    </div>
  )
};

export default SocialLogin;
