import React from 'react';
import styles from '../../../../styles/AiStore/Store/Help/index.module.css';

function index({title, sub_title, img1, img2, card_title, para}) {
 return (
  <div className={'container py-3 ' + styles.store_help}>
   <h4>{title}</h4>
   <p>{sub_title}</p>
   <div className={styles.store_help_block+' py-2'}>

    {/* col1 */}
    <img
     className={styles.store_help_block_img}
     src={img1} />

    {/* col2 */}
    <div className={styles.store_help_block_card}>
     {/* col1 */}
     <img
      className={styles.store_help_block_card_img}
      src={img2} />
     {/* col2 */}
     <div className={styles.store_help_block_card_header_title}>
      <h4 className='px-3'>{card_title}</h4>
      <div className={styles.store_help_block_card_header_title_subtitle}>
       <span>Princelab, Inc.</span>
       <button className='btn btn-primary py-0 h6'>Learn now</button>
      </div><hr />
      <span>{para}</span>
     </div>
    </div>
   </div>
  </div>
 )
}

export default index