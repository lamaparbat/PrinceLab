import React from 'react'
import MetaTags from 'react-meta-tags';
import '../StudentPlan/index.css';

function index() {
  //custom row1 component
 const Row1 = () => {
  return (
   <div className='row1 p-4'>
    <img className='img-fluid' src={process.env.PUBLIC_URL + "/assets/work.svg"} />
    <h2>The best tool for the</h2>
    <h2 className='text-danger'>Brightest</h2>
    <p>Get paradox premium subscription for free. Just
     verify yourself as a student and you’re all set.</p>
   </div>
  )
 }
 
 //custom row2 component
 const Row2 = () => {
  return (
   <div className='row2'>
    <h1 id='row2_title'>Stu<font className="text-light">dent</font></h1>
    <h1 id='row2_sub_title'>Plan</h1>
    <h1 id='row2_years'>
     <font className="text-light" id="t">T</font>
     <font id="num">2</font>
     <font className="text-light" id="years"> Years</font>
    </h1><br/>
    <button className='btn border-1 border-dark rounded-0 px-5 apply_btn'>Apply</button>
   </div>
  )
 }
 
  return (
    <div className='container-fluid studentPlan'>
      <MetaTags>
        <title>Princelab / Student Plans</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='description'
          content='Prince Lab is more than our paradox software. Princelab was always about developing new innovation for the future.'
          key="desc" />
        <meta name='keywords' content='Prince,programming,paradox,princelab' />
        <meta name="author" content="Prince kumar singh" />
      </MetaTags>
    <div className='row_container'>
     <Row1 />
     <Row2 />
    </div>
    </div>
  )
}

export default index
