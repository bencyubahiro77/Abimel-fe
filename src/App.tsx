import Navbar from "./component/navBar"
import Home from "./component/home"

function App() {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <div className="pt-20">
        <Home />
        <Home />
      </div>
    </div>
  )
}

export default App