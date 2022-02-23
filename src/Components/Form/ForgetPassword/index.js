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

    useEffect(() => {
        setTheme({mode:localStorage.getItem("theme")});
    }, [theme_state])


    //custom card box
    const Card = ({id, url, title, span}) => {
        console.log(url)
        return(
            <div className={"card1"}>
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


    return (
        <div className="container-fluid py-5 forget_cont">
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
               </div>
           </div>
        </div>
    )
}

export default Index;