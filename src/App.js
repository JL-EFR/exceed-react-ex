import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import Nav from "./component/Nav"

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
