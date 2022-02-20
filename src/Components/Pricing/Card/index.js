import React from 'react';
import './index.css';
import CheckIcon from '@mui/icons-material/Check';

function index(props) {
  return (
    <>
      <div className='business py-5 mx-4 my-4'>
        <center>
          <button className={'btn top_btn px-5 rounded-1 bg-' + props.bg}>{props.top_btn}</button>
        </center>
        <div className='business_content'>
          <h1 id='price'>{props.price} <span id='month_name'>/monthly</span></h1>
          <p>{props.title}</p>
          <div className='separator mt-1 mb-4'></div>
          <div className='feature_list'>

            {
              props.list.map((item, index) => {
                return (
                  <>
                    <div id='li' key={index+1}>
                      <CheckIcon key={index+2}  id='icon' className={'bg-' + props.bg} />
                      <p className='mx-3' key={index+3}>{item}</p>
                    </div>
                  </>
                )
              })
            }

          </div>
        </div>
        <center>
          <button className={'btn px-5 rounded-1 bg-' + props.bg}>{props.bottom_btn}</button>
        </center><br/>
      </div>
    </>);
}

export default index;
