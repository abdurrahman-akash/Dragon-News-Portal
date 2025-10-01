import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if(!user){
        toast.error("You need to be logged in to access this page.");
        return <Navigate to="/auth/login" />;
    } else {
        // Render the protected component
        return children;
    }

};

export default PrivateRoute;
