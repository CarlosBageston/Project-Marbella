import styled from 'styled-components';


export const Box = styled.div`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-image: linear-gradient(to left top, #78a7ee, #a796e9, #d47fd0, #f26aa5, #fb6070);

@media screen and (max-width: 1024px) {
  justify-content: center;
}
`;

export const Image = styled.img`
 width: 400px;
margin-top: 280px;
position: absolute;
bottom: 0;
left: 0;
animation: slide-picole .8s linear normal 1 forwards;
transition: animation .4s;

@keyframes slide-picole {
  from {
    margin-left: -500px;
    opacity: 0;
  }
  to {
    margin-left: 0;
    opacity: 1;
  }
}

@media screen and (max-width: 540px) {
  width: 250px;
}
 @media screen and ((min-width: 541px) and (max-width: 1024px)) {
  width: 400px;
}
`;

export const Container = styled.div`
width: 400px;
height: 400px;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
background: rgba(255, 255, 255, 0.12);
border-radius: 16px;
box-shadow: 0 4px 30px rgb(0 0 0 / 30%);
position: relative;
animation: slide-Box .8s linear normal 1 forwards;
transition: animation .4s;

@keyframes slide-Box {
  from {
    margin-top: -700px;
    background: rgb(200 1 1 / 12%);
    opacity: 0;
  }
  to {
    margin-top: 0;
    background: rgba(255, 255, 255, 0.12) ;
    opacity: 1;
  }
}

@media screen and (max-width: 1024px) {
  width: 85%;
  height: 400px;
  }
`;

export const Title = styled.h1 `
font-size: 52px;
color: white;

@media screen and (max-width: 1024px) {
  font-size: 32px;
}
`;

export const DivInput = styled.div`
display: flex;
flex-direction: column;
`;

export const Input = styled.input`
border: none;
border-radius: 24px;
background: #ffffff6b;
height: 44px;
width: 100%;
margin-top: 40px;
padding: 16px;
outline: none;

@media screen and (max-width: 1024px) {
 width: 100%;
}
`;

export const Error = styled.p`
font-size: 16px;
text-align: center;
padding: 12px;
color: red;
`;

export const Button = styled.button`
align-items: center;
background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #7901ab 100%);
border: 0;
border-radius: 6px;
box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
color: #fff;
cursor: pointer;
display: inline-flex;
height: 48px;
justify-content: center;
transition: box-shadow .15s,transform .15s;
font-size: 24px;
margin-top: 40px;


&:hover {
  box-shadow: rgb(45 35 66 / 40%) 0 4px 8px, rgb(45 35 66 / 30%) 0 7px 13px -3px, #6d0583 0 -3px 0 inset;
  transform: translateY(-2px);
}

&:active {
    box-shadow: #540553 0 3px 7px inset;
    transform: translateY(2px);
}

@media screen and (max-width: 1024px) {
 width: 100%;
}
`;