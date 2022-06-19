import React,{useState, useEffect} from 'react';
import styles from '../../../styles/Features/parallel/index.module.css';

function index() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setTheme(localStorage.getItem("theme"))
  })
  return (
    <div className={'container p-5 '+ styles.parallel}>
    <img
     src={"/assets/parallel1.png"}
     className='img-fluid' loading='lazy' />
      <div className={'my-5 '+styles.roundedDiv}>
     <img
      src={theme !== "light" ? "/assets/parallel2.png" : "/assets/parallel4.png"}
      loading='lazy' />
        <div className={styles.content}>
          <h1 className={"text-center "+styles.parallel_title}>Parallel Computing</h1><br/>
      <center><button className='px-3 py-1'>Data Flow</button></center>
     </div>
     <img
         src={theme !== "light" ? "/assets/parallel3.png" : "/assets/parallel5.png"}
      className='img-fluid' loading='lazy' />
    </div>
    </div>
  )
}

export default index
