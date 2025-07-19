import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ProfileComp } from "../profile/profileComp";
import { useSelector, useDispatch } from "react-redux";



export function PrivateRoute () {
    const profile = useSelector((state) => state.profile)
    const location = useLocation();
    
    return (
        profile.isAuth === true ?
        <Outlet />
        :
        <Navigate to="/login" state={{ from: location }} replace />
    )
}