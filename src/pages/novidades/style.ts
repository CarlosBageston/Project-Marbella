import styled, { css } from 'styled-components';
import { Props } from '../../types/styleIsVisible';

export const Box = styled.div`
background-color: ${props => props.theme.paletteColor.background};
height: 100vh;
width: 100%;

@media (max-width: 1400px) {
      height: 100%
}
`;


export const ContainerTitle = styled.div`
    text-align: center;
    padding: 20px;
    
`;

export const Title = styled.h1`
font-size: 128px;
font-family: Rochester;
font-weight: 400;
color: ${props => props.theme.paletteColor.yellow};

@media (max-width: 1400px) {
      font-size: 80px;
}
`;
export const Subtitle = styled.h2`
font-size: 40px;
margin-right: 13rem;
margin-top: -10px;
font-family: Rochester;

@media (max-width: 1400px) {
      margin-right: 7rem;
      font-size: 30px;
}
`;

export const Containeritems = styled.div`
display: flex;
justify-content: space-around;
position: relative;
flex-direction: row;

@media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
}
`;

export const BoxItems = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 50vh;
`;


export const Content = styled.div<Props>`
display: flex;
margin-top: -13rem;

${props => props.isVisibleStyle && css`
      animation: slide-in-blurred-left 0.8s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.5s both;
`}; 

@keyframes slide-in-blurred-left {
  0% {
        transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
        transform-origin: 100% 50%;
        filter: blur(40px);
        opacity: 0;
  }
  100% {
        transform: translateX(0) scaleY(1) scaleX(1);
        transform-origin: 50% 50%;
        filter: blur(0);
        opacity: 1;
  }
}

@media (max-width: 1400px) {
      margin-top: -8rem;
      margin-left: 2rem;
}
`;

export const ContentEdit = styled.div<Props>`
display: flex;
position: absolute;
margin-top: 10rem;
margin-left: 4rem;

${props => props.isVisibleStyle && css `
      animation: slide-in-blurred-right 0.8s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.5s both;
`}
@keyframes slide-in-blurred-right {
  0% {
        transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
        transform-origin: 0% 50%;
        filter: blur(40px);
        opacity: 0;
  }
  100% {
        transform: translateX(0) scaleY(1) scaleX(1);
        transform-origin: 50% 50%;
        filter: blur(0);
        opacity: 1;
  }
}

@media (max-width: 1400px) {
      margin-left: 0.5rem;
      margin-top: 6rem;
}
`;

export const ContentEditLeft = styled(ContentEdit)`
@media (max-width: 1400px) {
      margin-left: 2rem;
      margin-top: 6rem;
}
`;

export const Image = styled.img`
width: 255px;
border-radius: 50%;
height: 200px;
margin-left: -2rem;

@media (max-width: 1400px) {
      width: 125px;
      height: 125px;
      margin-left: -1.5rem;
}
`;

export const ParagraphUp = styled.p`
font-family: 'Rochester';
font-size: 40px;
width: 13rem;
padding-left: 8px;
margin-top: -10px;

@media (max-width: 1400px) {
      font-size: 30px;
      margin-top: 5px;
      width: 10.5rem;;
}
`;
export const ParagraphDown = styled.p`
font-family: 'Rochester';
font-size: 40px;
width: 14rem;
margin-top: 4rem;

@media (max-width: 1400px) {
      font-size: 30px;
      margin-top: 3rem;
      width: 11rem;
}
`;