import Navbar from "./component/navBar"
import Home from "./pages/home"
import About from "./pages/about"

function App() {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <div>
        <Home />
        <About />
      </div>
    </div>
  )
}

export default App