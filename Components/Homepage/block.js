import styles from '../../styles/block.module.css'

const Block = () => {
 return (
  <div className={"container-fluid py-5 "+styles.block_container}>
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
 )
}

export default Block
