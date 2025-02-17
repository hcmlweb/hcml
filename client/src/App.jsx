import { Routes, Route } from "react-router-dom";
import Lot from "./pages/Lot";
import LotForm from "./components/LotForm";
import PartyForm from "./components/PartyForm";
import LotManage from "./components/LotManage";
import Dashboard from "./pages/Dashboard";
import Color from "./components/Color";
import AllLots from "./components/grieges/AllLots";
import DeliveryLots from "./components/grieges/DeliveryLots";
import CloseLots from "./components/grieges/CloseLots";
import Expense from "./pages/Expense";
import Mechanical from "./components/mechanical/Mechanical";
import TableContainer from "./components/table/TableContainer";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/lot" element={<Lot />}>
            <Route path="alllot" element={<AllLots />} />
            <Route path="alllot/:id" element={<LotManage />} />
            <Route path="deliverylots" element={<DeliveryLots />} />
            <Route path="closelots" element={<CloseLots />} />
            <Route path="paking-list" element={<TableContainer />} />
          </Route>
          <Route path="/newlot" element={<LotForm />} />
          <Route path="/party" element={<PartyForm />} />
          <Route path="/lot/:id" element={<LotManage />} />
          <Route path="/color" element={<Color />} />
          <Route path="/mechanical" element={<Mechanical />} />
          <Route path="/expense" element={<Expense />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
