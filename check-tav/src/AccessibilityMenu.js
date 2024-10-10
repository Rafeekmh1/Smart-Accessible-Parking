import React, { useState } from "react";
import "./AccessibilityMenu.css";

function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState("medium");

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle("high-contrast", !highContrast);
  };

  const handleFontSizeChange = (event) => {
    const selectedSize = event.target.value;
    setFontSize(selectedSize);
    document.body.style.fontSize = selectedSize;
  };

  return (
    <div className={`accessibility-menu ${isOpen ? "open" : ""}`}>
      <button
        className="accessibility-button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="accessibility-options"
      >
        <i className="fas fa-universal-access" aria-hidden="true"></i>
        Accessibility
      </button>
      <div id="accessibility-options" className="accessibility-options">
        <div className="accessibility-option">
          <label htmlFor="font-size">Font Size:</label>
          <select
            id="font-size"
            value={fontSize}
            onChange={handleFontSizeChange}
            aria-label="Select font size"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="accessibility-option">
          <label htmlFor="high-contrast">High Contrast:</label>
          <button
            id="high-contrast"
            onClick={toggleHighContrast}
            aria-pressed={highContrast}
            className="accessibility-button"
          >
            {highContrast ? "Disable" : "Enable"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccessibilityMenu;
