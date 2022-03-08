import React, {useState, useEffect} from "react";
import '../Payment/index.css';
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import axios from "axios";
import $ from "jquery";

const Index = () => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState("");

    // 2️⃣ Store reference to Stripe
    const stripe = useStripe();
    const elements = useElements();

    //fetched the secret key from server
    useEffect(() => {
        //auto scroll to the top when page rendered
        $(window).scrollTop({top:0, behavior:"smooth"})

        // 3️⃣ Create PaymentIntent and fetch client secret as soon as the page loads
        axios.post("https://testing-stripe-paradox.herokuapp.com/users/payment_intent/",
            {subscription: "business"} )
            .then(data => {
                setClientSecret(data.data.secret)
                console.log(data.data.secret)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);


    //track the card issues
    const handleChange = async (event) => {
        // 4️⃣ Listen for changes in the CardElement and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
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

    // 6️⃣ Construct UI.
    return (<form id="payment-form" onSubmit={handleSubmit}>
            <div className={"payment_content"}>
                <h5>Checkout page</h5><br/><br/>
                <CardElement
                    id="card-element"
                    options={{}}
                    onChange={handleChange}
                /><br/>
                <button className={"btn btn-info px-5 py-1"} disabled={processing || disabled || succeeded} id="submit">
                <span id="button-text">
                    {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
                </span>
                </button>
                <br/>

                {/* Show any error that happens when processing the payment */}
                {error && (<div className="card-error text-danger" role="alert">{error}</div>)}
                {/* Show a success message upon completion */}

                <p>{succeeded ? "Payment successfull" : ""}</p>
            </div>
        </form>);
}

export default Index;