import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const DropDownH = ({ dropdownItems }) => {
  const activeStyle = { color: "#469ca4" };
  return (
    <ul className="dropdown">
      {dropdownItems.map((d) => (
        <li key={d.name}>
          <NavLink className="Link" to={d.to} activeStyle={activeStyle}>
            {d.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

DropDownH.propTypes = {
  dropdownItems: PropTypes.arrayOf(PropTypes.object),
};

export default DropDownH;
