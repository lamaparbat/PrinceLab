import React from 'react';
import { useRouter } from "next/router";
import styles from '../../styles/Homepage/premium.module.css';

function Index() {
 //creating instance of useNavigate
 const navigate = useRouter();

 return (
  <div className={'container my-4 '+ styles.premium}>
   <div className={styles.premium_row+" text-light"}>
    <div className={styles.body}>
     <div className='text-content my-4'>
      <h4>Try paradox for premium</h4>
      <span className={"text-light fw-light"}>Get started using paradox with a 30-day free trail <br />
       Join our developer team to get the latest news and updates</span><br /><br />
      <a
       className='btn btn-dark py-1 w-50 px-5 rounded-pill'
       onClick={() => navigate.push("/Pricing")}
      >Try it</a>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Index
