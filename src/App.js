import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectName from './components/ProjectName/ProjectName';
import { Navbar } from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import FooterBar from './components/FooterBar';


let useClickOutside = (handler) => {
  let domNode = useRef()

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler()
      }
    }

    document.addEventListener("mousedown", maybeHandler)

    return () => {
      document.removeEventListener("mousedown", maybeHandler)
    }

  })

  return domNode
}



const App = () => {



  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => { setIsOpen(!isOpen) }


  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });



  let project1 = "Gilette"
  let project2 = "Coca Cola"
  let project3 = "Schwartz"
  let project4 = "Sprite"
  let project5 = "Soft"
  let project6 = "Coca Cola stand"



  return (
    <Router>
      <Navbar toggle={toggle} />
      <Sidebar
        ref={domNode}
        isOpen={isOpen}
        toggle={toggle}
      />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/project/gilette"
          element={<ProjectName name={project1} />}
        />
        <Route
          path="/project/cocacola"
          element={<ProjectName name={project2} />}
        />
        <Route
          path="/project/schwartz"
          element={<ProjectName name={project3} />}
        />
        <Route
          path="/project/sprite"
          element={<ProjectName name={project4} />}
        />
        <Route
          path="/project/soft"
          element={<ProjectName name={project5} />}
        />
        <Route
          path="/project/cocacolastand"
          element={<ProjectName name={project6} />}
        />
      </Routes>
      <FooterBar />
    </Router>
  );
}

export default App;
