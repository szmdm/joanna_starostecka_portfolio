import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectName from './components/ProjectName/ProjectName';
import { Navbar } from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { ProjectDoneGilette } from './components/ProjectDone/ProjectDoneGillette';
import { ProjectDoneCocaCola } from './components/ProjectDone/ProjectDoneCocaCola';
import { ProjectDoneSoft } from './components/ProjectDone/ProjectDoneSoft';
import ProjectDoneCeramic from './components/ProjectDone/ProjectDoneCeramic';


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



  // const project1 = "Gillette"
  // const project2 = "Coca Cola"
  // const project3 = "Schwartz"
  const project4 = "Sprite"
  // const project5 = "Soft"
  const project6 = "Coca Cola stand"
  


  return (
    <Router>
      <Navbar 
        toggle={toggle}
        isOpen={isOpen}
      />
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
          path="/project/Gillette"
          element={<ProjectDoneGilette />}
        />
        <Route
          path="/project/CocaCola"
          element={<ProjectDoneCocaCola />}
        />
        <Route
          path="/project/CeramicStudio"
          element={<ProjectDoneCeramic />}
        />
        {/* <Route
          path="/project/"{...project4}
          element={<ProjectName name={project4} />}
        /> */}
        <Route
          path="/project/Soft"
          element={<ProjectDoneSoft />}
        />
        {/* <Route
          path="/project/"{...project6}
          element={<ProjectName name={project6} />}
        /> */}
      </Routes>
      {/* <FooterBar /> */}
    </Router>
  );
}

export default App;
