import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading) {
        return <Loading />
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate to="/auth/login" state={location.pathname} />;
};

export default PrivateRoute;
