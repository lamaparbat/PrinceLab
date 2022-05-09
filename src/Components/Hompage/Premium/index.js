import React from 'react';
import {useNavigate} from "react-router-dom";
import '../Premium/index.css';

function Index() {
    //creating instance of useNavigate
    const navigate = useNavigate();

    return (
        <div className='container my-4 premium'>
            <div className="premium_row text-light">
                <div className='body'>
                    <div className='text-content my-4'>
                        <h4>Try paradox for premium</h4>
                        <span className={"text-light fw-light"}>Get started using paradox with a 30-day free trail <br/>
        Join our developer team to get the latest news and updates</span><br/><br/>
                        <a
                           className='btn btn-dark py-1 px-5'
                           onClick={() => navigate("/Pricing")}
                        >Try it</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
