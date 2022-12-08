import './App.css';
//import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoPage from "./components/NoPage";
import StyledLayout from "./components/StyledLayout";
import Search from "./components/Search";

import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from './components/RecipeList';
import Item from './components/Item';
import { dishes } from './data/data';



function App() {
  return (

    <BrowserRouter>
      <Routes >
        <Route path="" element={<StyledLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />

          <Route path="/Product" element={<Search dish={dishes} />}>
            < Route path=":itemId" element={<Item Dishes={dishes} />} />

          </Route>

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes >
    </BrowserRouter >
  );
}

export default App;
