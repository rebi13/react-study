import "./App.css";
import { Route, Routes } from "react-router-dom";
import routePaths from "./routers";

const App = () => {
  return (
    <>
      <Routes>
        {routePaths.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            ></Route>
          );
        })}
      </Routes>
    </>
  );
};

export default App;
