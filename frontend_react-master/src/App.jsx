import React from 'react';
import { Navbar } from './components';
import { Header,About,Work,Testimonial,Footer,Skills } from './container';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar /> //top
      <Header /> 
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />  
    </div>
  );
}

export default App;
