import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import '../ForgetPassword/index.css';

const Index = () => {
    //creating instance of useSelecotr
    const theme_state = useSelector(state => state.changeTheme)

    //theme state
    const [theme, setTheme] = useState({mode: ""});
    const [url, setUrl] = useState({
        url1:"",
        url2:""
    })

    //check theme on component rendered
    useEffect(() => {
        setTheme({mode:localStorage.getItem("theme")});
            theme.mode != "dark" ?
                setUrl({
                    url1: process.env.PUBLIC_URL+"/assets/mobile.png",
                    url2: process.env.PUBLIC_URL+"/assets/mail.png"
                }) : setUrl({
                    url1: process.env.PUBLIC_URL+"/assets/mobile2.png",
                    url2: process.env.PUBLIC_URL+"/assets/mail2.png"
                })
    }, [theme_state]);



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
                    <span className={"fw-light"}>{title}</span>
                    <h5>{span}</h5>
                </div>
            </div>
        )
    }

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
                       url={url.url1}
                       title={"Send via SMS:"}
                       span={".......431"}
                   /><br/>
                   <Card
                       id={"mail"}
                       url={url.url2}
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