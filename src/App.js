import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home"
import LoanPayment from './components/LoanCalculator';
import CompoundInterest from './components/CompoundInterest';
import HouseAfford from './components/HouseAfford';

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/compound-interest", name: "Compound Interest", component: CompoundInterest },
  { path: "/loan-payment", name: "Loan Payment", component: LoanPayment },
  { path: "/house-affordability", name: "House Affordability", component: HouseAfford }
];


function App() {
  return (
    <Router>
      <nav>
        <ul>
          {routes.map((route) => (
            <li class="btn btn-link"key={route.path}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Router>

  );
}

export default App;