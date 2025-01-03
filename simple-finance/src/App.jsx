import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import { Income } from "./income/income";
import Home from "./home/home";
import Settings from "./settings/settings";
import Schedule from "./calendar/schedule";

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
                <NavLink to="/calendar">
                Calendar
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
              <button type="button" className="text-lg">
                <NavLink to="/settings">
                Settings 
                </NavLink>
              </button>
            </div>
        </div>
        </header>
        <div className="flex items-center justify-center h-screen bg-slate-500">
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/income" element={<Income/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/calendar" element={<Schedule/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
