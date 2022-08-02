import './App.css';
import Gallery from "../src/components/Gallery/Gallery";
import Story from '../src/components/story/Story';
import Footer from '../src/components/Footer/Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <div className='page-container'>
          <div className='column'>
            <Gallery/>
          </div>
          <div className='column'>
            <Story/>
          </div>
        </div>
        <div>
          <Footer className='footer'/>
        </div>

      {/* </header> */}
    </div>
  );
}

export default App;
