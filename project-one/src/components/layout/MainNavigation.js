import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";


const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/comments">Comments</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/new-comment">New Comments</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;