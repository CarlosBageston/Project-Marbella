import { useState } from 'react';
import Logo from '../../assets/Logo.png';
import Admin from '../../assets/admin.png';
import Facebook from '../../assets/facebook-color.png';
import Instagram from '../../assets/instagram-color.png';
import Whatsapp from '../../assets/whatsapp-color.png';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth/index';
import {
    Container,
    BoxRight,
    BoxUl,
    NavLi,
    ImageLogo,
    ImageIcone,
    IconAdmin,
    ContainerDown,
    Label,
    ImageLogoDown,
    BoxRouters,
    DivImage,
} from './styles';


export default function Header() {

    const [checkBox, setCheckBox] = useState(false);
    const { logado } = useAuth();

    const navigate = useNavigate();

    const routes = [{
        label: 'Home',
        to: '/'
    }, {
        label: 'Sobre nós',
        to: '/sobrenos'
    }, {
        label: 'Fale Conosco',
        to: '/pedidos'
    }];

    const showRoutes = () => setCheckBox(!checkBox);

    const showRoutesNavigate = () => {
        setCheckBox(!checkBox);

        if (logado !== null) {
            navigate('/admin/report');
        } else navigate('/admin');

    };

    return (
        <>
            <Container >
                <ImageLogo src={Logo} alt="logo" />
                <BoxRight>
                    <BoxUl>
                        {routes.map((rota, index) => (
                            <li key={index}>
                                <NavLi to={rota.to}>
                                    {rota.label}
                                </NavLi>
                            </li>
                        ))}
                    </BoxUl>
                    <ImageIcone href="https://www.facebook.com/marbella.sorvetes">
                        <img src={Facebook} alt="facebook" width={32} />
                    </ImageIcone>
                    <ImageIcone href="https://www.instagram.com/marbellasorvetes/">
                        < img src={Instagram} alt="instagram" width={36} />
                    </ImageIcone>
                    <ImageIcone href="https://api.whatsapp.com/send?phone=5546999334241&text=Ol%C3%A1%20!%20%F0%9F%98%84">
                        <img src={Whatsapp} alt="whatsapp" width={39} />
                    </ImageIcone>
                    <ImageIcone>
                        <IconAdmin src={Admin} alt="admin" onClick={showRoutesNavigate} />
                    </ImageIcone>
                </BoxRight>
            </Container>
            <ContainerDown>
                <ImageLogoDown src={Logo} alt="logo" />
                <Label onClick={showRoutes} checkBox={checkBox}></Label>
                {
                    checkBox ?
                        <BoxRouters checkBox={checkBox}>
                            <ul style={{ marginTop: '4rem' }}>
                                {routes.map((rota, index) => (
                                    <li key={index}>
                                        <NavLi
                                            to={rota.to}
                                            onClick={showRoutes}
                                            style={{ WebkitTextStroke: 2, WebkitTextStrokeColor: '#363333' }}
                                        >
                                            {rota.label}
                                        </NavLi>
                                    </li>
                                ))}
                            </ul>
                            <DivImage>
                                <ImageIcone href="https://www.instagram.com/marbellasorvetes/">
                                    < img src={Instagram} alt="instagram" width={45} />
                                    Instagram
                                </ImageIcone>
                                <ImageIcone href="https://www.facebook.com/marbella.sorvetes">
                                    <img src={Facebook} alt="facebook" width={45} />
                                    Facebook
                                </ImageIcone>
                                <ImageIcone onClick={showRoutesNavigate}>
                                    <IconAdmin src={Admin} alt="admin" />
                                    Adm
                                </ImageIcone>
                            </DivImage>
                        </BoxRouters>
                        :
                        ''
                }

            </ContainerDown>
            <div>
                <Outlet />
            </div>
        </>
    );
}