import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import AuthContext from "../../contexts/AuthContext";
import { useContext } from "react";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { user, socialSignIn, loading } = useContext(AuthContext);
  
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    const googleProvider = new GoogleAuthProvider();
    try {
      await socialSignIn(googleProvider);
      toast.success(`Welcome back, ${user.displayName || 'User'}!`);
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  const handleGithubSignIn = async (e) => {
    e.preventDefault();
    const githubProvider = new GithubAuthProvider();
    try {
      await socialSignIn(githubProvider);
      // Toast notification handled in AuthProvider
    } catch (error) {
      console.error("Error during GitHub sign-in:", error);
    }
  };
  return (
    <div className="mb-6">
      <h2 className="font-bold mb-4 text-lg sm:text-xl">Login with</h2>
        <div className="space-y-3">
            <button 
              onClick={handleGoogleSignIn} 
              className="btn btn-info btn-outline w-full text-xs sm:text-sm"
              disabled={loading}
            >
                {loading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  <FcGoogle size={20} className="sm:w-6 sm:h-6" />
                )}
                <span className="hidden sm:inline">
                  {loading ? "Signing in..." : "Login with Google"}
                </span>
                <span className="sm:hidden">
                  {loading ? "..." : "Google"}
                </span>
            </button>
            <button 
              onClick={handleGithubSignIn} 
              className="btn btn-primary btn-outline w-full text-xs sm:text-sm"
              disabled={loading}
            >
                {loading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  <FaGithub size={20} className="sm:w-6 sm:h-6" />
                )}
                <span className="hidden sm:inline">
                  {loading ? "Signing in..." : "Login with Github"}
                </span>
                <span className="sm:hidden">
                  {loading ? "..." : "Github"}
                </span>
            </button>
        </div>
    </div>
  )
};

export default SocialLogin;
