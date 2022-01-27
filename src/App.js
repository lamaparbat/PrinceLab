import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/Fonts/Cupertino.ttf';
import Homepage from './Components/Hompage/index';
import Navbar from '../src/Components/Navbar/index';
import Footer from '../src/Components/Footer/index';

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />
      
      {/* video banner */}
      <Homepage />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
