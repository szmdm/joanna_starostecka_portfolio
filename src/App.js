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



  const project1 = "Gilette"
  const project2 = "Coca Cola"
  const project3 = "Schwartz"
  const project4 = "Sprite"
  const project5 = "Soft"
  const project6 = "Coca Cola stand"
  


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
          path="/project/"{...project1}
          element={<ProjectName name={project1} />}
        />
        <Route
          path="/project/"{...project2}
          element={<ProjectName name={project2} />}
        />
        <Route
          path="/project/"{...project3}
          element={<ProjectName name={project3} />}
        />
        <Route
          path="/project/"{...project4}
          element={<ProjectName name={project4} />}
        />
        <Route
          path="/project/"{...project5}
          element={<ProjectName name={project5} />}
        />
        <Route
          path="/project/"{...project6}
          element={<ProjectName name={project6} />}
        />
      </Routes>
      <FooterBar />
    </Router>
  );
}

export default App;
