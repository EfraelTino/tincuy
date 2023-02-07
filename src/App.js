import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import About from "./container/About";
import Home from "./container/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavComponent/>
      <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
