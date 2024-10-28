import {Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import{AddProducts} from "./pages/AddProducts";
import {ViewProducts} from "./pages/ViewProducts";
import {Profile} from "./pages/Profile";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import "./App.css"

const App = () => {
  return (

  <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/pages/AddProduct" element={<AddProduct />}/>
         */}
         <Route path="/AddProducts" element={<AddProducts />} />
         <Route path="/ViewProducts" element={<ViewProducts />} />
         <Route path="/Profile" element={<Profile />} />



      </Routes>
      <Footer />

  </div>
  );
};

export default App;
