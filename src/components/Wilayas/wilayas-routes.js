import { Route, Routes } from "react-router-dom";
import WilayasNew from "./new";
import Wilayas from "./index";

const WilayasRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Wilayas />} />
      <Route path="/new" element={<WilayasNew />} />
    </Routes>
  );
};
export default WilayasRoutes;
