import React, {useState} from 'react';
import '../ForgetPassword/index.css';

const Index = () => {
    //custom card box
    const Card = ({id, url, title, span}) => {
        return(
            <div className={"card1"}>
                <img
                    id={id}
                    className={"img-fluid"}
                    src={url}
                />
                <div className={"card_content"}>
                    <h6>{title}</h6>
                    <h5>{span}</h5>
                </div>
            </div>
        )
    }
    return (
        <div className="container-fluid py-3 forget_cont">
           <div className={"forget_cont_row"}>
               <img
                   src={process.env.PUBLIC_URL + "/assets/moon1.png"}/>
               <div className="box">
                   <div className={"box_title"}>
                       <h1 className={"text-primary"}>Forget password ?</h1>
                       <p>Please select one of the contact methods
                    to reset your password. </p>
                   </div><br/>
                   <Card
                       id={"sms"}
                       url={process.env.PUBLIC_URL+"/assets/mobile.png"}
                       title={"Send via SMS:"}
                       span={".......431"}
                   /><br/>
                   <Card
                       id={"mail"}
                       url={process.env.PUBLIC_URL+"/assets/mail.png"}
                       title={"Send via E-mail:"}
                       span={".......ek@gmail.com"}
                   /><br/>
               </div>
           </div>
        </div>
    )
}

export default Index;