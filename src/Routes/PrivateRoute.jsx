import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {userInfo, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        <div className="flex justify-center items-center my-20">
            <span className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-sky-400 flex justify-center my-20"></span>
        </div>
    }
    if(userInfo){
        return children;
    }
    return <Navigate to='/sign-in' state={location.pathname} replace></Navigate>
};

export default PrivateRoute;