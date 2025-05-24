import React, { useState, useRef, useEffect } from "react";
import "../styles/components/collapse.scss";
import { FaChevronDown } from "react-icons/fa";

interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <FaChevronDown className={`icon ${isOpen ? "open" : ""}`} />
      </div>
      <div
        className="collapse-content-wrapper"
        style={{
          height,
          overflow: "hidden",
          transition: "height 0.3s ease",
          position: "relative",
        }}
      >
        <div ref={contentRef} className="collapse-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
