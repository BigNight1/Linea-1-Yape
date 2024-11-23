import EfecandYape from "./Components/Select/Efectivo/EfecandYape.jsx";
import SelectPay from "./Components/Select/SelectPay";
import { Route, Routes } from "react-router-dom";
import YapePage from "./Components/Select/YapeQR.jsx";
import MetroyHora from "./Components/Select/MetroyHora.jsx";
import Logos from "./Components/Select/Logos.jsx";
function App() {
  return (
    <>
      <MetroyHora />
      <Routes>
        <Route path="/" element={<SelectPay />} />
        <Route path="/formapago" element={<EfecandYape />} />
        <Route path="/YapeQR" element={<YapePage />} />
      </Routes>
      <Logos />
    </>
  );
}

export default App;
