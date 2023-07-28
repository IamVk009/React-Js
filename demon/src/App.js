import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Course from './Components/Course';

function App() {

  const notify = () => {toast.success('Wow So Easy!', {
    position: 'top-center',
    autoClose: '2000',
    closeOnClick: 'true',
    pauseOnhover: 'true',
    draggable: 'true',
  })};

  return (
    <div>
      <div style={{margin: 20}}>
        <Button color="success" outline size="lg" onClick={notify}>Click Me</Button>
      </div>
      <ToastContainer/>
      {/* <Header name="Header 1" title="Card 1" />
      <hr/>
      <Header name="Header 2" title="Card 2" />
      <hr/>
      <Header name="Header 3" title="Card 3" />
      <hr/>
      <h1>This is App component</h1>
      <hr/>
      <Footer /> */}
      <Course />
    </div>
  );
}

export default App;
