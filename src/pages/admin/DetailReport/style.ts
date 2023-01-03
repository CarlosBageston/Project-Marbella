import styled from 'styled-components';


export const Container = styled.div`
width: 80%;
height: 700px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
border-radius: 20px;
`;

export const DivButton = styled.div`
display: flex;
justify-content: space-between;
width: 60%;
`;

export const Button = styled.button`
  background: ${props => props.theme.paletteColor.red};
  border: 1px solid ${props => props.theme.paletteColor.red};;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  color: ${props => props.theme.paletteColor.background};
  cursor: pointer;
  font-size: 16px;
  padding: 12px 14px;
  margin: 24px 0px 12px 12px;
  display: flex;
  align-items: center;
  gap: 8px;

&:hover{
  background-color: ${props => props.theme.paletteColor.background};;
  color: ${props => props.theme.paletteColor.red};
}

&:active {
  opacity: .5;
}
`;

export const DivResult = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 16px;
`;

export const Label = styled.p`
color: #4f4f4ffc;
`;

export const Response = styled.p`
color: black;
border-bottom: 1px solid black;
`;
export const ResponseMsg = styled.p`
color: black;
`;
export const Mensagem = styled.p`
margin-bottom: 20px;
color: #4f4f4ffc;
`;