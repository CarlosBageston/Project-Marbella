
import Admin from '../../pages/admin/Login';
import { Outlet } from 'react-router-dom';
import { useAuth } from '.';


export default function PrivateRoute() {
    const { logado } = useAuth();
    if (logado === null) {
        return <Admin />;
    } else return <Outlet />;


}