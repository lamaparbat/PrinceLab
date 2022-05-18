import React from 'react';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';

//custom features list component
const List = ({span}) => {
 return (
  <div id='list'>
   <CheckCircleSharpIcon />
   <span>{span}</span>
  </div>
)
}

function index() {
  return (
    <div className='student_registration_form_cont'>
    <div className='row'>
     <div className='description_card'>
      <h1>Free</h1>
      <span>Available for all the students for both individual
       and group work.</span><hr/>
      <List span="Support for python3 programming" />
     </div>
     <div className='form_card'></div>
    </div>
    </div>
  )
}

export default index
