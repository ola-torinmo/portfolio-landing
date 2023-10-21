import React from "react"
import "./App.css";
import { Navabar, Hero,Service, Convert } from "./component";

// import Hero from "./component/Hero";

export default function App() {
  return (
   <div>
    <Navabar/>
    <Hero/>
    <Service/>
    <Convert/>
   </div>
  )
}