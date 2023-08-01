import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductCart from './components/ProductCart';
//mport Cart from "./components/Cart";




function App(){
  return(
    <div>
      
      <Navbar />
      <br />
      <Home />
      <br />
      <ProductCart />
      <br /><br />
      <Footer />
      
      
      
    </div>
  );
}

export default App;