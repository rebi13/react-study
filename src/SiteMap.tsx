import { NavLink } from "react-router-dom";
import routePaths from "./routers";

const SiteMap = () => {
  return (
    <div>
      {routePaths.map((route, index) => {
        return (
          <div key={index}>
            <NavLink key={route.key} to={route.path}>
              {route.name}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default SiteMap;
