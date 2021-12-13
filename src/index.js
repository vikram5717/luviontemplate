import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Login from './components/login';
import Home from './components/home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/navbar';
import Onboard from './components/onboard';
import Register from './components/register';
import Pricing from './components/pricing';
import About from './components/about';
import Notfound from './components/notfound';
import Clock from './components/clock';
import Calendar from './components/calender';
import Notfounds from './components/notfounds';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
  <div>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Onboard" element={<Onboard/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/Pricing" element={<Pricing/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Notfound" element={<Notfound/>}></Route>
      <Route path="/login" element={<Clock/>}></Route>
      <Route path="/Calendar" element={<Calendar/>}></Route>
      <Route path="/Notfounds" element={<Notfounds/>}></Route>  
    </Routes>
    </div>
  </BrowserRouter>,
  rootElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

