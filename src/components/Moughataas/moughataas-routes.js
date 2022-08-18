import { Route, Routes } from "react-router-dom";
import MoughataasNew from "./new";
import Moughataas from "./index";

const MoughataaRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Moughataas />} />
      <Route path="/new" element={<MoughataasNew />} />
    </Routes>
  );
};
export default MoughataaRoutes;
