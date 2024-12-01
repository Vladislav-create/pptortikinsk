import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ProfileComp } from "../profile/profileComp";


export function PrivateRoute ({user, children}) {
    if(!user) {
        return <Navigate to="/login" replace/>
    }
    
    return <ProfileComp/>
}