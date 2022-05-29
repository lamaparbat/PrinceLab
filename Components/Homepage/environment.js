import styles from '../../styles/environment.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Block = () => {
 return (
  <div className={"container-fluid py-5 " + styles.environment_container}>
   <div className={styles.environment_container_row}>
    <img
     src={"/assets/environment.png"}
     loading='lazy'
     alt=""
     id={styles['img']}
    />
    <div className={styles.content}>
     <h1><b>Simplest <span id={styles["span"]}>Environment</span></b></h1>
     <h3>With the most tools and function</h3>
     <p className={'my-3 h5 '+styles.para}>Sketch is the home for your entire collaborative design
      process. From early ideas to pixel-perfect artwork,
      playable prototypes and developer handoff. It all starts
      here. This will result in one ACMI installment plan over 12
      months for the eligible iPad or Mac</p>
     <font className={"text-light font-weight-bold btn p-0 "}>Learn how to use it &nbsp; &nbsp;<AiOutlineArrowRight
      className={"text-light"}
      id={styles["rightArrowIcon"]}
     /></font>
    </div>
   </div>
  </div>
 )
}

export default Block
