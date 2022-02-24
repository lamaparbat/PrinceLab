import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import '../ForgetPassword/index.css';
import $ from 'jquery';

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
    const [isResetPasswordVisible, setResetPasswordCardVisible] = useState(false);

    //reset code
    const [code, setCode] = useState({
        code1:"",
        code2:"",
        code3:"",
        code4:""
    })

    //fetched the cache data
    useEffect(() => {
        setTheme({mode:localStorage.getItem("theme")});
    }, [theme_state]);

    //track the reset code
    useEffect(() => {
        if(code.code1 === "" && code.code2 === "" && code.code3 === "" && code.code4 === ""){
            $("#code1").focus()
        }else if(code.code1 != "" && code.code2 === "" && code.code3 === "" && code.code4 === ""){
            $("#code2").focus()
        }else if(code.code1 != "" && code.code2 != "" && code.code3 === "" && code.code4 === ""){
            $("#code3").focus()
        }else if(code.code1 != "" && code.code2 != "" && code.code3 != "" && code.code4 === ""){
            $("#code4").focus()
        }

        //render s
        if(code.code1 != "" && code.code2 != "" && code.code3 != "" && code.code4 != "") {
            setResetPasswordCardVisible(true)
            setMobileCardVisible(false);
        }else{
            setResetPasswordCardVisible(false);
        }
    }, [code.code1, code.code2, code.code3, code.code4])

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
                    <input
                        type={"number"}
                        className={"p-1"}
                        id="code1"
                           value={code.code1}
                           onChange={(e) =>setCode({
                               ...code,
                               code1:e.target.value
                           })} />
                    <input
                        type={"number"}
                        className={"p-1"}
                        id="code2"
                           value={code.code2}
                           onChange={(e) =>setCode({
                               ...code,
                               code2:e.target.value
                           })} />

                    <input
                        type={"number"}
                        className={"p-1"}
                        id="code3"
                           value={code.code3}
                           onChange={(e) =>setCode({
                               ...code,
                               code3:e.target.value
                           })} />

                    <input
                        type={"number"}
                        className={"p-1"}
                        id="code4"
                           value={code.code4}
                           onChange={(e) =>setCode({
                               ...code,
                               code4:e.target.value
                           })} />

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
                    <input type="email" className={"form-control rounded-3"} required/><br />
                    <button className={"btn rounded-pill w-100 send_btn"}>Send</button>
                </center>
            </div>
        )
    }


    //reset password component
    const ResetPasswordForm = () => {
        return(
            <div className={"emailVerifyCard"}>
                <center>
                    <img
                        id={"mail"}
                        className={"img-fluid"}
                        src={(theme.mode != "dark") ? process.env.PUBLIC_URL+"/assets/mobile.png" :
                            process.env.PUBLIC_URL+"/assets/mobile2.png"}
                    /><br/><br /><br/>
                    <h5>Create your new password</h5><br/>
                   <div className={"text-start"}>
                       <span>New password</span>
                       <input id={"new_password"} className={"form-control border-0"} type={"password"} />
                   </div><br/>
                    <div className={"text-start"}>
                        <span>Reenter password</span>
                        <input  id={"new_password"} className={"form-control border-0"} type={"password"} />
                    </div>

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
                   {
                       isResetPasswordVisible ? <ResetPasswordForm /> : null
                   }
               </div>
           </div>
        </div>
    )
}

export default Index;