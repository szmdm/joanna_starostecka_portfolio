import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import HomePage from './components/HomePage';
import { Navbar } from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { ProjectDoneGilette } from './components/ProjectDone/ProjectDoneGillette';
import { ProjectDoneCocaCola } from './components/ProjectDone/ProjectDoneCocaCola';
import { ProjectDoneSoft } from './components/ProjectDone/ProjectDoneSoft';
import ProjectDoneCeramic from './components/ProjectDone/ProjectDoneCeramic';

import ToTopButton from '../src/components/MoveToTopButton/ToTopButton';


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
        <Route
          path="/project/Soft"
          element={<ProjectDoneSoft />}
        />
      </Routes>
      {/* <FooterBar /> */}
      <ToTopButton props={500} />
    </Router>
  );
}

export default App;
