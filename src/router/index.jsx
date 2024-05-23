import { Route, Routes } from "react-router-dom";
import { Nacional, Tumbo } from "../views/";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Nacional />} />
      <Route path="/Tumbo" element={<Tumbo />} />
    </Routes>
  );
};
