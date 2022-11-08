
import Admin from '../../pages/admin/Login';
import { Outlet } from 'react-router-dom';
import { useAuth } from '.';


export default function PrivateRoute() {
    const { logado } = useAuth();
    if (!logado) {
        return <Admin />;
    }

    return <Outlet />;
}