import Lot from "./pages/Lot"
import Headers from "./components/Headers"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Eandp from "./pages/Eandp"
import Store from "./pages/Store"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lot" element={<Lot />} />
      <Route path="/expanseandpurchases" element={<Eandp /> } />
      <Route path="/store" element={<Store /> } />
    </Routes>
    </>
  )
}

export default App
