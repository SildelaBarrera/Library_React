import {Outlet, Navigate} from "react-router-dom";

function PublicRoutes(){

    // const user = {name: "Silvia"};
    const user = null;

    if(user) return <Navigate to="/books" />
    
    return <Outlet />

}

export default PublicRoutes