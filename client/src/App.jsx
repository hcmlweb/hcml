import { Routes, Route } from "react-router-dom"
import Lot from "./pages/Lot"
import LotForm from "./components/LotForm"
import PartyForm from "./components/PartyForm"
import LotManage from "./components/LotManage"
function App() {


  return (
    <>
      <Routes>
        <Route path="/lot" element={<Lot />} />
        <Route path="/newlot" element={<LotForm />} />
        <Route path="/party" element={<PartyForm />} />
        <Route path="/lot/:id" element={<LotManage />} />
      </Routes>
    </>
  )
}

export default App
