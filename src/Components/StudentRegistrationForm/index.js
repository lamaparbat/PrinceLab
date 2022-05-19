import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import '../StudentRegistrationForm/index.css';

//custom features list component
const List = ({ span }) => {
  return (
    <div className='mb-2' id='list'>
      <div className='roundedComponent mr-3'>
        <DoneIcon className='p-2 tickIcon' />
      </div>
      <span>{span}</span>
    </div>
  )
}


//registration description component
const DescriptionCard = () => {
  return (
    <div className='description_card'>
      <h1 id='description_card_para'>Free</h1>
      <span className='description_card_para mb-3'>Available for all the students for both individual
        and group work.</span>
      <div className='list_cont'>
        <List span="Support for python3 programming" />
        <List span="Able to make flutter app" />
        <List span="AI model integration" />
        <List span="Application development" />
        <List span="Application support" />
        <List span="New updates" />
      </div>
    </div>
  )
}


//registration form component
const FormCard = () => {
  return (
    <div className='form_card'>
      <h1 id='form_card_title'>Student Information</h1>
      <span className='ml-5'>Please use your university email to verify as a student</span>
      <br /><br />
      <div className='input_cont px-3 py-2'>
        <font>Full name</font>
        <input type="text" className='form-control shadow-none outline-none' placeholder='Parbat Lama' />
      </div><br/>
      <div className='input_cont px-3 py-2'>
        <font>Email address</font>
        <input type="email" className='form-control shadow-none outline-none' placeholder='abc@gmail.com' />
      </div><br/>
      <div className='input_cont px-3 py-2'>
        <font>Password</font>
        <input type="password" className='form-control shadow-none outline-none' placeholder='********' />
      </div><br/>
      <button className='btn btn-primary rounded-0 purchase_btn'>Purchase</button><br/>
    </div>
  )
}

function index() {
  return (
    <div className='container-fluid student_registration_form_cont'>
      <div className='row'>
        <DescriptionCard />
        <FormCard />
      </div>
    </div>
  )
}

export default index
