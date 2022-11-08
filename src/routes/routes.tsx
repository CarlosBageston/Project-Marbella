import Header from '../components/header';
import MainPage from '../pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pedidos from '../pages/Pedidos';
import AboutUs from '../pages/AboutUs';
import Admin from '../pages/admin/Login';
import Report from '../pages/admin/Report';
import DetailReport from '../pages/admin/DetailReport';
import { AuthProvider } from '../hooks/auth';
import PrivateRoute from '../hooks/auth/private';
import EditPage from '../pages/admin/editPage';
import ItensVendidos from '../pages/ItensVendidos';
import Novidades from '../pages/novidades';
import Footer from '../pages/footer';

export default function Router() {


    return (
        <BrowserRouter>
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path='/' element={
                        <>
                            <MainPage />
                            <ItensVendidos />
                            <Novidades />
                            <Pedidos />
                        </>
                    } />
                    <Route path='/pedidos' element={<Pedidos />} />
                    <Route path='/sobrenos' element={<AboutUs />} />
                    <Route element={<PrivateRoute />}>
                        <Route path='admin' element={<Admin />} />
                        <Route path='admin/report' element={<Report />} />
                        <Route path='admin/report/detailreport/:id' element={<DetailReport />} />
                        <Route path='admin/editpage' element={<EditPage />} />
                    </Route>
                </Routes>
                <Footer />
            </AuthProvider>
        </BrowserRouter>
    );
}