import {
    Box,
    Title,
    ContainerHalf,
    ContainerDown,
    DivDescrition,
    Image,
    TextDescrition,
    Circle,
    NameCompany,
    Subtitle,
    DivCompany,
    DivSvg,
    Svg
} from './style';
import Sorvete from '../../assets/taca.png';
import React from 'react';

export default function AboutUs() {
    return (
        <Box>
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
                        com espaço criança e café para a tranquilidade e casualidade.
                    </TextDescrition>
                </DivDescrition>
                <Image src={Sorvete} alt="taça de sorvete" />

            </ContainerDown>
        </Box>

    );
}