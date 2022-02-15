import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from './components/homePage/homePage';
import ProjectsPage from './components/projectspage/projectsPage';


function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={ <HomePage/>} />
          <Route path="/projetos" element={ <ProjectsPage/> } />
      </Routes>
    </Router>
  );
}

export default App;
 