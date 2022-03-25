const { render } = require("@testing-library/react")
import Homepage from '../src/Components/Hompage/index';
import { BrowserRouter, Routes } from 'react-router-dom';

test("Homepage", () => { 
  render(
    <BrowserRouter>
      <Routes> 
        <Homepage />        
      </Routes>
      </BrowserRouter>)
  screen.debug();
})