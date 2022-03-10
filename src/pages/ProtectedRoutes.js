import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    const user = useSelector(state => state.user.user);
    const loggedIn = user ? true : false;
    return loggedIn;
}

const ProctectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate replace to="/" />
};

export default ProctectedRoutes;