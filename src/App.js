import Homepage from './Components/Hompage/index';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../src/Components/Navbar/index';

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />
      
      {/* video banner */}
      <Homepage />
    </div>
  );
}

export default App;
