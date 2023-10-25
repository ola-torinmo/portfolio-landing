import React from "react"
import "./App.css";
import { Navabar, Hero,Service, Convert,Specialty,Webcost ,Budget } from "./component";

// import Hero from "./component/Hero";

export default function App() {
  return (
   <div>
    <Navabar/>
    <Hero/>
    <Service/>
    <Convert/>
    <Specialty/>
    <Webcost/>
    <Budget/>
   </div>
  )
}