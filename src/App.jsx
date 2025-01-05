import { q } from "framer-motion/client";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Portfolio from "./pages/Portfolio";
import Stack from "./pages/Stack";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <>
      <Hero/>
      <About/>
      <Portfolio/>
      <Stack/>
      <Footer/>
    </>
  )
}