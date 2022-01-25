import "./app.css";
import Homepage from "./Pages/HomePage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [menu, setMenu] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Homepage menu={menu} setMenu={setMenu} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
