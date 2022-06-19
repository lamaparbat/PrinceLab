import styles from '../../styles/About/Card.module.css';

function index() {
 // custom card box
 const Card1 = () => {
  return (
   <>
    <div className={styles.card1}>
     <div className={styles.body}>
      <h3 id={styles["card1_title"]}>See our </h3>
      <h4 id={styles["card1_sub_title"]}>mind behind the scene</h4>
      <img
       id={styles["img"]}
       src={"/assets/intro.svg"}
       loading="lazy"
      />
     </div>
     <div className={styles.card1_footer}>
      <h6>Get to know about
       our revolutionary
       Software</h6>
      <img
       id={styles["img2"]}
       src={"/assets/block.png"}
       loading="lazy"
      />
     </div>
    </div>
   </>
  )
 }

 // custom card box
 const Card2 = () => {
  //custom dot component
  const Dot = () => {
   return (
    <div className={styles.dot + ' mx-2'}></div>
   )
  }

  return (
   <>
    <div className={styles.card2+' text-center'}>
     <img
      id={styles["step_img"]}
      src={"/assets/step.png"}
      loading="lazy"
     />
     <div className={styles.card2_features+' py-4'}>
      <h6>Become a part of our journey</h6>
      <div className={styles.quotes+' pb-2 pt-3'}>
       <span><Dot />We push our boundaries everyday </span><br />
       <span><Dot />Respect talent and creativity </span><br />
       <span><Dot />Always think different</span><br />
      </div>
      <button className={'btn btn-dark border-white w-50 py-1'}>Join Us</button>
     </div>
    </div>
   </>
  )
 }

 return <div className={styles.cards+' py-5 pt-3'}>
  <Card1 />
  <Card2 />
 </div>;
}

export default index;
