import { Routes, Route } from "react-router-dom";

import Home from "./home";
import About from "./about";
import HairCut from "./hair_cut";
import Courses from "./courses";
import Products from "./products";

const Main = () => (
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/courses" element={<Courses/>}/>
    <Route exact path="/haircut" element={<HairCut/>}/>
    <Route exact path="/products" element={<Products/>}/>


  </Routes>
)

export default Main;