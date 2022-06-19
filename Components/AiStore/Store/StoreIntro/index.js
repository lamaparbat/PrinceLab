import React from 'react';
import styles from '../../../../styles/AiStore/Store/StoreIntro/index.module.css';

function index() {
  return (
    <div className={'container-fluid '+ styles.storeIntro}>
    <img
     src={ "/assets/AOW.svg"} />
    <img
     src={"/assets/store_icon_collect1.svg"} />
   </div>
  )
}

export default index