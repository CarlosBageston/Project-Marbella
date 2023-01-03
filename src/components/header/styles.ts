import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {headerIsVisible} from '../../types/headerResponsivo';

export const Container = styled.div`
display: flex;
height: 100px;
justify-content: space-evenly;
background-color: #f2f2f2;
box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.25);
position: fixed;
top: 0px;
z-index: 3;
width: 100%;

@media (max-width: 800px) {
    display: none;
}
`;

export const BoxRight = styled.div`
display: flex;
align-items: center;
`;

export const BoxUl = styled.ul`
display: flex;
`;

export const NavLi = styled(Link)`
padding: 12px;
margin-right: 12px;
font-size: 24px;
text-decoration: none;
color: #000;
display: inline-block;

&::after{
    display: block;
    content: "";
    margin: auto;
    background-color: ${props => props.theme.paletteColor.pink};
    width: 0;
    height: 3px;
    transition: width 0.5s;
}
&:hover::after{
    width: 100%;
}
&:hover {
color: ${props => props.theme.paletteColor.pink};
}

@media (max-width: 800px) {
    color: #FFF;
    font-size: 32px;
}
`;

export const ImageLogo = styled.img`
width: 175px;
height: 165px;
transform: rotate(345deg);
`;

export const ImageIcone = styled.a `
margin-right: 12px;

&::after{
    display: block;
    content: "";
    margin: auto;
    background-color: ${props => props.theme.paletteColor.pink};
    width: 0;
    height: 3px;
    transition: width 0.5s;
}

&:hover::after{
    width: 100%;
}

@media (max-width: 800px) {
    color: #fdfdfd;
    -webkit-text-stroke: 2px;
    -webkit-text-stroke-color: black;
    font-size: 32px;
    text-decoration: none;
    align-items: center;
    display: flex;
    gap: 8px;
}
`;

export const IconAdmin = styled.img`
cursor: pointer;
width: 37px;

&::after{
    display: block;
    content: "";
    margin: auto;
    background-color: ${props => props.theme.paletteColor.pink};
    width: 0;
    height: 3px;
    transition: width 0.5s;
}

&:hover::after{
    width: 100%;
}
`;

export const ContainerDown = styled.div`
display: none;

@media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100px;
    position: fixed;
    z-index: 2;
    width: 100%;
    background-color: white;
}
`;

export const ImageLogoDown = styled(ImageLogo)`
margin-top: 3rem;
z-index: 3;
`;



export const BoxRouters = styled.div<headerIsVisible>`
width: 100%;
position: fixed;
height: 100%;
margin-top: -12%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
z-index: 2;
background: rgba(248, 163, 30, 0.25);
border-radius: 16px;
box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
backdrop-filter: blur(7.7px);
border: 1px solid rgb(245 151 2 / 91%);

 ${props => props.checkBox ? `
animation: slide-in-top .3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`: ''}


@keyframes slide-in-top {
  0% {
        transform: translateY(1000px);
        opacity: 0;
  }
  100% {
        transform: translateY(59%);
        opacity: 1;
  }
}

`;

export const Label = styled.h1<headerIsVisible>`
border: 4px solid ${props => props.theme.paletteColor.yellow};
border-radius: 50%;
width: 2rem;
height: 2rem;

&::before {
    content: '';
    width: 32px;
    height: 3px;
    background: ${props => props.theme.paletteColor.yellow};
    display: block;
    margin-top: 25px;
    margin-left: 4px;
    transition: all 0.4s, color 0s;
}
&::after {
    content: '';
    width: 32px;
    height: 3px;
    background: ${props => props.theme.paletteColor.yellow};
    display: block;
    margin-top: -14px;
    margin-left: 4px;
    transition: all 0.4s, color 0s;
}
${props => props.checkBox ? `

&::before {
    content: '';
    width: 32px;
    height: 3px;
    background: #eba14b;
    display: block;
    margin-top: 19px;
    margin-left: 4px;
    transform: rotate(-50deg);
    transition: all 0.4s, color 0s;
}
&::after {
    content: '';
    width: 32px;
    height: 3px;
    background: #eba14b;
    display: block;
    margin-top: -3px;
    margin-left: 4px;
    transform: rotate(50deg);
    transition: all 0.4s, color 0s;
}

border: 4px solid #eba14b;

` : '' };


@media (max-width: 1400px) {
    display: block;
}
`;

export const DivImage = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 2rem;
justify-content: space-evenly;
height: 10rem;
`;