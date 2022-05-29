import $ from 'jquery';
import styles from '../../styles/footer.module.css';
import { useRouter } from 'next/router';


function Index() {
 // hide the footer when form comp rendered
 const cur_route = useRouter().pathname;

 // create instance to push new route
 const navigate = useRouter()

 //render component of link clicked
 const redirect = (route) => {
  navigate.push("/" + route)
 }


 return (
  <div
   className={styles.footer+' container-fluid d-' +
    (cur_route != "/Login" &&
     cur_route != "/Signup" &&
     cur_route != "/QuickGuide" &&
     cur_route != "/AiPreview" ? "flex" : "none")} >
   <div className={styles.footer_row}>
    <div className={styles.service_col}>
     <h5><b>Services</b><hr className='separator w-50' /></h5>
     <a onClick={() => redirect("")}>Paradox</a>
     <a onClick={() => redirect("Download")}>Download</a>
     <a onClick={() => redirect("Pricing")}>Pricing</a>
    </div>
    <div className='info_col'>
     <h5><b>Information</b><hr className={styles.separator +' w-50'} /></h5>
     <a href='#'>Setup Guide</a>
     <a onClick={() => redirect("Feature")}>Features</a>
     <a href='#'>Tutorial</a>
     <a onClick={() => redirect("NewFeatures")}>New Features</a>
    </div>
    <div className='company_col'>
     <h5><b>Company</b><hr className='separator w-50' /></h5>
     <a onClick={() => redirect("Career")}>Career</a>
     <a onClick={() => redirect("About")}>About Us</a>
     <a onClick={() => redirect("Policy")}>Privacy Policy</a>
     <a onClick={() => redirect("Terms")}>Terms & Condition</a>
    </div>
    <div className='follow_col'>
     <h5><b>Follow Us</b><hr className='separator w-25' /></h5>
     <div className={styles.icons_cont}>
      <div className={styles.icons_cont_child} onClick={() => window.location.assign("https://www.facebook.com/people/Prince-Lab/100070712031228/")}>
       <img className={'img-fluid '+styles.icon} src={ "/assets/fb.png"} />
      </div>
      <div className={styles.icons_cont_child} onClick={() => window.location.assign("https://twitter.com/Princelab2")}>
       <img className={'img-fluid ' + styles.icon} src={ "/assets/twitter.png"} />
      </div>
      <div className={styles.icons_cont_child} onClick={() => window.location.assign("https://www.instagram.com/_princelab_/")}>
       <img className={'img-fluid ' + styles.icon} src={"/assets/insta.png"} />
      </div>
      <div className={styles.icons_cont_child} onClick={() => window.location.assign("https://www.linkedin.com/in/prince-lab-3398a7217?originalSubdomain=np")}>
       <img className={'img-fluid ' + styles.icon} src={ "/assets/linked.png"} />
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Index
