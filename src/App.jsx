import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import MyAppoinment from './pages/MyAppoinment';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppDownload from './components/AppDownload';
import Musican from './pages/Musican';


const App = () => {
   
  
  
  return (
    <>
      <div className="mx-4 sm:mx-[10%]">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-musicians" element={<Musican/>}/>
          <Route path='/all-musicians/:speciality' element={<Musican/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointment" element={<MyAppoinment />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
        </Routes>
        

        <AppDownload />
      </div>

        <Footer />
    </>
  );
};

export default App;
