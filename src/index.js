import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import './stylesheet.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Game from './Game';



const rootElement = document.getElementById('root');


render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='Game' element={<Game/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
)