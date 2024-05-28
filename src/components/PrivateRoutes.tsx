import {Outlet, Navigate} from "react-router-dom";

function PrivateRoutes(){

    // const user = {name: "Silvia"};
    const user = null;

    if(!user) return <Navigate to="/login" />
    
    return <Outlet />

}

export default PrivateRoutes