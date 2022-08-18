import { Route, Routes } from "react-router-dom";
import CommunesNew from "./new";
import Communes from "./index";

const CommunesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Communes />} />
      <Route path="/new" element={<CommunesNew />} />
    </Routes>
  );
};
export default CommunesRoutes;
