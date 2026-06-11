import { useSelector } from "react-redux"
import { selectIsAuthenticated } from "../features/auth/authSelectors"
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute=()=>{

    const isAuthenticated=useSelector(selectIsAuthenticated)
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />

}

export default ProtectedRoute