import React from "react";
import Maiara from "../assets/Maiara.jpg"
import {Img, Main, Sessao} from "../Styles/inicioStyle"
import Instagram from "../assets/instagram.svg"
import Linkedin from "../assets/linkedin.svg"
import Whats from "../assets/whats.svg"
import Github from "../assets/github.svg"

function Inicio(){
    return(
        <Main>
        <figure>
            <Img src={Maiara} alt="Minha foto" />
        </figure>
        <Sessao>
            <h1> Olá eu sou a Maiara  </h1>
            <h3>Desenvolvedora Front-End</h3>
          <div>
            <a href="https://www.instagram.com/maiara__diass/" target="_blank">
                <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/maiara-dias-5473581b8/" target="_blank">
                <img src={Linkedin} alt="Linkedin" />
            </a>
            <a href="https://wa.me/+5511959897145">
                <img src={Whats} alt="WhatsApp" target="_blank"/>
            </a>
            <a href="https://github.com/MaiaraDias" target="_blank">
                <img src={Github} alt="Github" />
            </a>
        </div>
        </Sessao>
        </Main>

    )
}

export default Inicio