import { useState } from 'react';
import Logo from '../../assets/Logo.png';
import Admin from '../../assets/iconAdmin.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import AdminPink from '../../assets/iconAdminPink.png';
import { Outlet, useNavigate } from 'react-router-dom';
import FacebookPink from '../../assets/facebookpink.png';
import InstagramPink from '../../assets/instagrampink.png';
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

    const [changeImgInsta, setChangeImgInsta] = useState(false);
    const [changeImgFace, setChangeImgFace] = useState(false);
    const [changeImgAdmin, setChangeImgAdmin] = useState(false);
    const [checkBox, setCheckBox] = useState(false);

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

        navigate('Admin');
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
                    {
                        changeImgInsta === false ?
                            <>
                                <ImageIcone href="https://www.instagram.com/marbellasorvetes/"
                                    onMouseMove={() => setChangeImgInsta(true)}
                                >
                                    < img src={Instagram} alt="instagram" width={45} />
                                </ImageIcone>
                            </>
                            :
                            <>
                                <ImageIcone href="https://www.instagram.com/marbellasorvetes/"
                                    onMouseOut={() => setChangeImgInsta(false)}
                                >
                                    < img src={InstagramPink} alt="instagram" width={45} />
                                </ImageIcone>
                            </>
                    }
                    {
                        changeImgFace === false ?
                            <>
                                <ImageIcone
                                    href="https://www.facebook.com/marbella.sorvetes"
                                    onMouseMove={() => setChangeImgFace(true)}
                                >
                                    <img src={Facebook} alt="facebook" width={45} />
                                </ImageIcone>
                            </>
                            :
                            <>
                                <ImageIcone
                                    href="https://www.facebook.com/marbella.sorvetes"
                                    onMouseOut={() => setChangeImgFace(false)}
                                >
                                    <img src={FacebookPink} alt="facebook" width={45} />
                                </ImageIcone>
                            </>
                    }
                    {
                        changeImgAdmin === false ?
                            <>
                                <ImageIcone>
                                    <IconAdmin src={Admin} alt="admin" onMouseMove={() => setChangeImgAdmin(true)} />
                                </ImageIcone>
                            </>
                            :
                            <>
                                <ImageIcone>
                                    <IconAdmin src={AdminPink} alt="admin"
                                        onMouseOut={() => setChangeImgAdmin(false)} onClick={() => navigate('Admin')}
                                    />
                                </ImageIcone>
                            </>
                    }
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
                                <ImageIcone
                                    href="https://www.facebook.com/marbella.sorvetes"
                                    onMouseMove={() => setChangeImgFace(true)}
                                >
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