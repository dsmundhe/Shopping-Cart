import "./App.css";
 
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
       <BrowserRouter>
       <Navbar /> 
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/cards" element={<Cards/>}></Route>
        
       </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
