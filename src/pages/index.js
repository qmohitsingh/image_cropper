import React, {useState} from "react";
import {BrowserRouter as Router} from 'react-router-dom'

import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import Resize from "../components/ResizeSection";

import {homeObjOne, homeObjThree, homeObjTwo} from "../components/InfoSection/Data";
import {ResizeContextProvider} from "../StateManagement/ResizeContext";

const Home = () => {

    const [isOpen, setIsOpen]       = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
      <>
       <Router>
           <Sidebar isOpen={isOpen} toggle={toggle} />
           <Navbar toggle={toggle} />
           {/*<HeroSection/>*/}
           {/*<Dropdown />*/}
           <ResizeContextProvider>
               <InfoSection {...homeObjOne}/>
               {/*<InfoSection {...homeObjTwo}/>*/}
               <Resize />
           </ResizeContextProvider>
           <Services />
           <Footer/>
       </Router>
      </>
    );
}

export default Home;