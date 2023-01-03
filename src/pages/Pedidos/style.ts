import styled, { css } from 'styled-components';
import { Props } from '../../types/styleIsVisible';

export const Box = styled.div`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
position: relative;

@media (max-width: 1024px) {
  flex-direction: column;
  height: 100%;
}
`;

export const ImageBackground = styled.img`
position: absolute;
width: 100%;
height: 100%;
`;

export const ContainerLeft = styled.div<Props>`
width: 685px;
height: 558px;
background-color: ${props => props.theme.paletteColor.background};
border-radius: 60px;
box-shadow: 4px 4px 24px 2px rgb(0 0 0 / 30%);

${props => props.isVisibleStyle && css `
animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.5s both;
`}

@keyframes slide-in-blurred-bottom {
  0% {
        margin-top:1000px;
        filter: blur(40px);
        opacity: 0;
  }
  100% {
        margin-top:0px;
        filter: blur(0px);
        opacity: 1;
  }
}
@media (max-width: 1024px) {
  height: 415px;
  width: 95%;
  margin-top: 7rem !important;
}
`;

export const TitleLeft = styled.h1`
color: ${props => props.theme.paletteColor.pink};
font-size: 64px;
padding: 32px 42px 12px 42px;

@media (max-width: 1024px) {
  font-size: 32px;
}
`;

export const TitleDown = styled.h1`
color: #959090;
font-size: 36px;
font-family: 'Roboto Serif', serif;
padding-left: 42px;
font-style: italic;

@media (max-width: 1024px) {
  font-size: 24px;
}
`;


export const BoxImage =styled.div`
display: flex;
flex-direction: column;
padding: 0px 42px;
height: 350px;
justify-content: space-evenly;
`;

export const DivRedes = styled.div`
display: flex;
align-items: center;

`;

export const Navig = styled.a`
text-decoration: none;
color: black;
margin-left: 12px;
&:hover {
    color: ${props => props.theme.paletteColor.pink};
}
`;

export const ContainerRight = styled.div<Props>`
width: 685px;
height: 558px;
${props => props.isVisibleStyle && css `
animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.5s both;
`}

@keyframes slide-in-blurred-bottom {
  0% {
        margin-top:1000px;
        filter: blur(40px);
        opacity: 0;
  }
  100% {
        margin-top:0px;
        filter: blur(0px);
        opacity: 1;
  }
}
@media (max-width: 1024px) {
  margin-bottom: 6rem;
  height: 415px;
  width: 95%;
}
`;

export const DivInputUp = styled.div`
    margin: 60px 0px 30px 0px;
`;

export const Input = styled.input`
margin-left: 42px;
border: none;
border-bottom: 2px solid black;
background-color: transparent;
padding-left: 8px;
outline: none;

&::placeholder {
    color: black;
    font-family: 'Roboto Serif', serif;
    font-style: italic;
    font-weight: bold;
}

@media (max-width: 1024px) {
  width: 80%;
}
`;

export const DivInputDown = styled.div`
display: flex;
flex-direction: column;
`;

export const InputDown = styled.input`
border: none;
width: 610px;
margin-left: 42px;
background-color: transparent;
border-bottom: 2px solid black;
padding-left: 8px;
outline: none;

&::placeholder {
    color: black;
    font-family: 'Roboto Serif', serif;
    font-style: italic;
    font-weight: bold;
}
@media (max-width: 1024px) {
  width: 80%;
}
`;

export const TextArea = styled.textarea`
width: 610px;
height: 200px;
resize: none;
margin-left: 42px;
border: 2px solid black;
background-color: transparent;
border-radius: 20px;
padding: 8px 8px;
margin-top: 32px;

&::placeholder {
    color: black;
    font-family: 'Roboto Serif', serif;
    font-style: italic;
    font-weight: bold;
}
@media (max-width: 1024px) {
  width: 80%;
  height: 5rem;
}
`;

export const TextErro = styled.p`
margin-left: 40px;
color: ${props => props.theme.paletteColor.red};
font-size: 12px;
margin-top: 4px;
`;
export const TextErroFone = styled.p`
margin-left: 367px;
color: ${props => props.theme.paletteColor.red};;
font-size: 12px;
margin-top: -26px;
margin-bottom: 24px;
`;
export const TextErroNome = styled.p`
margin-left: 42px;
color: ${props => props.theme.paletteColor.red};;
font-size: 12px;
margin-top: -15px;
margin-bottom: 10px;
`;

export const DivResponse = styled.div`
display: flex;
align-items: center;

@media screen and (max-width: 520px){
  flex-direction: column;
}
`;

export const Button = styled.button`
align-items: center;
background-color: ${props => props.theme.paletteColor.yellow};
border: 2px solid ${props => props.theme.paletteColor.yellow};
color: #fff;
cursor: pointer;
display: inline-flex;
font-family: Inter,sans-serif;
font-size: 16px;
font-weight: 600;
height: 48px;
padding: 0 17px;
text-align: center;
transition: all .3s;
margin: 15px 0px 0px 42px;
border-radius: 4px;

:hover {
  background-color: ${props => props.theme.paletteColor.pink};
  border-color: ${props => props.theme.paletteColor.pink};
}
:active {
  background-color: #d45e6f;
  border-color: #d45e6f;
}
`;


export const SendSucess = styled.p`
font-size: 14px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 8px;
background-color: #068006;
width: 200px;
height: 35px;
margin-left: 2rem;
border-radius: 40px;
color: white;
gap: 8px;
transition: all .8s;
`;

export const SendError = styled.p`
font-size: 16px;
width: 230px;
margin-left: 2rem;
margin-top: 8px;
background-color: red;
text-align: center;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 40px;
color: wheat;
`;
