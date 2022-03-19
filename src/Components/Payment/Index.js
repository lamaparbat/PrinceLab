import React, { useState, useEffect } from "react";
import '../Payment/index.css';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import $ from "jquery";
import CheckIcon from '@mui/icons-material/Check';

const Index = () => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState("");

    //professional features
    const list2 = ["Support For Python3 Programming", "Able to make flutter app", "AI model integration", "Application development", "Technical support", "New updates"];


    // 2️⃣ Store reference to Stripe
    const stripe = useStripe();
    const elements = useElements();

    //fetched the secret key from server
    useEffect(() => {
        //auto scroll to the top when page rendered
        $(window).scrollTop({ top: 0, behavior: "smooth" })

        // 3️⃣ Create PaymentIntent and fetch client secret as soon as the page loads
        axios.post("https://testing-stripe-paradox.herokuapp.com/users/payment_intent/",
            { subscription: "business" })
            .then(data => {
                setClientSecret(data.data.secret)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);


    //track the card issues
    const handleChange = async (e) => (event) => {
        event.preventDefault()
        // 4️⃣ Listen for changes in the CardElement and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };

    // on pay btn clicked
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setProcessing(true);
        // 5️⃣ Confirm Card Payment.
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });
        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
        }
    };

    //custom PaymentDetails component
    const PaymentDetails = () => {
        const FeatureList = () => {
            return (
                <div className='feature_list'>
                    {
                        list2.map((item, index) => {
                            return (
                                
                                    <div id='li' key={index + 1}>
                                        <CheckIcon key={index + 2} id='icon' className={"bg-primary"} />
                                        <p className='mx-3' key={index + 3}>{item}</p>
                                    </div>
                            
                            )
                        })
                    }

                </div>
            )
        }
        return (
            <div className="PaymentDetails py-4">
                <h1 id="price">$5
                    <span id="month_span"> /monthly</span>
                </h1>
                <p className="mb-4">Available for both individual and teams </p>
                <div className="divider"></div><br />
                <FeatureList />
            </div>
        )
    }

    //custom payment form
    const PaymentForm = () => {
        return (
            <div className={"payment_content"}>
                <span className={"my-3 payment_content_title"}>Credit card/Debit Card</span>
                <br /><br /><br/>
                <div className="w-100 px-3 py-1 full_name_input">
                    <span className="text-secondary">Full Name</span>
                    <input type="email" className="form-control shadow-none" id="email" />
                </div>
                <br />
                <CardElement
                    id="card-element"
                    options={{}}
                    onChange={handleChange}
                /><br />
                <br />
                <button className={"btn btn-warning w-100 px-5 py-2"} disabled={processing || disabled || succeeded} id="submit">
                    <span id="button-text">
                        {processing ? <div className="spinner" id="spinner"></div> : "Pay Now"}
                    </span>
                </button>
                <br />
                {error && (<div className="card-error text-danger" role="alert">{error}</div>)}
                <p>{succeeded ? "Payment successfull" : ""}</p>
            </div>
        )
    }

    // 6️⃣ Construct UI.
    return (
        <form id="payment-form" onSubmit={handleSubmit}>
           
            <h1 className="text-center">
                <span className="py-0" id="main_title1">Professional</span>
                <span id="main_title2"> subscription</span>
            </h1>
            <div className="payment_row">
                <PaymentDetails />
                <PaymentForm />
            </div>
        </form>
    );
}

export default Index;