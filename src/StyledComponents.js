import styled from 'styled-components';

export const Tituloh1 = styled.h1`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 3vw;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  background-color: #dbdbdb;
   max-width: 100%;
`;

export const Link = styled.a`
  // background-color: red;
  width: 10%;
  margin-left: -15vw;
  margin-right: 12vw;
`

export const ImgTitulo = styled.img`
   width: 100%;
  //  background-color: blue;
`;

export const InputStyled = styled.input`
  padding: 0.8% 20%;
  border-radius: 30px 30px;  
  margin: 0.3% 25%;
  font-size: 0.8vw;
  

  &:hover {
    box-shadow: 0 0 5px rgba(102, 170, 255, 0.5);
    transition: border-color 0.3s, box-shadow 0.3s;
    
  }

  &:focus {
    outline: none; 
    border-color: #66aaff; 
    box-shadow: 0 0 5px rgba(102, 170, 255, 0.5);
  }
`;
export const ListaArrumada = styled.li`
  background-color: #f7f7f7;
  padding: 1vw;
  margin-bottom: 3vw;
  border-radius: 30px;
  display: flex;
  max-width: 100%;
  box-sizing: border-box;
  width: 99%;
  

  img {
    border-radius: 10px;
    

    &:hover {
      box-shadow: 10px 10px 15px rgba(102, 170, 255, 0.5);
      // border-radius: 40px 40px;
      transform: scale(1.15);
      transition: 0.6s;
    } 
  }

  h3 {
    margin-bottom: 5px;
    font-size: 1.35vw;
  }
`;

export const DivdaDiv = styled.div`
  flex-grow: 1; 
  margin-left: 1vw; 
  margin-right: 0;
  max-width: 60vw; 
  box-sizing: border-box; 
`;

export const DivCentralizadaNaTela = styled.div `
  display: flex;
  justify-content: center;
`