import styles from '../../styles/Homepage/block.module.css'

const Block = () => {
 return (
  <div className={'container '+ styles.card_container}>
   <div className={styles.row}>
    <img
     src={"/assets/block_img1.svg"}
     loading='lazy'
     id={styles["img"]}
    />
    <img
     src={"/assets/block_img2.svg"}
     loading='lazy'
     id={styles["img"]}
    />
   </div>
  </div>
 )
}

export default Block
