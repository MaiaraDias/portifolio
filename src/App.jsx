import React from "react";
import Header from "./Components/Header"
import Inicio from "./Components/Inicio"
import Sobre from "./Components/Sobre"
import Projetos from "./Components/Projetos"
//instalar react router dom: npm install react-router-dom
// improtar as funcionalidade do React router:
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {GlobalStyle} from "./Styles/global"

function App(){
  return(
    <>
    <GlobalStyle/>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/sobre" element={<Sobre/>}/>
      <Route path="/projetos" element={<Projetos/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App