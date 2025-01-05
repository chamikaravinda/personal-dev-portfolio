import About from "./pages/About";
import Hero from "./pages/Hero";
import Portfolio from "./pages/Portfolio";
import Stack from "./pages/Stack";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Stack />
      <Footer />
    </>
  );
}
