import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../DetailReport/style';

export const Box =styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 180px;

`;

export const EditButton = styled(Button)`
width: 300px;
margin: 10px 16%;
margin-left: 64%;

@media screen and (max-width: 1024px) {
    width: 6rem;
    margin-left: auto;
}
`;

export const DivCircle = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 67vh;
`;

export const DivList = styled.div`
width: 70%;
height: 67vh;
overflow-y: auto;
`;

export const Ul = styled.ul`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
`;

export const LinkNav = styled(Link)`
text-decoration: none;
`;

export const Li = styled.li`
width: 100%;
margin-bottom: 16px;
font-size: 28px;
color: #000000;
font-family: 'Roboto';
padding: 16px;
background-color: #d9d9d9;
border-radius: 18px;
cursor: pointer;
display: flex;
align-items: center;
gap: 8px;
&:hover {
    color: #00007d;
    background-color: #dedede;
}

@media screen and (max-width: 1024px) {
    font-size: 18px;
}
`;

export const LiRead = styled(Li)`
color: #686868;
background-color: #eeeeee;
&:hover {
    color: #5d5c5c;
    background-color: #ebe8e8;
}
`;