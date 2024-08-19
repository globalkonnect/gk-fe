import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      window.location.href = location.hash;
    }
  }, [location]);
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
