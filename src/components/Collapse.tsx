import React, { useState } from "react";
import "../styles/components/collapse.scss";
import { FaChevronDown } from 'react-icons/fa';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <FaChevronDown className={`icon ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;

