import styles from '../../styles/Homepage/service.module.css'
import { AiOutlineArrowRight } from 'react-icons/ai';

// services card
const Card = (props) => {
 return (
  <>
   <div className={styles.card}>
    <img
     src={props.src}
     loading='lazy'
     id={styles["service_img"]}
    />
    <div className='card-body text-center'>
     <span className='card-title'>{props.title}</span>
    </div>
   </div>
  </>)
}

const Service = () => {
 // creating instance of useNavigate
 return (
  <div className={'container-fluid '+styles.services}>
   {/* row1 -> short description */}
   <div className={styles.services_rows}>
    <div className={'pt-2 ' + styles.content}>
     <h1><b><span className='text-danger'>M</span>ake your work <span className='text-danger'>M</span>ore
      easier</b></h1>
     <p className={styles.para}>Choose your preferred app, AI app, extensions and block to get your work done faster
      and easier. App Store lets you download the app and use it for every personal use, AI store
      have all the apps that are powered/uses AI to run their app, Extensions have all the
      necessary extension to be used and the block contains all the pre-defined custom code
      block uploaded by the developers that can be used in your program. </p>
     <font className={"text-primary bg-none font-weight-bold btn p-0"}>Visit our store <AiOutlineArrowRight className={"text-dark"} /></font>
    </div>
   </div>
   {/* rows2 -> services cards */}
   <div className='container d-flex justify-content-center'>
    <div className={styles.card_rows}>
     <Card src={"/assets/application.png"} title="Applications" />
     <Card src={ "/assets/ai.png"} title="Artificial Intelligence" />
     <Card src={ "/assets/extension.png"} title="Extension" />
     <Card src={"/assets/block2.png"} title="Block" />
    </div>
   </div>
  </div>
 )
}

export default Service
