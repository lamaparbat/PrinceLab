import React from 'react';
import styles from '../../../styles/Features/python3/index.module.css';

function index() {
  return (
    <div className={'container mb-3 '+ styles.python3}>
      <div className={styles.rows}>
     <h2><strong>Python3 by default</strong></h2>
     <p className='mt-2 mb-4'>Almost every python inbuilt functions are integrated in our editor.
      You can access instantly with right click on your mouse. </p>
     <img src={"/assets/python.png"} />
    </div>
    </div>
  )
}

export default index
