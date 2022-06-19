import React from 'react';
import styles from '../../../styles/Career/CardRow.module.css';

function index() {
  const span1 = ["QT5 or similar SDK experience", "C++ coding skills", "Good design sense", "Game development experience a plus", "Ability to deliver on a quality experience"];
  const span2 = ["Fluent in Python / C / C++", "Experience with computer vision", "Experience with training models", "Knows things like SLAM, rotation matrices", "PyTorch, softmax, and ground truthing"];
  const span3 = ["Fluent in Python, Linux, Git and familiarity with C / C++", "Knows things about building hardware, RF, and PCB design", "Good design sense", "Game development experience a plus", "Ability to deliver on a quality experience"];
  const span4 = ["Fluent in Swift and Xcode", "Good design sense","Ability to deliver on a quality experience"]
  

  //custom dot component
  const Dot = () => {
    return (
      <div className={styles.dot+' mx-2'}></div>
    )
  }

  // custom card
  const Card = (props) => {
    return (
      <div className={styles.cardRow_card+' mb-3'} id={props.id}>
        <h3 className='my-3'>{props.title}</h3>
        <button className={'btn px-2 py-1 rounded-pill '+styles.sub_title}>{props.btn1}</button>
        <h5 className='mt-3'>{props.sub_title}</h5>
        <div className={'d-flex flex-column '+styles.card_features}>
          {
            props.span.map((item, index) => {
              return (
                <span id={styles["index"]} key={index}><Dot />{item}</span>
              )
            })
          }
        </div><br /><br />
        <button className={'btn rounded-pill py-2 '+styles.apply}>Apply Now</button><br />
      </div>
    )
  }

  return <div className={'container py-5 '+ styles.cardRow}>
    <img
      id={styles["wire"]}
      src={"/assets/wire1.png"} />
    <div className={styles.cardRow1}>
      <Card
        title="Software Engineer (Qt/UI)"
        btn1="Can you build a dropbox-like app people will use ? "
        sub_title="QUALIFICATION"
        span={span2}
        btn2="Apply Now"
        id={styles["cardRow_card1"]}
      />
      <Card
        title="ML engineer / Data Scientist"
        btn1="Able to think in context of Information theory/Math"
        sub_title="QUALIFICATION"
        span={span1}
        btn2="Apply Now"
        id={styles["cardRow_card2"]}
      />
    </div>
    <div className={styles.cardRow1}>
      <Card
        title="Electronic Engineer"
        btn1="Help us design and build an entirely new class of consumer electricity"
        sub_title="QUALIFICATION"
        span={span3}
        btn2="Apply Now"
        id={styles["cardRow_card3"]}
      />
      <Card
        title="IOS Developer"
        btn1="Able to make and refine for the smoothest experience"
        sub_title="QUALIFICATION"
        span={span4}
        btn2="Apply Now"
        id={styles["cardRow_card4"]}
      />
    </div>
  </div>;
}

export default index;
