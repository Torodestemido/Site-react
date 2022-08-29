import React from "react";
import styles from "./Headercss.module.css";
import CoffeeIcon from "@mui/icons-material/Coffee";

// import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  return (
    <>
     
      <div className={styles.baroffer}>

        <h1 className={styles.tituleoffer}>10% OFF NA 1ª COMPRA* <a className={styles.linkoffer}  href="/">Clique aqui!</a></h1>

      </div>

    <div className={styles.mainbar}>

      <header className={styles.head}>

        <div className={styles.logo}>

          <div>
            <h1>Toro's</h1>
          <div/>

          <div className={styles.coffee}>
            <h1>Coffee</h1>
            <CoffeeIcon className={styles.svglogo} sx={{ fontSize: 30}}  />
          </div>

          </div>

        </div>

        <nav>
          <ul className={styles.nav__links}>
             <li><a className={styles.toolbar} href="/">Login</a></li>           
          </ul>
          
        </nav>
        <a className={styles.toolbar} href="/">Produtos</a>
      </header>
     </div>

      <div className={styles.barprod}> 

        <div  className={styles.products}>
         <CoffeeIcon className={styles.svgproduct} sx={{ fontSize: 30}}  />
         <li><a href="/">CAFÉ MOÍDO</a></li>
        </div>

        <div  className={styles.products}>
         <CoffeeIcon className={styles.svgproduct} sx={{ fontSize: 30}}  />
         <li><a href="/">CAFÉ EM GRÃOS</a></li>
        </div>

        <div  className={styles.products}>
         <CoffeeIcon className={styles.svgproduct} sx={{ fontSize: 30}}  />
         <li><a href="/">DRIP COFFEE</a></li>
        </div>
       
        <div  className={styles.products}>
         <CoffeeIcon className={styles.svgproduct} sx={{ fontSize: 30}}  />
         <li><a href="/">CÁPSULA COMPÁTIVEL COM NESPRESSO®</a></li>
        </div>

        <div  className={styles.products}>
         <CoffeeIcon className={styles.svgproduct} sx={{ fontSize: 30}}  />
         <li><a href="/">ACESSÓRIOS</a></li>
        </div>

        <div className={styles.products}>
         <CoffeeIcon className={styles.svgproduct} sx={{ fontSize: 30}}  />
         <li><a href="/">KITS TORO'S COFFEE</a></li>
        </div>

      </div>

    </>
  );
};

export default Header;
