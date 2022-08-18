import { Route, Routes } from "react-router-dom";
import UserNew from "./new";
import Users from "./index";

const UsersRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/new" element={<UserNew />} />
    </Routes>
  );
};
export default UsersRoutes;
