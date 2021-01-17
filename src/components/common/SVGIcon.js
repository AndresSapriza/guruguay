import React from "react";
import PropTypes from "prop-types";

const SVGIcon = ({ iconClass, path, onClick, height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 0 24 24"
      width={width}
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
  height: PropTypes.string,
  width: PropTypes.string,
};

export default SVGIcon;
