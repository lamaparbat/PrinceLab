import styles from '../../../styles/Career/Front.module.css';

function Index() {
  return (
    <div className={styles.front}>
      <h1>
        <span id={styles["s"]}>S</span>truggle hard.<br />
        <span id={styles["tay"]}>tay paradox</span>
      </h1>
      <button className='px-4 py-2' id={styles["btn"]}>
        <span className={styles.printf}>printf</span>
        <span>
          ('create my <span className='text-primary'>world</span>')
        </span>
      </button><br />
      <img
        id={styles["front_img"]}
        src={"/assets/intro.svg"} />
    </div>
  )
}

export default Index
