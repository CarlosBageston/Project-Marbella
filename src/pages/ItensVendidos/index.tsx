import Paleta from '../../assets/paletaninho.jpg';
import Acai from '../../assets/acaiPacoca.png';
import { Container, ImageDestaque, BoxLeft, Title, TitleItem, Descrition, Box, BoxRigth } from './style';
import useObserver from '../../hooks/useObserver';
import React from 'react';

export default function ItensVendidos() {

    const { isVisible, myRef } = useObserver();

    return (
        <Box>
            <div>
                <Title>Itens mais vendidos</Title>
            </div>
            <Container ref={myRef}>
                <BoxLeft isVisibleStyle={isVisible}>
                    <div>
                        <TitleItem>Paleta de leite ninho</TitleItem>
                        <Descrition>Para os amantes de nutella, paleta de leite ninho com recheio de nutella</Descrition>
                    </div>
                    <ImageDestaque src={Paleta} alt="paleta" />
                </BoxLeft>
                <BoxRigth isVisibleStyle={isVisible}>
                    <div>
                        <TitleItem>Açai de paçoca</TitleItem>
                        <Descrition>
                            Picolé de açaí com uma cobertura deliciosa de creme de paçoca
                        </Descrition>
                    </div>
                    <ImageDestaque src={Acai} alt="açai" />
                </BoxRigth>
            </Container>
        </Box>

    );
}