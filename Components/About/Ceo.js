import styles from '../../styles/About/Ceo.module.css';

function index() {
 //custom dot component
 const Dot = () => {
  return (
   <div className={styles.dot+' 1mx-2'}></div>
  )
 }

 return (
  <div className={styles.ceo+' container my-5'}>
   <img
    id={styles["ceo_img"]}
    src={ "/assets/ceo.png"}
    loading='lazy'
   />
   <div className={styles.ceo_content}>
    <h1>Prince Kumar Singh</h1>
    <p>CEO/FOUNDER</p>
    <h4 id={styles["h4"]}>
     <img
      src={"/assets/quote1.png"}
      loading="lazy"
      id={styles["ceo_content_img1"]}
     />
     We are never going to compromise our
     company goals and values at any cost.
     <img
      src={"/assets/quote2.png"}
      loading="lazy"
      id={styles["ceo_content_img2"]}
     />
    </h4>
    <center>
     <div className={styles.quotes+' pb-2 pt-3'}>
      <span id={styles["span"]}><Dot />We push our boundaries everyday </span><br />
      <span id={styles["span"]}><Dot />Respect talent and creativity </span><br />
      <span id={styles["span"]}><Dot />Always think different</span><br />
     </div>
    </center>
   </div>
  </div>
 );
}

export default index;
