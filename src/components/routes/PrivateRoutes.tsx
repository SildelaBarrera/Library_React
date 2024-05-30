import {Outlet, Navigate} from "react-router-dom";

function PrivateRoutes(){

    // const user = {name: "Silvia"};
    const user = null;

    if(user) return <Outlet />
    
    return <Navigate to="/login" /> 

}

export default PrivateRoutes