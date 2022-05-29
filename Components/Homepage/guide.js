import styles from '../../styles/guide.module.css';

function Index() {
  //create instance of useNavigate


  return (
    <div className={'container-fluid ' + styles.guide}>
      <div className={"mt-3 " + styles.guide_rows}>
        <div className={styles.title}>
          <img
            className={styles.input_icon}
            src={"/assets/input.svg"}
            loading='lazy'
          />
          <h1><b>Quick Guide</b></h1>
          <img
            className={styles.output_icon}
            src={ "/assets/output.svg"}
            loading='lazy'
          />
        </div>
        <p className={'mb-4 ' + styles.para}>To learn how to use paradox, we have some quick guide for you to get started.
          And for more advanced and developer focused guides we have provided
          some sample videos and documentation.<br /><br />
          Learn how to use the software and take the advantage of
          the powerful parallel computing. </p>
        <button
          className={'mt-2 text-light disabled ' + styles.btn}
          style={{ cursor: "unset" }}
        // onClick={() => navigate("/QuickGuide")}
        >Get started</button>
      </div>
    </div>
  )
}

export default Index
