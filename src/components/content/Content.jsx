import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AddCharacter from "./Characters/AddCharacter";
const Content = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} errorElement={<ErrorPage />} />
        <Route index path="/add-character" element={<AddCharacter />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default Content;
