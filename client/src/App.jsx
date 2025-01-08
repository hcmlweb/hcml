import { Routes, Route } from "react-router-dom"
import Lot from "./pages/Lot"
import LotForm from "./components/LotForm"
import PartyForm from "./components/PartyForm"
function App() {


  return (
    <>
      <Routes>
        <Route path="/lot" element={<Lot />} />
        <Route path="/newlot" element={<LotForm />} />
        <Route path="/party" element={<PartyForm />} />
      </Routes>
    </>
  )
}

export default App
