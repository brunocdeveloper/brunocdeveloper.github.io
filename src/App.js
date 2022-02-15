import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from './components/homepage/homePage';


function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={ <HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
 