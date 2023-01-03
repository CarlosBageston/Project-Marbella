import styled , {css} from 'styled-components';
import { Props } from '../../types/styleIsVisible';
// import {Box, Circle, DivSvg, Svg} from '../AboutUs/style';

export const Box = styled.div`
background-color: ${props => props.theme.paletteColor.pink};
height: 100%;
width: 100%;
position: relative;
`;

export const Title = styled.h1`
text-align: center;
padding-top: 8rem;
font-size: 48px;
color: #FFFF;

@media (max-width: 540px) {
    font-size: 32px;
}
`;

export const ContainerHalf = styled.div`
margin: 100px 0px 80px 200px;

@media (max-width: 540px) {
    margin: 46px 0px 60px 53px;
}
`;

export const DivSvg = styled.div`
position: absolute;
margin-left: -40px;
margin-top: -30px;
`;

export const Svg = styled.svg`
transform: rotate(37deg);
    margin-top: 45px;
    margin-left: -15px;
`;

export const Circle = styled.circle`
width: 150px;
height: 150px;
fill: none;
stroke: #38B955;
stroke-width: 10px;
transform: translate(5px,5px);
stroke-dasharray:440;
stroke-dashoffset: 440;
animation: desenhar 2s linear normal forwards;

@keyframes desenhar {
    from {
        stroke-dasharray: 440;
    } to {
        stroke-dashoffset: 100;
    }
}
`;

export const DivCompany = styled.div`
height: 100px;
`;

export const NameCompany = styled.h2`
font-size: 40px;
color: #EEDC80;
font-family: 'Roboto Serif', serif;
font-style: italic;

@media (max-width: 540px) {
    font-size: 32px;
}
`;

export const Subtitle = styled.p `
font-family: 'sacramento';
font-size: 32px;
color: #FFFF;
margin-top: 18px;

@media (max-width: 540px) {
    font-size: 28px;
}
`;

export const ContainerDown = styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 60px;

@media (max-width: 540px) {
    flex-direction: column;
    height: 100%;
    align-items: center;
    margin-bottom: 190px;
}
`;

export const DivDescrition = styled.div`
width: 800px;

@media (max-width: 540px) {
    width: 90%;
}
@media ((min-width: 541px) and (max-width: 1024px)) {
    width: 56%;
}
`;

export const TextDescrition = styled.p`
color: #FFFF;
font-size: 28px;

@media (max-width: 540px) {
    margin-bottom: 80px;
    text-align: center;
    font-size: 18px;
    margin-top: 14rem;
}
`;

export const ImageTaca = styled.img`
margin-top: -280px;
margin-left: -160px;
transform: rotate(5deg);

&:hover {
    animation: sorvete 2s linear  both;

    @keyframes sorvete {
        0% {
            transform: scale3d(1, 1, 1);
            transform: rotate(5deg)
        }
        20% {
            transform: scale3d(1, 1, 0.9) rotate3d(0, 0, 1, -5deg);
        } 
        50% {
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 5deg);
        }
        80% {
            transform: scale3d(1, 1, 0.9) rotate3d(0, 0, 1, -5deg);
        } 
        100% {
            transform: scale3d(1, 1, 1);
            transform: rotate(5deg)
        }
    }
}

@media (max-width: 540px) {
    width: 250px;
    height: 350px;
    margin-top: -24rem;
    margin-left: 0;
    animation: sorvete 2s linear  both;

    @keyframes sorvete {
        0% {
            transform: scale3d(1, 1, 1);
            transform: rotate(5deg)
        }
        20% {
            transform: scale3d(1, 1, 0.9) rotate3d(0, 0, 1, -5deg);
        } 
        50% {
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 5deg);
        }
        80% {
            transform: scale3d(1, 1, 0.9) rotate3d(0, 0, 1, -5deg);
        } 
        100% {
            transform: scale3d(1, 1, 1);
            transform: rotate(5deg)
        }
    }
}

@media ((min-width: 541px) and (max-width: 1281px)) {
    margin-top: -120px;
    margin-left: -134px;
    width: 290px;
    height: 350px;
}
`;

// Style do view Location ----------------------------------------------------------------------------------------------

export const Container = styled(Box)`
background-color: #ffc300;

&::before {
    content: '';
    background-image: url('../../../src/assets/transfer-before.png');
    display: block;
    width: 100%;
    padding-top: 5.83%;
    position: absolute;
    z-index: 1;
    background-size: cover;
    margin-top: -5%;
}
`;

export const DivTitle = styled.div`
text-align: center;
padding: 64px;
display: flex;
justify-content: center;
`;

export const DivSvgLocation = styled(DivSvg)`
margin-top: -38px;
`;
export const SvgLocation = styled(Svg)`
transform: rotate(38deg);
margin-left: -14px;
`;
export const CircleLocation = styled(Circle)<Props>`
stroke-dasharray: 460;
stroke-dashoffset: 460;
${props => props.isVisibleStyle && css `
animation: desenho 2s linear normal forwards;
`}
@keyframes desenho {
    from {
        stroke-dasharray: 440;
    } to {
        stroke-dashoffset: 100;
    }
}
`;

export const TitleLocation = styled.h2`
color: #fb374b;
font-size: 42px;
font-family: 'Roboto Serif', serif;
font-style: italic;
margin-left: 24px;

@media screen and (max-width: 580px) {
    width: 230px;
    margin-left: 4px;
    font-size: 32px;
}
`;

export const SubTitle = styled.h4`
color: #fb374b;
padding: 8px 0px 0px 32px;
font-family: 'sacramento';
font-size: 28px;
margin-left: 24px;

@media screen and (max-width: 580px) {
    width: 267px;
    padding: 8px 0px 0px 0px;
    margin-left: 8px;
    font-size: 22px;
}
`;

export const BoxInfo = styled.div`
display: flex;
height: 100%;

@media screen and (max-width: 1023px){
flex-direction: column;
align-items: center;
}
`;

export const ImageCascao = styled.img<Props>`
width: 500px;
${props => props.isVisibleStyle && css `
animation: scale  1s linear forwards;
`}
@keyframes scale {
  0% {
    opacity: 0;
    filter: blur(40px);
    margin-left: -800px;
  }
  100% {
    opacity: 1;
    filter: blur(0px);
    margin-left: 0px;
  }
}

@media screen and (max-width: 1281px) {
margin-top: 16px;
margin-left: -60px !important;
}
@media screen and (max-width: 1024px) {
width: 60%;
height: 80%;
margin-top: 4px;
margin-left: -13px !important;
}
@media screen and (max-width: 540px) {
margin-left: -3% !important;
}
`;

export const ImageMapa = styled.img<Props>`
margin-top: 140px !important;
margin-left: -127px;
transform: rotate(5deg);
${props => props.isVisibleStyle && css `
animation: Mapa 1s linear  both;
`}

@keyframes Mapa {
    0% {
        opacity: 0;
        filter: blur(40px);
        margin-top: 400px;
    } 
    100% {
        opacity: 1;
        filter: blur(0px);
        margin-top: -362px;
    }
}

@media screen and (max-width: 1281px) {
margin-top: 126px !important;
margin-left: -150px;
}

@media screen and (max-width: 1026px) {
width: 57%;
height: 80%;
margin-left: -18%;
margin-top: 12% !important;
}
`;
export const ContainerAndress = styled.div<Props>`
display: flex;
flex-direction: column;
justify-content: space-evenly;
${props => props.isVisibleStyle && css `
animation: scales  1s linear forwards;
`}
@keyframes scales {
  0% {
    opacity: 0;
    filter: blur(40px);
    margin-left: 800px;
  }
  100% {
    opacity: 1;
    filter: blur(0px);
    margin-left: 0px;
  }
}
`;
export const DivLocationDown = styled.div`
display: flex;
height: 10rem;
width: 24rem;
margin-left: 7rem !important;


@media screen and (max-width: 1281px) {
margin-left: 0 !important;
}
@media screen and (max-width: 749px) {
width: 90%;
align-items: center;
flex-direction: column;
height: 100%;
padding-bottom: 24px;
}
@media screen and ((min-width: 750px) and (max-width: 1023px)) {
margin-left: 7rem !important;
}
`;
export const DivLocation = styled.div`
display: flex;
height: 10rem;
width: 24rem;

@media screen and (max-width: 749px) {
width: 90%;
align-items: center;
flex-direction: column;
height: 100%;
padding-bottom: 24px;
}
`;

export const ImageStore = styled.img`
border-radius: 30px;
width: 300px;

@media screen and (max-width: 1281px) {
margin-top: 16px;
width: 250px;
height: 200px;
}
`;

export const TitleAndress = styled.h5`
font-family: 'Roboto Serif', serif;
font-style: italic;
padding: 24px 0px 29px 30px;    
color: white;
text-shadow: 3px 4px 4px black;

@media screen and (max-width: 1024px) {
padding: 24px 0px 8px 36px;
}
`;

export const SubTitleAndress = styled.p`
font-family: 'Roboto Serif', serif;
font-style: italic;
padding: 0px 0px 0px 12px;
font-size: 18px;
color: white;
text-shadow: 3px 3px 4px black;
`;
export const Contato = styled(SubTitleAndress)`
padding-top: 24px;

@media screen and (max-width: 1024px) {
    padding-top: 8px;
}
`;

export const DivAncora = styled.div`
padding: 12px 0px 0px 14px;
display: flex;
align-items: center;
`; 

export const Ancora = styled.a`
text-decoration: none;
margin-right: 12px;
`;


