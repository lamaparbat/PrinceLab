import styles from '../../styles/Homepage.module.css';
import Language from '../Homepage/language'

function index() {
  return (
    <div className={'container-fluid'+styles.homepage}>
      <video
        className={`${styles.video}`}
        src={"/assets/paradox.mp4"}
        autoPlay loop muted></video>
      <Language />
    </div>
  )
}

export default index;
