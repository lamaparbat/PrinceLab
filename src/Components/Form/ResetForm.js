import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {db} from "../../firebaseDB";
import {toast, ToastContainer} from "react-toastify";

const Index = () => {
    //create instance of useNavigate hooks
    const navigate = useNavigate()

    //custom form styling
    const styles = {
        height: "fit-content",
        width: "350px",
        backgroundColor: "whitesmoke"
    }

    //cur user login data
    const [docKey, setDocKey] = useState("");

    //new password
    const password = useRef();

    //reset handling
    const reset = () => {
        if(password.current.value != ""){
            const email = JSON.parse(localStorage.getItem("reset_email")).email;

            //db update
            db.ref(`/users`).on('value', snapshot => {
                snapshot.forEach((user) => {
                    if (user.val().email === email) {
                        const docKey = user.key
                        const userData = {
                            username:user.val().username,
                            email: user.val().email,
                            password: password.current.value,
                            profile: user.val().profile
                        }

                        //save the user data in db
                        const db_apis = `https://princelab-f13cd-default-rtdb.firebaseio.com/users/${docKey}.json`;
                        axios.put(db_apis,userData)
                            .then(res => {
                                toast.success("Password successfully reset.")
                                setTimeout(() => {
                                    navigate("/Login");
                                },2000)
                            })
                            .catch(err => {
                                toast.error(err.message)
                            })
                    }
                })
            });
        }else{
            toast.error("Please enter password !")
        }
    }

    return (
        <div className={"container-fluid d-flex justify-content-center py-5"}>
            <div className="formCont p-5" style={styles}>
                <span>Enter new password</span>
                <input
                    className={"form-control"}
                    type={"password"}
                    ref={password}
                /><br/>
                <button
                    className={"btn px-5 reset_btn"}
                    onClick={reset}
                >Reset
                </button>
            </div>
            <ToastContainer autoClose={1000} position="top-center" />
        </div>
    )
}

export default Index;