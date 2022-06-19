import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/StudentPlan/index.module.css';

function index() {
  // instance of useNavigate hooks for pushing routes
  const navigate = useRouter();
  
  //custom row1 component
 const Row1 = () => {
  return (
    <div className={styles.row1+' p-4'}>
    <img className='img-fluid' src={"/assets/work.svg"} />
    <h2>The best tool for the</h2>
    <h2 className='text-danger'>Brightest</h2>
    <p>Get paradox premium subscription for free. Just
     verify yourself as a student and you’re all set.</p>
   </div>
  )
 }
 
  //redirect to student registration form
  const apply = () => {
    navigate.push("/Studentregistrationform")
  }
  
 //custom row2 component
 const Row2 = () => {
  return (
    <div className={styles.row2}>
      <h1 id={styles["row2_title"]}>Stu<font className="text-light">dent</font></h1>
      <h1 id={styles["row2_sub_title"]}>Plan</h1>
      <h1 id={styles["row2_years"]}>
     <font className="text-light" id="t">T</font>
        <font id={styles["num"]}>2</font>
        <font className="text-light" id={styles["years"]}> Years</font>
    </h1><br/>
      <button className={'btn border-1 border-dark rounded-0 px-5 '+styles.apply_btn} onClick={apply}>Apply</button>
   </div>
  )
 }
 
  return (
    <div className={styles.studentPlan + " container-fluid"}>
      <Head>
        <title>Princelab/ Student Plan</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name='description'
          content='Languages we ought to simplify.Simplest Environment.Make your work More easier.To learn how to use paradox, we have some quick guide for you to get started.Princelab Prncelab
Princlab Pincelab Princela Pricelab Princelav Princlab Pincelab Prncelab Princelab website 
Prince singh of princelab Ceo of princelab About princelab Paradox  Pardox Princelab paradox  What is paradox  Paradox price Paradox subscription Princelab login
Princelab signup Princelab features  Princelab career Princelab job Princelab requirements  Princelab application Princelab student pricing  Princelab vision'
          key="desc"
        />
        <meta
          name='keywords'
          content='Languages, Environment, Premium, Downloads,Quickguide, Service, Follow, Company, Information,Princelab
,Prncelab,Princlab,Pincelab,Princela,Pricelab,Princelav
,Princlab
,Pincelab
,Prncelab
,Princelab,
website 
,Prince
,singh
,Ceo
,About 
,Paradox 
,Pardox
,pricing
,subscription 
,login
,signup
,features 
,career
,job
,Princelab ,vision,
IT,Company, Student , Plan, Latest, Features'
        />
        <meta name="author" content="Prince kumar singh" />
      </Head>
      <div className={styles.row_container}>
     <Row1 />
     <Row2 />
    </div>
    </div>
  )
}

export default index
