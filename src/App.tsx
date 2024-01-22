import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SiteMap from "./SiteMap";
import routePaths from "./routers";

const App = () => {
  return (
    <BrowserRouter>
      <SiteMap />
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routePaths.map((route, index) => {
            return (
              <Route
                key={route.key}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
