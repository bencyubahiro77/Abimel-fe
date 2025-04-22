import Navbar from "./component/navBar"
import Home from "./pages/home"
import About from "./pages/about"
import Testimonials from "./pages/testimonial"
import Footer from "./component/footer"
import Contact from "./pages/contact"
import Product from "./pages/product"

function App() {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <div>
        <Home />
        <About />
        <Product />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App