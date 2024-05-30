import {Outlet, Navigate} from "react-router-dom";

function PublicRoutes(){

    // const user = {name: "Silvia"};
    const user = null;

    if(!user) return <Outlet />
    
    return <Navigate to="/books" />

}

export default PublicRoutes