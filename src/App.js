import React from "react";
import { Footer } from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

const App = () => {
  const {pathname} = window.location

 let Pagina; 
  if (pathname === '/produtos') {
    Pagina = Produtos
  } else {
  Pagina = Home
  }

  return (
  <>
  <Pagina />
  <Header />
  <Footer />
  </>
  )
};

export default App;