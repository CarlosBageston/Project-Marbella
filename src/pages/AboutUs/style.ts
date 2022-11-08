import styled from 'styled-components';

export const Box = styled.div`
background-color: ${props => props.theme.paletteColor.pink};
height: 100vh;
width: 100%;
position: fixed;

@media (max-width: 1400px) {
    overflow: auto;
}
`;

export const Title = styled.h1`
text-align: center;
margin-top: 200px;
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

@media (max-width: 540px) {
    flex-direction: column;
    height: 283px;
    align-items: center;
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

export const Image = styled.img`
margin-top: -260px;
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
    margin-top: -22rem;
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

@media ((min-width: 541px) and (max-width: 1024px)) {
    margin-top: -60px;
    margin-left: -134px;
    width: 290px;
    height: 350px;
}
`;