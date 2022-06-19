import styles from '../../styles/About/Intro.module.css';

// intro 
const Paragraph = (props) => {
 if (props.type == "heading") {
  return (
    <div className={styles.about_intro_para}>
    <h1 id={styles["h1"]}>{props.data}</h1>
   </div>
  );
 } else {
  return (
    <div className={styles.about_intro_para}>
    <p>{props.data}</p>
   </div>
  );
 }
}

function index() {
 return (
  <>
     <div className={'container-fluid '+styles.about_intro}>
    <Paragraph
     data="A new way of programming. Your logic is
    your program. No syntax, faster parallel way 
    of computing."
     type="heading" />
    <Paragraph data="Prince Lab is more than our paradox 
    software. Princelab was always about developing new 
    innovation for the future. We gaze for new innovation and 
    ideas that helps the daily life of every people. Today, 
    we are pushing the boundaries of how advance programming 
    can be done through blocks and connectors which would be 
    more easier to learn and create for developers and the
    average consumers.The place where we build the future. A 
    new step for the mankind in this Programming world."
     type="para" />
   </div>
  </>
 );
}

export default index;
