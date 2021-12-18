import react from 'react'
import "./App.css"
import {Article,Navbar,Brand,Feature,CTA } from './Components'
import {Blog,Header,Footer,Features,Possibility,WhatGPT3 } from './Containers'


function App() {
  return (
    <div className="App" >
    <div className="gradient__bg" >
    <Navbar/>
    <Header/>
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <CTA/>
    <Blog/>
    <Footer/>    
    </div>
  );
}

export default App;
