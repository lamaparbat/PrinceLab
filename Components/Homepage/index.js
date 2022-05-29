import styles from '../../styles/Homepage.module.css';
import Language from '../Homepage/language';
import Block from '../Homepage/block';
import Environment from '../Homepage/environment';
import Service from '../Homepage/service';
import Download from '../Homepage/download';
import Guide from '../Homepage/guide';

function index() {
  return (
    <div className={'container-fluid'+styles.homepage}>
      <video
        className={`${styles.video}`}
        src={"/assets/paradox.mp4"}
        autoPlay loop muted></video>
      <Language />
      <Block />
      <Environment />
      <Service />
      <Download />
      <Guide />
    </div>
  )
}

export default index;
