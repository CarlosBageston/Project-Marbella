import styled from 'styled-components';

export const Box = styled.div`
background-color: #E8DCE4;
height: 100vh;
width: 100%;

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

@media (max-width: 800px) {
    flex-direction: column;
    margin-top: 100px;
}
@media ((min-width: 801px) and (max-width: 1400px)) {
margin-top: 75px;
}
`;

export const ImageSlider = styled.img`
width: 482px;
height: 482px;
border-radius: 130px;

@media (max-width: 800px) {
    width: 200px;
    height: 200px;
    padding: 8px;
}
@media ((min-width: 801px) and (max-width: 1400px)) {
    width: 225px;
    height: 250px;
}
`;
export const BoxSlider = styled.div`
padding: 50px;
height: 58vh;
border-top: 5px dashed #122738;
border-left: 5px dashed #122738;
margin-left: 50px;
width: 50%;
overflow: hidden;
position: relative;

&::before{
content: "";
position: absolute;
margin-top: 381px;
width: 50%;
margin-left: -54px;
border-bottom: 5px dashed #122738;
}

@media screen and (max-width: 380px) {
    height: 94vh;
    padding: 12px;
    width: 80%;
    margin-left: 0;

    &::before{
    margin-top: -13px;
    height: 70%;
    margin-left: 42%;
    border-right: 5px dashed #122738;
    border-bottom: none;

    }
}

@media ( (min-width: 381px) and (max-width: 450px)) {
    height: 94vh;
    padding: 11px;
    width: 80%;
    margin-left: 0;

    &::before{
    margin-top: -13px;
    height: 70%;
    margin-left: 44%;
    border-right: 5px dashed #122738;
    border-bottom: none;

    }
}
@media ((min-width: 451px) and (max-width: 550px)) {
    height: 94vh;
    padding:10px;
    width: 80%;
    margin-left: 0;

    &::before{
    margin-top: -13px;
    height: 70%;
    margin-left: 45%;
    border-right: 5px dashed #122738;
    border-bottom: none;

    }
}

@media ((min-width: 551px) and (max-width: 800px)) {
    height: 94vh;
    padding: 10px;
    width: 80%;
    margin-left: 0;

    &::before{
    margin-top: -13px;
    height: 70%;
    margin-left: 46%;
    border-right: 5px dashed #122738;
    border-bottom: none;

    }
}

@media screen and ((min-width: 801px) and (max-width: 1400px)) {
    height: 90%;
    padding: 12px;

    &::before{
    margin-top: 357px;
    margin-left: -17px;
    }
}
`;

export const Walcome = styled.h2`
color: ${props => props.theme.paletteColor.yellow};
font-size: 18px;

@media (max-width: 800px) {
    font-size: 12px;
    width: 200px;
}
@media ((min-width: 801px) and (max-width: 1400px)) {
    font-size: 14px;
}
`;

export const NameEmpresa = styled.h1`
color: ${props => props.theme.paletteColor.pink};
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
color: #A1373D;
font-size: 40px;
font-family: 'Roboto Serif', serif;
margin: 45px 0px;

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
color: #A1373D;
font-weight: 300;
font-family: 'Roboto Serif', serif;
line-height: 1.4em;

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