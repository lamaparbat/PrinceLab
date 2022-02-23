import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import '../ForgetPassword/index.css';

const Index = () => {
    //creating instance of useSelecotr
    const theme_state = useSelector(state => state.changeTheme)

    //theme state
    const [theme, setTheme] = useState({mode: ""});
    const [url1, setUrl1] = useState("")
    const [url2, setUrl2] = useState("")
    
    //select reset password method
    const [isHomeCardVisible, setHomeCardVisible] = useState(true)
    const [isMobileCardVisible, setMobileCardVisible] = useState(false)
    const [isMailCardVisible, setMailCardVisible] = useState(false)

    useEffect(() => {
        setTheme({mode:localStorage.getItem("theme")});
    }, [theme_state])

    //open card function
    const openCard = (id) => {
        setHomeCardVisible(false);
        if(id != "mail"){
            setMobileCardVisible(true)
            setMailCardVisible(false);
        }else{
            setMobileCardVisible(false)
            setMailCardVisible(true);
        }
    }

    //custom card box
    const Card = ({id, url, title, span}) => {
        return(
            <div className={"card1"} onClick={() => openCard(id)}>
                <img
                    id={id}
                    className={"img-fluid"}
                    src={url}
                />
                <div className={"card_content"}>
                    <span className={"card1_title"}>{title}</span>
                    <h5>{span}</h5>
                </div>
            </div>
        )
    }

    //email verification card content
    const MobileVerifyCard = () => {
        return(
            <div className={"emailVerifyCard"}>
                <center>
                    <img
                        id={"mobile"}
                        className={"img-fluid"}
                        src={(theme.mode != "dark") ? process.env.PUBLIC_URL+"/assets/mobile.png" :
                            process.env.PUBLIC_URL+"/assets/mobile2.png"}
                    /><br/><br /><br/>
                    <h5>Enter the 4-digit recovery code</h5>
                    <p>The recovery code was sent to your provided phone number</p>
                </center>
                <div className={"digitContainer d-flex"}>
                    <input type={"number"} className={"p-1"} />
                    <input type={"number"} className={"p-1"} />
                    <input type={"number"} className={"p-1"} />
                    <input type={"number"} className={"p-1"} />
                </div>
            </div>
        )
    }

    //email verification card content
    const EmailVerifyCard = () => {
        return(
            <div className={"emailVerifyCard"}>
                <center>
                    <img
                        id={"mail"}
                        className={"img-fluid"}
                        src={(theme.mode != "dark") ? process.env.PUBLIC_URL+"/assets/mail.png" :
                            process.env.PUBLIC_URL+"/assets/mail2.png"}
                    /><br/><br /><br/>
                    <h5>Enter your email address</h5>
                    <p>The recovery code was sent to your email address</p><br/>
                    <input type="email" className={"form-control"} required/><br />
                    <button className={"btn btn-primary rounded-pill w-100"}>Send</button>
                </center>
            </div>
        )
    }


    return (
        <div className="container-fluid py-5 forget_cont">
           <div className={"forget_cont_row"}>
               <img
                   src={process.env.PUBLIC_URL + "/assets/moon1.png"}/>
               <div className="box py-5">
                   <div className={"box_title"}>
                       <h1 className={"text-primary"}>Forget password ?</h1>
                       <p>Please select one of the contact methods
                    to reset your password. </p>
                   </div>
                   {
                       isHomeCardVisible ? <>
                           <Card
                               id={"sms"}
                               url={(theme.mode != "dark") ? process.env.PUBLIC_URL+"/assets/mail.png" :
                                   process.env.PUBLIC_URL+"/assets/mail2.png" }
                               title={"Send via SMS:"}
                               span={".......431"}
                           /><br/>
                           <Card
                               id={"mail"}
                               url={(theme.mode != "dark") ? process.env.PUBLIC_URL+"/assets/mobile.png" :
                                   process.env.PUBLIC_URL+"/assets/mobile2.png" }
                               title={"Send via E-mail:"}
                               span={".......ek@gmail.com"}
                           /><br/>
                           <button
                               className={"btn btn-primary px-5 py-1 signin"}>Sigin</button>
                       </> : null
                   }
                   {
                        isMobileCardVisible ? <MobileVerifyCard />:null
                   }
                   {
                       isMailCardVisible ? <EmailVerifyCard />:null
                   }
               </div>
           </div>
        </div>
    )
}

export default Index;