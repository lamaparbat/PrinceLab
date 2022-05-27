import styles from '../../styles/language.module.css'

function language() {
  //custome tech card component
 const Card = ({name, src,id}) => {
  return (
   <div className={styles.tech_card}>
    <img
     src={src}
     className='img-fluid' id={styles[id]}
     loading='lazy'
    />
    <h4 id={styles["card_title"]}>{name}</h4>
   </div>
)
 }
 
  return (
   <div className={'container-fluid py-5 ' + styles.languages}>
    <center className={styles.center}>
     <h1 id={styles['title']}>Languages we ought to simplify</h1>
    </center><br />
    <div className={styles.icon_container}>
     <div className={styles.card_container}>
      <Card name="Python" src="/assets/python.png" id="icon1" />
      <Card name="Tensorflow" src="/assets/tensorflow.png" id="icon2"/>
      <Card name="Flutter" src="/assets/flutter.png" id="icon3" />
      <Card name="Arduino" src="/assets/arduino.png" id="icon4"/>
     </div>
    </div>
   </div>
  )
}

export default language
