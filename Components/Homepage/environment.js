import styles from '../../styles/Homepage/environment.module.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Block = () => {
 return (
  <div className={'container-fluid '+ styles.AboutEnvironment}>
   <div className={styles.AboutEnvironment_rows}>
    <img
     src={"/assets/environment.png"}
     loading='lazy'
     id={styles["img"]}
     alt="" />
    <div className={styles.content}>
     <h1 id={styles["h1"]}><b>Simplest <span id={styles["span"]}>Environment</span></b></h1>
     <h3 id={styles["h3"]}>With the most tools and function</h3>
     <p className={'my-3 '+styles.para}>Sketch is the home for your entire collaborative design
      process. From early ideas to pixel-perfect artwork,
      playable prototypes and developer handoff. It all starts
      here. This will result in one ACMI installment plan over 12
      months for the eligible iPad or Mac</p>
     <font className={"text-white font-weight-bold btn p-0"}>Learn how to use it <ArrowForwardIcon
      className={"text-dark"}
      id={styles["rightArrowIcon"]}
     /></font>
    </div>
   </div>
  </div>
 )
}

export default Block
