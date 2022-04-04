import React, {useRef, useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {db} from "../../firebaseDB";
import { toast, ToastContainer } from "react-toastify";
import $ from 'jquery';

const Index = () => {
    //loading state
    const [isLoading, setLoading] = useState(false);
    
    //disabled the button if loading
    useEffect(() => {
        isLoading ? $(".reset_btn").prop("disabled", true) : $(".reset_btn").prop("disabled", false)
    }, [isLoading])
    
    //create instance of useNavigate hooks
    const navigate = useNavigate()

    //custom form styling
    const styles = {
        height: "fit-content",
        width: "350px",
        backgroundColor: "whitesmoke"
    }

    //form data
    const email = useRef();
    const password = useRef();

    //reset handling
    const reset = () => {
        if (password.current.value !== "") {
            setLoading(true)
            //db update
            db.ref(`/users`).on('value', snapshot => {
                snapshot.forEach((user) => {
                    if (user.val().email === email.current.value) {
                        const docKey = user.key
                        const userData = {
                            username:user.val().username,
                            email: user.val().email,
                            password: password.current.value,
                            profile: user.val().profile
                        }
                        //save the user data in db
                        const db_apis = `https://paradoxauth-56b93-default-rtdb.asia-southeast1.firebasedatabase.app//users/${docKey}.json`;
                        axios.put(db_apis,userData)
                            .then(res => {
                                setTimeout(() => {
                                    setLoading(false)
                                    toast.success("Password successfully reset.")
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
            toast.error("Please fill the field !")
        }
    }

    return (
        <div className={"container-fluid d-flex justify-content-center py-5"}>
            <div className="formCont p-5" style={styles}>
                <span>Enter registered email ID</span>
                <input
                    className={"form-control"}
                    type={"email"}
                    ref={email}
                    required
                /><br />
                <span>Enter new password</span>
                <input
                    className={"form-control"}
                    type={"password"}
                    ref={password}
                    required
                /><br/>
                <center>
                    <button
                        className={"btn px-5 reset_btn text-light "}
                        onClick={reset}
                    >
                        { 
                            isLoading ? "Reseting..." : "Reset"
                        }
                    </button>
                </center>
            </div>
            <ToastContainer autoClose={1000} position="top-center" />
        </div>
    )
}

export default Index;