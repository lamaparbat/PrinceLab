import React, {useState} from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Index = () => {
    //product details
    const [product, setProductDetails] = useState({
        name:"Business",
        price:1250,
        customer_name:"Hari"
    })

    //token
    const onToken = (token) => {
        const body = {
            token,
            product
        }

        const header = {
            "Content-Type":"application/json"
        }

        //pushing data to server
        axios.post("http://localhost:8000/payment", body)
            .then(res => {
                console.log(res)
            })
            .catch(err =>  console.log(err))
    }

    return(
        <div className={"container text-center py-5"}>
            <StripeCheckout
                stripeKey={process.env.REACT_APP_KEY}
                token={onToken}
                name={product.name}
                currency ="USD"
                amount= {product.price}
                allowRememberMe={true}
            >
                <button
                    className={"btn btn-info rounded-0 px-5 text-light"}
                >Buy at ${product.price} </button>
            </StripeCheckout>
        </div>
    )
}

export default Index;