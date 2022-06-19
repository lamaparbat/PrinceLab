import styles from '../../styles/Homepage/language.module.css'

function index() {
  return (
    <>
      <div className={'container-fluid '+styles.language}>
        <center>
          <h1 id={styles.title}>Languages we ought to simplify</h1>
        </center><br />
        <div className={styles.icon_container}>
          <img
            src={ "/assets/python.png"}
            className='img-fluid' id={styles.icon}
            loading='lazy'
          />
          <img
            src={ "/assets/tensorflow.png"}
            className='img-fluid' id={styles.icon}
            loading='lazy'
          />
          <img
            src={ "/assets/flutter.png"}
            className='img-fluid' id={styles.icon}
            loading='lazy'
          />
          <img
            src={ "/assets/arduino.png"}
            className='img-fluid'
            id={styles.icon}
            loading='lazy'
          />
        </div>
      </div>
    </>
  );
}

export default index;
