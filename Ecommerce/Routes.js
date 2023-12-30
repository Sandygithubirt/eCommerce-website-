import {Routes, Route} from 'react-router-dom';
import Category from "./Pages/Category"
import Home from "./Pages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Category />}></Route>
      <Route path="/:categoryId" element={<Category />}></Route>
      {/* <Route path="/" element={<Home />}></Route>
      <Route path="/:HomeId" element={<Home />}></Route> */}
    </Routes>
  );
}
export default AppRoutes;