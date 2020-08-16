import React from "react";
import { NavLink } from "react-router-dom";
import DropDownH from "./DropDownH";

const NavMenu = ({ itemMenu }) => {
  const activeStyle = { color: "#469ca4" };
  if (itemMenu.exact) {
    return (
      <li>
        <NavLink
          className="Link menu"
          to={itemMenu.to}
          activeStyle={activeStyle}
          exact
        >
          {itemMenu.name}
        </NavLink>
      </li>
    );
  }
  if (itemMenu.subMenus == undefined) {
    return (
      <li>
        <NavLink
          className="Link menu"
          to={itemMenu.to}
          activeStyle={activeStyle}
        >
          {itemMenu.name}
        </NavLink>
      </li>
    );
  } else {
    return (
      <li>
        <NavLink
          className="Link menu"
          to={itemMenu.to}
          activeStyle={activeStyle}
        >
          {itemMenu.name}
        </NavLink>
        <DropDownH dropdownItems={itemMenu.subMenus} />
      </li>
    );
  }
};

export default NavMenu;
