import styled from "styled-components";

export const Img = styled.img`
width:20vw;
border-radius: 20px;
@media (max-width:800px){
    width:80vw;
}
`
export const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
height: 88vh;
border: solid;
@media (max-width:800px){
    flex-direction: column;
}
`
export const Sessao = styled.section`
margin-left: 20px;
text-align: center;
`
