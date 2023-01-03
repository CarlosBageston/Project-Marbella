import styled from 'styled-components';
import { Button } from '../DetailReport/style';


export const BoxMui = styled.div`
width: 60%;
background-color: #ffe4ff;
margin-top: 12px;
border: 1px solid #000000;
border-radius: 12px;
margin-bottom: 24px;
animation: scale-up-center 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

@keyframes scale-up-center {
  0% {
    transform: scale(0.5);
     box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  70%{
    transform: scale(1.1);
  }
  100%{
    transform: scale(1);
    box-shadow: 8px 8px 10px 0px rgba(0, 0, 0, 0.25);
  }

}

@media screen and (max-width: 1000px) {
  width: 80%;
}

`;

export const BoxButton = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
`;

export const InputFile = styled.input`
display: none;
`;

export const BoxForm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 70vh;


`;

export const TextErroNome =styled.div`
color: red
`;

export const ContainerDelete = styled.div`
width: 100%;
`;

export const BoxDelete = styled.div`
width: 90%;
margin-top: -30px;
display: flex;
align-items: center;
justify-content: flex-end;
`;

export const TextDelete = styled.div`
font-size: 15px;
cursor: pointer;
`;

export const ButtonCarrossel = styled(Button)`
margin: 8px
`;
export const BackButton = styled(Button)`
margin: 8px
`;

export const SelectImage = styled.p`
font-size: 14px;
padding: 12px;
`;

