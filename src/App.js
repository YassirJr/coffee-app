import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/layouts/Navbar";
import About from "./components/About";
import Made from "./components/Made";
import axios from "axios"
import { useEffect } from "react";
import { http } from "./api/http";
function App() {
  const getData = () => {
    http.get('products').then(res => console.log(res))
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <About />
      <Made />
    </div>
  );
}

export default App;
