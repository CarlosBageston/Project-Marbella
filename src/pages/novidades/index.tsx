import {
    Box,
    ContainerTitle,
    Title, Subtitle,
    Containeritems,
    BoxItems,
    Content,
    Image,
    ParagraphUp,
    ParagraphDown,
    ContentEdit,
    ContentEditLeft
} from './style';
import Pote from '../../assets/poteacai.png';
import AcaiCrocante from '../../assets/acaiCrocante.png';
import Paleta from '../../assets/paletaninho.jpg';
import PaletaMorango from '../../assets/paleta.png';
import useObserver from '../../hooks/useObserver';


export default function Novidades() {
    const { myRef, isVisible } = useObserver();

    return (
        <Box>
            <ContainerTitle >
                <Title>Novidades</Title>
                <Subtitle>irresistíveis...</Subtitle>
            </ContainerTitle>
            <Containeritems ref={myRef}>
                <BoxItems>
                    <Content isVisibleStyle={isVisible}>
                        <Image src={Pote} alt="Picole Paçoca" />
                        <ParagraphUp>Pote de açaí com leite condensado</ParagraphUp>
                    </Content>
                    <ContentEditLeft isVisibleStyle={isVisible}>
                        <Image src={Paleta} alt="Paleta de nutella" />
                        <ParagraphUp>Paleta leite ninho com recheio de nutella</ParagraphUp>
                    </ContentEditLeft>
                </BoxItems>
                <BoxItems>
                    <Content style={{ marginLeft: '0.5rem' }} isVisibleStyle={isVisible}>
                        <ParagraphDown>Picolé de açaí com cobertura crocante de cookies</ParagraphDown>
                        <Image src={AcaiCrocante} alt="Picole Skimo" />
                    </Content>
                    <ContentEdit isVisibleStyle={isVisible}>
                        <ParagraphDown>paleta de leite ninho <br /> com recheio de morango</ParagraphDown>
                        <Image src={PaletaMorango} alt="Paleta morango" />
                    </ContentEdit>
                </BoxItems>
            </Containeritems>
        </Box>
    );
}