import { Header } from "./header/header";
import React from "react";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import { Income } from "./income/income";
import Home from "./home/home";


function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
        <div className="flex flex-row bg-slate-600 text-center items-center space-x-4 text-white">
            <div>
                <div className="pl-4 text-2xl">Simple-Finance</div>
            </div>
            <div>
                <button type="button" className="text-lg">
                  <NavLink to="/">
                  Home
                  </NavLink>
                </button>
            </div>
            <div>
            <button type="button" className="text-lg">
                  <NavLink to="/income">
                  Income
                  </NavLink>
                </button>
            </div>
            <div>
                <div className="text-lg">Settings</div>
            </div>
        </div>
        </header>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/income" element={<Income/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
