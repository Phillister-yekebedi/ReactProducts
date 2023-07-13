// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Login from './Login';
import  ProductDetails from './ProductDetails';
import Products from './Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Products/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/productdetails/:productId" element={<ProductDetails/>}/>
        <Route path="/home" element={<Products/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
