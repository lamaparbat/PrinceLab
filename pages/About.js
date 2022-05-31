import React, {useEffect} from 'react';
import Cards from '../Components/About/Card';
import Intro from '../Components/About/Intro';
import Ceo from '../Components/About/Ceo';
import $ from "jquery";

function Index() {
    useEffect(()  => {
        $(window).scrollTop({top:0, behavior:"smooth"})
    }, [])
  return (
    <>
      <div className='container-fluid about'>
        <Intro />
        <Ceo />
        <Cards />
        
      </div>
    </>
  );
}

export default Index;
