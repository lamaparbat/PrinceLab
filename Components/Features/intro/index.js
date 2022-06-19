import React, {useEffect,useState} from 'react';
import styles from '../../../styles/Features/intro/index.module.css';

// Features
const Comp1 = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setTheme(localStorage.getItem("theme"))
  })
  return (
    <>
      <div className={styles.comp1}>
          {
              theme === "dark" ?
                  <img
                      style={{zIndex:"0"}}
                      src={"/assets/dot.svg"} alt=""
                  /> :
                  <img
                      style={{zIndex:"0 px"}}
                      src={"/assets/dot.png"} alt="" />
          }
        <h1>FEAT<span id={styles["u"]}>U</span><span id={styles["res"]}>RES</span></h1>
      </div>
    </>
  )
}

// stylus
const Comp2 = () => {
  return (
    <>
      <div className={styles.comp2}>
        <div className={styles.comp2_header+' pb-4'}>
          <h1 className={styles.comp2_header_title}>STYLUS
            <span className='text-danger'> SUPPORT</span>
          </h1>
          <img
            src={"/assets/f3.png"}
            id={styles["pen1"]}
            loading='lazy'
          />
        </div>
        <div className={styles.comp2_footer}>
          <img
            src={"/assets/f1.png"}
            id={styles["pen2"]}
            loading='lazy'
          />
          <span>Write notes into your flows by hand using
            a stylus pen. Effective use of this feature
            significantly support clarity and adds a
            whole new dimension to your visual flows. </span>
        </div>
      </div>
    </>
  )
}

function index() {
  return (
    <div className={'container px-1 py-4 '+ styles.intro}>
      <Comp1 />
      <Comp2 />
      <img
        src={"/assets/intro-liner.svg"}
        id={styles["intro_liner"]}
      />
    </div>
  )
}

export default index
