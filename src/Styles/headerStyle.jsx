import styled from "styled-components";

export const StyleHeader = styled.header`
background-color:#2F4538;
display:flex;
height: 12vh;
align-items: center;
justify-content:center;
`

export const Navegacao = styled.ul`
display:flex;
list-style: none;
width: 40vw;
justify-content: space-around;


    @media (max-width: 800px){
        width:80vw;
          }
        a{
            text-decoration: none;
            color: white
        }

`
export const Logo = styled.img`
display: flex;
width:4vw;
height:3vh;
`