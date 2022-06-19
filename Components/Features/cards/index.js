import React from 'react';
import styles from '../../../styles/Features/cards/index.module.css';

// card1
const Card1 = () => {
 return (
  <>
     <div className={styles.card1}>
    <img
     src={"/assets/rpl.png"}
    />
    <h5 className='my-4'>Create / Rename / Delete</h5>
    <button className='px-5 py-2'>Scripts</button>
   </div>
 </>)
}

// card1
const Card2 = () => {
 return (
  <>
     <div className={styles.card2}>
    <img
     src={ "/assets/python.png"}
    />
    <h5 className='mt-5'>Python Function Inbuilt</h5>
   </div>
  </>)
}

function index() {
  return (
    <div className={'container py-4 my-2 '+ styles.cards_container}>
    <Card1 />
    <Card2 />
    </div>
  )
}

export default index
