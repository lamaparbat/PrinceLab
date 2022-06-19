import React from 'react';
import styles from '../../../styles/Career/Journey.module.css';

function index() {
  return <div className={'container-fluid p-0 pb-3 '+ styles.journey}>
    <div className={styles.journey_row}>
      <div className={styles.leftBar}>
        <div className={styles.leftBar_btm}></div>
   </div>
   <div className={styles.content +' d-flex flex-column'}>
        <h1 id={styles["on"]}>ON</h1>
        <h1 id={styles["step"]}>STEP</h1>
   </div>
  </div>
    <div className={styles.rightBar}>
      <h1 id={styles["your"]}>Your</h1>
      <h1 id={styles["journey"]}>Journey</h1>
  </div>
  <img
      id={styles["journey_step_img"]}
   src={"/assets/step.png"} />
 </div>;
}

export default index;
