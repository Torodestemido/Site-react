import React from 'react'
import styles from "./Headercss.module.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
    
    <footer className={styles.footer}>

      <div>

        <li><a id={styles.fontconfig} className={styles.footerlinks} href="/">FORMAS DE PAGAMENTO</a></li>

        <div className={styles.paybar}>

            <div className={styles.payments}>
              <p className={styles.visa}>Visa</p>
              <p className={styles.visa}>Visa</p>
              <p className={styles.visa}>Visa</p>
              <p className={styles.visa}>Visa</p>
            </div>

            <div className={styles.payments2}>
              <p className={styles.visa}>Visa</p>
              <p className={styles.visa}>Visa</p>
              <p className={styles.visa}>Visa</p>
              <p className={styles.visa}>Visa</p>
            </div>

      </div>    


      </div>

      <div>

        <li><a id={styles.fontconfig} className={styles.footerlinks} href="/">SOCIAL</a></li>

        <div className={styles.socialbar}>

          <div className={styles.socialicons}>

              <a href='/'><YouTubeIcon sx={{ fontSize: 50}} className={styles.svgyoutube} /></a>

              <a href='/'><FacebookIcon sx={{ fontSize: 48}} className={styles.svgyoutube}/></a>

              <a href='/'><InstagramIcon sx={{ fontSize: 50}} className={styles.svgyoutube}/></a>
          </div>

        </div>
      </div>

      <div>
       <li><a id={styles.fontconfig} className={styles.footerlinks} href="/">POWERED BY</a></li>
        <div className={styles.poweredbar}>
          <div className={styles.poweredcontent}> 
              <h2 className={styles.marca2}>CHECK</h2><h2 className={styles.toroltda}>TORO'S</h2>
          </div>
        </div>    
      </div>

      <div className={styles.footerlinks}>
        <div className={styles.enderess}>
          <li><a className={styles.fontenderess} href="/">Rua do Tiro</a></li>
          <li><a className={styles.fontenderess} href="/">Centro - Alguma cidade/HC</a></li>
          <li><a className={styles.fontenderess} href="/">De Segunda A 2040, Das 9h As</a></li>
          <li><a className={styles.fontenderess} href="/">18h</a></li>
        </div>
      </div>
      
    </footer>

    <div className={styles.detailbg} >

      <div className={styles.detail}></div>

       <div className={styles.footerthanks}>

        <div className={styles.footercomment}>
          <li><p  id={styles.fontconfig1} className={styles.thankscontent}>Toros'Coffee LTDA</p></li>
          <li><p id={styles.fontconfig1} className={styles.thankscontent}>CNPJ: 30.000.000/0000-00</p></li>
        </div>

        <li><p id={styles.fontconfig1} className={styles.thankscontent}>Produtos feitos com Amor pelo Toro</p></li>
       </div>

    </div>
   

    
    
    </>
  )
}

export default Footer