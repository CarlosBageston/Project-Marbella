import styled, { css } from 'styled-components';
import { Props } from '../../types/styleIsVisible';

export const Box = styled.div`
background-color: #fdf5fa;
height: 100vh;
width: 100%;

@media (max-width: 1400px) {
      height: 100%
}
`;

export const Container = styled.div`
display: flex;
justify-content: space-around;

@media (max-width: 1400px) {
flex-direction: column;
align-items: center;
}
`;

export const Title = styled.h1`
color: ${props => props.theme.paletteColor.yellow};
font-size: 62px;
text-align: center;
padding: 48px 0px;
font-family: 'Rochester';

@media(max-width: 1400px) {
      font-size: 36px;
}
`;

export const BoxLeft = styled.div<Props>`
width: 640px;
height: 600px;
background-color: #F2F2F2;
display: flex;
align-items: center;
padding: 12px;
border-radius: 40px;
box-shadow: 3px 3px 10px 4px rgb(0 0 0 / 11%);
border: 1px solid #0c0c0c21;

${props => props.isVisibleStyle && css `
animation: slide-in-blurred-tr 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.5s both;
`}

@keyframes slide-in-blurred-tr {
  0% {
        transform: translate(1000px, -1000px) skew(-80deg, -10deg);
        transform-origin: 0% 0%;
        filter: blur(40px);
        opacity: 0;
  }
  100% {
        transform: translate(0, 0) skew(0deg, 0deg);
        transform-origin: 50% 50%;
        filter: blur(0);
        opacity: 1;
  }
}

@media (max-width: 1400px) {
      margin-bottom: 2rem;
      width: 90%;
      height: 260px;
      display: flex;
      justify-content: space-between;
}
`;
export const BoxRigth = styled(BoxLeft)<Props>`

${props => props.isVisibleStyle && css `
animation: slide-in-blurred-tl 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.5s both;
`}

@keyframes slide-in-blurred-tl {
  0% {
        transform: translate(-1000px, -1000px) skew(80deg, 10deg);
        transform-origin: 100% 0%;
        filter: blur(40px);
        opacity: 0;
  }
  100% {
        transform: translate(0, 0) skew(0deg, 0deg);
        transform-origin: 50% 50%;
        filter: blur(0);
        opacity: 1;
  }
}
`;

export const TitleItem = styled.h2`
margin-bottom: 60px;
font-family: 'Roboto Serif', serif;
font-style: italic;
font-size: 28px;

@media (max-width: 1400px) {
      font-size: 20px;
      margin-bottom: 40px
}
`;

export const Descrition = styled.h2`
font-family: 'sacramento';
font-size: 40px;

@media (max-width: 1400px) {
      font-size: 28px;
}
`;

export const ImageDestaque = styled.img`
width: 335px;
height: 360px;
border-radius: 130px;

@media (max-width: 1400px) {
      width: 150px;
      height: 160px;
}
`;