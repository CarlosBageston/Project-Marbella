import styled from 'styled-components';


export const Box = styled.div`
background-image: linear-gradient(to right bottom, #b801c9, #c902d7, #db02e4, #ed02f2, #ff00ff);
height: 100vh;
width: 100%;

/* &::before {
    content: '';
    display: block;
    background-image: url('../../../src/assets/transition-main-page.svg');
    width: 100%;
    padding-top: 4.83%;
    position: fixed;
    z-index: 1;
    background-size: cover;
    margin-top: 710px;
} */

@media (max-width: 1400px) {
    height: 100%
}
`;

export const Container = styled.div`
height: 420px;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: 170px;

@media (max-width: 500px) {
    flex-direction: column;
    margin-top: 100px;
}
@media ((min-width: 801px) and (max-width: 1400px)) {
margin-top: 75px;
}
`;

export const ImageSlider = styled.img`
width: 382px;
height: 382px;
border-radius: 130px;

@media (max-width: 800px) {
    width: 200px;
    height: 200px;
    padding: 8px;
}
@media ((min-width: 801px) and (max-width: 1400px)) {
    width: 320px;
    height: 320px;
}
`;
export const BoxSlider = styled.div`
padding: 30px;
height: 100%;
border-top: 5px dashed #122738;
border-left: 5px dashed #122738;
margin-left: 50px;
width: 50%;
position: relative;

&::before{
content: "";
position: absolute;
margin-top: 380px;
width: 50%;
margin-left: -33px;
border-bottom: 5px dashed #122738;
}

@media ( max-width: 490px) {
    height: 94vh;
    padding: 11px;
    width: 217px;
    margin-left: 0;

    &::before{
    margin-top: -16px;
    height: 70%;
    margin-left: 92px;
    border-right: 5px dashed #122738;
    border-bottom: none;

    }
}
@media ((min-width: 491px) and (max-width: 800px) ) {
    height: 28vh;
    padding:10px;
    width: 80%;
    margin-left: 0;

    &::before{
    margin-top: 187px;
    margin-left: -14px;
    }
}

`;

export const NameEmpresa = styled.h1`
    background: linear-gradient(to bottom left, #ffe000 0%, #ffd183 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
font-size: 54px;
font-family: Ribeye;
margin: 10px 0px;

@media (max-width: 800px) {
    font-size: 18px;
}
@media ((min-width: 801px) and (max-width: 1400px)) {
    font-size: 28px;
}
`;

export const TextTitle = styled.h2`
color: #FFF;
font-size: 40px;
font-family: 'Roboto Serif', serif;
margin: 45px 0px;
text-shadow: 3px 3px 2px #000;

@media (max-width: 800px) {
    font-size: 14px;
    margin: 4px 0px
}
@media ((min-width: 801px) and (max-width: 1400px)) {
margin: 18px 0;
font-size: 20px;
}
`;

export const Descrition = styled.p`
color: #FFF;
font-weight: 300;
font-family: 'Roboto Serif', serif;
line-height: 1.4em;
text-shadow: 3px 3px 2px #000;

@media (max-width: 800px) {
    font-size: 10px;
}
@media ((min-width: 801px) and (max-width: 1400px)) {
    font-size: 20px;
}
`;

export const BoxSpinner = styled.div`
position: absolute;
width: 100%;
margin-top: -450px;
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 1400px) {
    margin-top: -180px;
    margin-left: -50px;
}
`;