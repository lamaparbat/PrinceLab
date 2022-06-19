import styles from '../../styles/Homepage/download.module.css';

function Index() {
 //creating instance of useNavigate


 return (
  <div className={'container-fluid ' + styles.Download}>
   <div className={"mt-3 " + styles.rows}>
    <div className={'mb-4 ' + styles.title}>
     <h1><b>Downloads</b></h1>
     <img
      className={styles.input_icon}
      src={"/assets/download.svg"}
      loading='lazy'
     />
    </div>
    <p className={'mb-4 ' + styles.para}>Download the latest versions of our software for the available software.
     More operating systems will be added soon.</p>
    <div className={'d-flex mb-5 ' + styles.main_img_container}>
     <div className={styles.img_container}>
      <img
       src={ "/assets/mac.png"}
       loading='lazy'
       className={styles.img}
      />
     </div>
     <div className='img_container'>
      <img
       src={ "/assets/windows.svg"}
       id={styles["win_icon"]}
       className={styles.img}
       loading='lazy'
      /></div>
    </div>
    <button
     className={'text-light ' + styles.btn}
     onClick={() => navigate("/Download")}
    >Download</button><br />
   </div>
  </div>
 )
}

export default Index
