import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import { Navigate } from "react-router-dom";
import Loader from "../Pages/Loader/Loader";


const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
          return <Loader></Loader>;
    }

     if(user?.email){
        return children;
     }

    return <Navigate to="/login" replace></Navigate> ;
};

export default PrivateRouter;