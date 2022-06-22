import $ from 'jquery';
import styles from '../../styles/Footer/footer.module.css';
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
      className={' container-fluid ' + styles.footer+' d-' +
        (cur_route != "/Login" &&
          cur_route != "/Signup" ? "flex" : "none")} >
      <div className={styles.footer_row}>
        <div className={styles.service_col}>
          <h5><b>Services</b><hr className='separator w-50' /></h5>
          <a id={styles["link"]} onClick={() => redirect("")}>Paradox</a>
          <a id={styles["link"]} onClick={() => redirect("Download")}>Download</a>
          <a id={styles["link"]} onClick={() => redirect("Pricing")}>Pricing</a>
        </div>
        <div className={styles.info_col}>
          <h5><b>Information</b><hr className={styles.separator + ' w-50'} /></h5>
          <a id={styles["link"]} onClick={() => redirect("QuickGuide")}>Getting started</a>
          <a id={styles["link"]} onClick={() => redirect("Feature")}>Features</a>
          <a id={styles["link"]} onClick={() => redirect("NewFeatures")}>New Features</a>
          <a id={styles["link"]} onClick={() => redirect("Studentplan")}>Student Plan</a>
        </div>
        <div className={styles.company_col}>
          <h5><b>Company</b><hr className='separator w-50' /></h5>
          <a id={styles["link"]} onClick={() => redirect("Career")}>Career</a>
          <a id={styles["link"]} onClick={() => redirect("About")}>About Us</a>
          <a id={styles["link"]} onClick={() => redirect("Privacy")}>Privacy Policy</a>
          <a id={styles["link"]} onClick={() => redirect("Terms")}>Terms & Condition</a>
          <a id={styles["link"]} onClick={() => redirect("Podcast")} >Podcast</a>
        </div>
        <div className={styles.follow_col}>
          <h5><b>Follow Us</b><hr className='separator w-25' /></h5>
          <div className={styles.icons_cont}>
            <div className={styles.icons_cont_child} onClick={() => window.location.assign("https://www.facebook.com/people/Prince-Lab/100070712031228/")}>
              <img className={'img-fluid ' + styles.icon} src={"/assets/fb.png"} />
            </div>
            <div className={styles.icons_cont_child} onClick={() => window.location.assign("https://twitter.com/Princelab2")}>
              <img className={'img-fluid ' + styles.icon} src={"/assets/twitter.png"} />
            </div>
            <div className={styles.icons_cont_child} onClick={() => window.location.assign("https://www.instagram.com/_princelab_/")}>
              <img className={'img-fluid ' + styles.icon} src={"/assets/insta.png"} />
            </div>
            <div className={styles.icons_cont_child} onClick={() => window.location.assign("https://www.linkedin.com/in/prince-lab-3398a7217?originalSubdomain=np")}>
              <img className={'img-fluid ' + styles.icon} src={"/assets/linked.png"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
