import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import * as qna from '@tensorflow-models/qna';

function Index() {
  //state
  const [result, setResult] = useState("");
  const [isLoading, setLoading] = useState(false);
  const passage = useRef("")
  const question = useRef("")
  
  //find the answer
  const answerQuestion = async () => {
    if (passage.current.value != "" && question.current.value != "") {
      //init the loading
      setLoading(true);

      //load model
      const model = await qna.load();

      //findig answer
      const answers = await model.findAnswers(question.current.value, passage.current.value);


      //off the laoding 
      setLoading(false);

      //set the result on the output box
      setResult(answers);
    }
  }
  return (
    <div className='gestureDetection'>
      <h3 id='model_title'>Find answers of a question from the given context</h3><br />
      <textarea ref={passage} className='p-2 px-3' placeholder='Paste your story' id='qna_textarea' required></textarea><br />
      <input ref={question} className='p-2 px-3' placeholder='Paste your question' id='qna_question' required></input><br />
      <textarea className='p-2 pb-3 px-3 bg-light' id='qna_question' placeholder='Predicted result' disabled>{
        isLoading ? "Predicting......." : result
      }</textarea><br />
      <button className='btn btn-primary px-5 qna_btn' onClick={answerQuestion}>Predict answer</button>
    </div>
  )
}

export default Index;
