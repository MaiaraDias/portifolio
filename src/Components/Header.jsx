//import React, {useState} from "react";
import {Link} from "react-router-dom"
import {StyleHeader, Navegacao} from "../Styles/headerStyle"

//import Menu from "../assets/menu.svg"
//import X from "../assets/x.svg"

function Header(){
    //const [menuAberto, setMenuAberto] = useState(false)

    return(
        <StyleHeader>
          <nav>
            <Navegacao>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/projetos">Projetos</Link></li>
             </Navegacao>
           </nav>
            </StyleHeader>
    )
}

export default Header