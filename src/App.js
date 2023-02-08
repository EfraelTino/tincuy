import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import NavComponent from "./components/NavComponent";
import About from "./container/About";
import Home from "./container/Home";
import Product from "./container/Product";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavComponent/>
      <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/product' element={<Product/>}/>
      <Route exact path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
