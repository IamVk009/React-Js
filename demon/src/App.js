//import logo from "./logo.svg";
import "./App.css";
//import Header from "./Components/Header";
//import Footer from "./Components/Footer";
import { Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Course from "./Components/Course";
import Courses from "./Components/Courses";

function App() {
  const notify = () => {
    toast.success("Wow So Easy!", {
      position: "top-center",
      autoClose: "2000",
      closeOnClick: "true",
      pauseOnhover: "true",
      draggable: "true",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ margin: 20 }}>
        <Button color="success" outline size="lg" onClick={notify}>
          Click Me
        </Button>
      </div>
      <ToastContainer />
      {/* <Header name="Header 1" title="Card 1" />
      <hr/>
      <Header name="Header 2" title="Card 2" />
      <hr/>
      <Header name="Header 3" title="Card 3" />
      <hr/>
      <h1>This is App component</h1>
      <hr/>
      <Footer /> */}
      {/* <Course course={{name:"ReactJS", title:"Course", src:"https://repository-images.githubusercontent.com/410214337/070f2aba-d9d6-4699-b887-9a0f29015b1b"}}/> */}
      <Courses />
    </div>
  );
}

export default App;
