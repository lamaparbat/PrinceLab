import React from 'react';
import Head from 'next/head';
import DoneIcon from '@mui/icons-material/Done';
import styles from '../styles/StudentRegistrationForm/index.module.css';

//custom features list component
const List = ({ span }) => {
  return (
    <div className='mb-2' id={styles["list"]}>
      <div className={styles.roundedComponent + ' mr-3'}>
        <DoneIcon className={'p-2 '+styles.tickIcon} />
      </div>
      <span>{span}</span>
    </div>
  )
}


//registration description component
const DescriptionCard = () => {
  return (
    <div className={styles.description_card}>
      <h1 id={styles["description_card_para"]}>Free</h1>
      <span className={styles.description_card_para + ' mb-3'}>Available for all the students for both individual
        and group work.</span>
      <div className={styles.list_cont}>
        <List span="Support for python3 programming" />
        <List span="Able to make flutter app" />
        <List span="AI model integration" />
        <List span="Application development" />
        <List span="Application support" />
        <List span="New updates" />
      </div>
    </div>
  )
}


//registration form component
const FormCard = () => {
  return (
    <div className={styles.form_card}>
      <h1 id={styles["form_card_title"]}>Student Information</h1>
      <span className='ml-5'>Please use your university email to verify as a student</span>
      <br /><br />
      <div className={styles.input_cont + ' px-3 py-2'}>
        <font>Full name</font>
        <input type="text" className='form-control shadow-none outline-none' placeholder='Parbat Lama' />
      </div><br/>
      <div className={styles.input_cont+' px-3 py-2'}>
        <font>Email address</font>
        <input type="email" className='form-control shadow-none outline-none' placeholder='abc@gmail.com' />
      </div><br/>
      <div className={styles.input_cont + ' px-3 py-2'}>
        <font>Password</font>
        <input type="password" className='form-control shadow-none outline-none' placeholder='********' />
      </div><br/>
      <button className={'btn btn-primary rounded-0 '+styles.purchase_btn}>Purchase</button><br/>
    </div>
  )
}

function index() {
  return (
    <div className={'container-fluid ' + styles.student_registration_form_cont} >
      <Head>
        <title>Princelab/Registration</title>
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
IT,Company'
        />
        <meta name="author" content="Prince kumar singh" />
      </Head>
      <div className={styles.row}>
        <DescriptionCard />
        <FormCard />
      </div>
    </div>
  )
}

export default index
