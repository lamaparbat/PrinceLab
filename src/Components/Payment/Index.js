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

    //list of features
    const [version_list, setVersionList] = useState([
        "Nepal",
        "India",
        "China",
        "USA",
        "UK",
        "Canada",
        "Germany",
        "Russia",
        "Ukraine",
        "Bangladesh",
        "Japan",
        "Korea"
    ]);
    const [country, setCountry] = useState("");

    // 2️⃣ Store reference to Stripe
    const stripe = useStripe();
    const elements = useElements();

    //fetched the secret key from server
    useEffect(() => {
        //auto scroll to the top when page rendered
        $(window).scrollTop({top: 0, behavior: "smooth"})

        // 3️⃣ Create PaymentIntent and fetch client secret as soon as the page loads
        axios.post("https://testing-stripe-paradox.herokuapp.com/users/payment_intent/",
            {subscription: "business"})
            .then(data => {
                setClientSecret(data.data.secret)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);


    //track the card issues
    const handleChange = async (e) =>  (event) =>{
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
        return (
            <div className="PaymentDetails py-3">
                <h4 id="product_title"><b>Pricing</b></h4><br/>
                <span id="sub_type" className="text-secondary">
                    <b>Subscription type:</b> Professional
                </span>
                <h1 className={"font-weight-bolder"}>$10.00 /-</h1><br/>
                <img
                    height={200}
                    src={process.env.PUBLIC_URL+"/assets/premium.jpeg"}
                    id="product_image"
                /><br/><br/><br/><br/>
                <span className="text-secondary footer_span">
                    Payment by
                    <b className="text-secondary footer_span"> Stripe </b>
                    &nbsp; &copy;  &nbsp;
                    || &nbsp; princelab.org
                </span>
            </div>
        )
    }

    //custom dropdown button
    const DropdownBtn = ({id, data}) => {
        // update the current item selection
        const selectCountry = (item) => {
            setCountry(item);
        }

        return (
            <div className="dropdown mr-2 w-100">
                <button className="btn px-4 rounded-4 text-secondary dropdown-toggle shadow-none" type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {
                        id === "platform"
                    }
                    {
                        country != "" ? country : "Choose country"
                    }
                </button>
                <div className="dropdown-menu text-primary" aria-labelledby="dropdownMenuButton">
                    {
                        data.map((item, index) => {
                            return (
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    key={index}
                                    onClick={() => selectCountry(item)}
                                >{item}</a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    //custom payment form
    const PaymentForm = () => {
        return (
            <div className={"payment_content"}>
                <div className="w-100">
                    <h4 className={"font-weight-bolder my-3"}>Paradox Checkout</h4><br/>
                    <span className="text-secondary">Email</span>
                    <input type="email" className="form-control shadow-none" id="email"/>
                </div>
                <br/>
                <CardElement
                    id="card-element"
                    options={{}}
                    onChange={handleChange}
                /><br/>
                <div className="w-100 py-2">
                    <DropdownBtn
                        id="platform"
                        data={version_list}
                    />
                </div>
                <br/>
                <button className={"btn btn-warning w-100 px-5 py-1"} disabled={processing || disabled || succeeded} id="submit">
                <span id="button-text">
                    {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
                </span>
                </button>
                <br/>
                {error && (<div className="card-error text-danger" role="alert">{error}</div>)}
                <p>{succeeded ? "Payment successfull" : ""}</p>
            </div>
        )
    }

    // 6️⃣ Construct UI.
    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <div className="payment_row">
                <PaymentDetails/>
                <PaymentForm/>
            </div>
        </form>
    );
}

export default Index;