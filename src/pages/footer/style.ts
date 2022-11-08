import styled from 'styled-components';


export const Box = styled.div`
background-color: #fb374b;
display: flex;
height: 6rem;
align-items: center;
justify-content: space-around;
`;

export const Text = styled.p`
font-size: 14px;
color: #dfdfdf;
font-family: 'Roboto Serif';
margin-bottom: 20px;

@media screen and (max-width: 540px) {
    font-size: 10px;
    padding-left: 12px;
}
`;

export const Image = styled.img`
width: 125px;

@media screen and (max-width: 540px) {
 width:90px ;
 margin: 8px;
}
`;