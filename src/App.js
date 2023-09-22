import './App.css';
import Navbar from './Components/Navbar';
import TextArea from "./Components/TaxtArea"

function App() {
  return (
    <>
      <Navbar title="Text Converter" about="About" />
      <TextArea heading="Enter Your Text" />
    </>
  );
}

export default App;
