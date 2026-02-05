import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="tooltip" 
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      style={{ display: 'inline-block', position: 'relative' }}
    >
      {children}
      {isVisible && <span className="tooltiptext">{text}</span>}
    </div>
  );
};

export default Tooltip;
