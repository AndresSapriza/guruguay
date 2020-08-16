import React from "react";
import PropTypes from "prop-types";

const SVGIcon = ({ iconClass, path, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      className={iconClass}
      onClick={onClick}
    >
      {path}
    </svg>
  );
};

SVGIcon.propTypes = {
  path: PropTypes.element,
  onClick: PropTypes.func,
  iconClass: PropTypes.string,
};

export default SVGIcon;
