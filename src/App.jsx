import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import Whitepaper from "./components/Whitepaper";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Header />
      <About />
      <Features />
      <Whitepaper />
      <ComingSoon />
      <Footer />
    </>
  )
}

export default App
