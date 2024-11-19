import EfecandYape from "./Components/Select/Efectivo/EfecandYape.jsx";
import SelectPay from "./Components/Select/SelectPay";
import { Route, Routes } from "react-router-dom";
import YapePage from "./Components/Select/YapeQR.jsx";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SelectPay/>}/>
      <Route path="/formapago" element={<EfecandYape/>}/>
      <Route path="/YapeQR" element={<YapePage/>}/>

    </Routes>
    
    </>
  );
}

export default App;
