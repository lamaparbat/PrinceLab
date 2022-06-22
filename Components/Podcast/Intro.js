import React from 'react';
import styles from '../../styles/Podcast/intro.module.css';


const Intro = () => {
  return (
   <div className={styles.intro_container +" d-flex just"}>
    <div className={styles.col1+ " d-flex flex-column align-items-start"}>
     <h2>PrinceLab Journey</h2>
     <p className={styles.intro_para+" mb-4"}>We will talking about how princelab started from it’s initial phase and what
      future holds for PrinceLab.</p>
     <button className={"btn w-25 text-light rounded-pill "+styles.listen_btn}>Listen now</button>
    </div>
    <div className={styles.col2}>
     <img src={"/assets/steve.png"} className="img-fluid" />
    </div>
    </div>
  )
}

export default Intro
