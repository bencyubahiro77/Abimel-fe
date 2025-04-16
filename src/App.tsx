import Navbar from "./component/navBar"
import Home from "./pages/home"

function App() {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <div>
        <Home />
      </div>
    </div>
  )
}

export default App