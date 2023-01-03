import location from '../../assets/location.png';
import cascao from '../../assets/sorvete-cascao.png';
import PerfilStoreCenter from '../../assets/PerfilStoreCenter.jpg';
import PerfilStoreBairro from '../../assets/PerfilStoreBairro.jpg';
import useObserver from '../../hooks/useObserver';
import Facebook from '../../assets/facebook-color.png';
import Instagram from '../../assets/instagram-color.png';
import whatsapp from '../../assets/whatsapp-color.png';
import Sorvete from '../../assets/taca.png';
import {
    Box,
    Title,
    ContainerHalf,
    ContainerDown,
    DivDescrition,
    ImageTaca,
    TextDescrition,
    Circle,
    NameCompany,
    Subtitle,
    DivCompany,
    DivSvg,
    Svg,
    //Style do view Location
    Container,
    ImageCascao,
    ImageMapa,
    DivTitle,
    TitleLocation,
    SubTitle,
    BoxInfo,
    ContainerAndress,
    DivLocation,
    DivLocationDown,
    ImageStore,
    DivSvgLocation,
    SvgLocation,
    CircleLocation,
    TitleAndress,
    SubTitleAndress,
    Contato,
    DivAncora,
    Ancora,
} from './style';


export default function AboutUs() {
    const { isVisible, myRef } = useObserver();
    return (
        <Box>
            {/*Parte 1 Sobre a empresa */}
            <div>
                <Title>Tradição e qualidade a mais de 40 anos </Title>
            </div>
            <ContainerHalf>
                <DivSvg>
                    <Svg>
                        <Circle cx={70} cy={70} r={70}></Circle>
                    </Svg>
                </DivSvg>
                <DivCompany>
                    <NameCompany>Marbella Sorvetes</NameCompany>
                    <Subtitle>Uma historia deliciosa</Subtitle>

                </DivCompany>
            </ContainerHalf>
            <ContainerDown>
                <DivDescrition>
                    <TextDescrition>
                        A Marbella sorvete tem na essência de seus produtos a fabricação
                        de forma semi-artesanal produzidas por uma Chef Profissional,
                        acolhendo seus clientes em um ambiente de sorveteria tradicional
                        com espaço criança para a tranquilidade e casualidade.
                    </TextDescrition>
                </DivDescrition>
                <ImageTaca src={Sorvete} alt="taça de sorvete" />

            </ContainerDown>

            {/*Parte 2 Location */}
            <Container>
                <DivTitle>
                    <DivSvgLocation >
                        <SvgLocation>
                            <CircleLocation isVisibleStyle={isVisible} cx={70} cy={70} r={70}></CircleLocation>
                        </SvgLocation>
                    </DivSvgLocation>
                    <div>
                        <TitleLocation>Nossas Lojas</TitleLocation>
                        <SubTitle>Estão localizadas em dois endereços</SubTitle>
                    </div>
                </DivTitle>
                <BoxInfo ref={myRef}>
                    <div style={{ display: 'flex' }}>
                        <ImageCascao isVisibleStyle={isVisible} src={cascao} alt="mapa" />
                        <ImageMapa isVisibleStyle={isVisible} src={location} alt="mapa" width={400} />
                    </div>
                    <ContainerAndress isVisibleStyle={isVisible}>
                        <DivLocation>
                            <ImageStore src={PerfilStoreCenter} alt="loja center" />
                            <div>
                                <TitleAndress>Marbella Center</TitleAndress>
                                <SubTitleAndress>Rua José de Alençar, 79 - Centro Sul,<br /> Dois Vizinhos - PR, 85660-000</SubTitleAndress>
                                <Contato>Contato:</Contato>
                                <DivAncora>
                                    <Ancora href="https://www.facebook.com/marbella.sorvetes"> <img src={Facebook} alt="icone Facebook" width={30} /></Ancora>
                                    <Ancora href="https://www.instagram.com/marbellasorvetes/"> <img src={Instagram} alt="icone Instagram" width={34} /></Ancora>
                                    <Ancora href="https://api.whatsapp.com/send?phone=5546999334241&text=Ol%C3%A1%20!%20%F0%9F%98%84"> <img src={whatsapp} alt="icone Whatsapp" width={34} /></Ancora>
                                </DivAncora>
                            </div>
                        </DivLocation>
                        <DivLocationDown>
                            <ImageStore src={PerfilStoreBairro} alt="loja Bairro" width={200} />
                            <div>
                                <TitleAndress>Marbella Bairro</TitleAndress>
                                <SubTitleAndress>Rua Uruguai, 115 - Bairro Santa Luzia,<br /> Dois Vizinhos - PR, 85660-000</SubTitleAndress>
                                <Contato >Contato:</Contato>
                                <DivAncora>
                                    <Ancora href="https://www.facebook.com/marbella.sorvetes"> <img src={Facebook} alt="icone Facebook" width={30} /></Ancora>
                                    <Ancora href="https://www.instagram.com/marbellasorvetes/"> <img src={Instagram} alt="icone Instagram" width={34} /></Ancora>
                                    <Ancora href="https://wa.me/5546999189297?text=Ol%C3%A1!%20:D"> <img src={whatsapp} alt="icone Whatsapp" width={34} /></Ancora>
                                </DivAncora>
                            </div>
                        </DivLocationDown>
                    </ContainerAndress>

                </BoxInfo>
            </Container>
        </Box>

    );
}