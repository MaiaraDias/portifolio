import React from "react";
import Pizza from "../assets/pizza.png"
import {Img} from "../Styles/projetosStyle"
function Projetos(){
    return(
        <section>
            <h1>Projetos </h1>
            <section>
                <figure>
                    <a href="LInK VERCEL- do projeto- imagem tem que está em assets " target="_blank"></a>
                    <Img src={Pizza} alt="Site La pizza" />
                </figure>
                <div>
                    <h2>La Pizza</h2>
                    <h3>-tecnologias utilizadas no proje- React, Javascript, styled Components</h3>
                </div>
            </section>
        </section>
    )
}
export default Projetos