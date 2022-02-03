import React from 'react';
import '../cards/index.css';

// card1
const Card1 = () => {
 return (
  <>
   <div className='card1'>
    <img
     src={process.env.PUBLIC_URL + "/assets/rpl.png"}
    />
    <h5 className='my-4'>Create / Rename / Delete</h5>
    <button className='px-5 py-2'>Scripts</button>
   </div>
 </>)
}

// card1
const Card2 = () => {
 return (
  <>
   <div className='card2'>
    <img
     src={process.env.PUBLIC_URL + "/assets/python.png"}
    />
    <h5 className='mt-5'>Python Function Inbuilt</h5>
   </div>
  </>)
}

function index() {
  return (
    <div className='container cards_container py-4 my-2'>
    <Card1 />
    <Card2 />
    </div>
  )
}

export default index
