import React,{useState} from 'react';
import '../HousePriceDetection/index.css';
import * as toxicity from '@tensorflow-models/toxicity';
import $ from 'jquery';

function Index() {
  // global state
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isToxic, setToxicity] = useState(false);
  const [predictedResult, setPredictedResult] = useState({
    toxicity_type: null,
    probabilities:0
  });
  
  // classify the text toxicity (Regression)
  const predictTextToxicity = async () => {
    let textInputVal = $("#rooms").val();
    if (textInputVal.length > 0) {
      //set loading state to true
      setLoading(true);
      
      //disabled the button
      document.querySelector(".HousePrediction #predict_btn").disabled = true;
      
      // Which toxicity labels to return.
      const labelsToInclude = ["identity_attack", "insult", "threat", "sexual_explicit", "obscene"];
      
      //model train & predict
      const model = await toxicity.load(0.5, labelsToInclude);
      const predictions = await model.classify([textInputVal]);
      if (predictions.length > 0) {
        //map the prediction array
        predictions.map(data => {
          if (data.results[0].match === true) {
            //converting probabilities into percentage
            const percentage = Math.round(parseFloat(data.results[0].probabilities[0]) * 100);

            //set the prediction result state
            setPredictedResult({
              toxicity_type: data.label,
              probabilities: percentage
            });
            
            setToxicity(true);
          }
        });
        
        // if toxicity not found, show this message to output
        if (isToxic === false) {
          //set the prediction result state
          setPredictedResult({
            toxicity_type: "No toxicity found.",
            probabilities: 0
          })
        }
        
        
        //set the loading state true
        setLoading(false);

        //enabled the predict button
        $(".HousePrediction #predict_btn").prop("disabled", false);
      } 
    } else {
      setErrorMessage("Input field is empty !")
    }
  }
  
 //custom features input
  const FeaturesInput = () => {
  return (
   <div className='features_input p-4 bg-dark'>
    <h5>Features</h5><br/>
    <div className='room_field'>
        <font>Enter text</font>
        <input type="text" className='form-control' id='rooms'/>
      </div><br/>
      <span className='text-danger'>{errorMessage ? errorMessage : null}</span>
      <button className='btn py-2 px-5 w-100' id='predict_btn' onClick={predictTextToxicity}>
        {
          isLoading ? "Processing......." : "Predict"
        }
      </button>
   </div>
  )
 }

 //custom output console
 const OutputConsole = () => {
  return (
   <div className='output_console_card'>
    <h6><b>Result</b></h6>
      <div className='result_box'>
        <span className='text-light' id="toxicity_type">Text Toxicity Type: {
          predictedResult.toxicity_type !== null ? predictedResult.toxicity_type : ""
        } </span><br />
        <span className='text-light' id="toxicity_percentage">Probability:  {
          predictedResult.toxicity_type !== null ? predictedResult.probabilities : ""
        }%</span>
      </div> 
   </div>
  )
 }

 return (
  <div className='HousePrediction px-4'>
     <FeaturesInput />
     <img className='mx-5 connector' src={process.env.PUBLIC_URL + "/assets/connector.png"} id='connector' alt='connector' width="150" />
   <OutputConsole />
  </div>
 )
}

export default Index;
