import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { HomePage } from './HomePage';
import { ProjectName } from './ProjectName';
import { Navbar } from './Navbar';
import Sidebar from './Sidebar';
import FooterBar from './components/FooterBar/';


let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};



const App = () => {



  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => { setIsOpen(!isOpen) }

  
  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });



  let project1 = "cola"
  // let project2 = "pepsi"


  
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
          path="/project/CocaCola"
          element={<ProjectName name={project1} />}
        />
        <Route
          path="/project/Pepsi"
          element={<ProjectName name={project1} />}
        />
      </Routes>
      <FooterBar />
    </Router>
  );
}

export default App;
