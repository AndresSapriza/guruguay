import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";
import SVGIcon from "./SVGIcon";
import * as iconTypes from "./SVGs/IconTypes";

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);

  const menus = [
    { name: "Home", to: "/", exact: true },
    {
      name: "Where to Stay",
      to: "/gurustore",
      exact: false,
      subMenus: [
        {
          name: "Montevideo",
          to: "/gurustore",
        },
        {
          name: "Beaches",
          to: "/gurustore",
        },
        {
          name: "Countryside & Wine Country",
          to: "/gurustore",
        },
        {
          name: "Rental Service",
          to: "/gurustore",
        },
        {
          name: "Source Map",
          to: "/gurustore",
        },
      ],
    },
    { name: "Food and Drink", to: "/gurustore", exact: false },
    { name: "Activities", to: "/gurustore", exact: false },
    { name: "Moving to Uruguay", to: "/gurustore", exact: false },
    { name: "Blog", to: "/gurustore", exact: false },
    { name: "GuruGuay Store", to: "/gurustore", exact: false },
  ];
  const listMenus = menus.map((d) => <NavMenu key={d.name} itemMenu={d} />);
  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">
          <NavLink to="/" exact>
            <img
              src="https://www.guruguay.com/wp-content/uploads/2019/05/guruguay-logo_v3.png"
              alt="Guru'Guay"
              id="logo"
            />
          </NavLink>
        </h1>
        <ul className={searchActive ? "nav navNone" : "nav nav-right"}>
          {listMenus}
        </ul>
        <div className={searchActive ? "search" : "searchNone"}>
          <input
            className="search"
            placeholder="Search …"
            title="Search for:"
          ></input>
        </div>
        <SVGIcon
          height="24px"
          widt="24px"
          iconClass="Icon"
          path={searchActive ? iconTypes.CLOSE_ICON : iconTypes.SEARCH_ICON}
          onClick={toggleSearch}
        />
      </div>
    </nav>
  );
};

export default Header;
