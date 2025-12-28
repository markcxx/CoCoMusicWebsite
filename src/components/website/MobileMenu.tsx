import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import LanguageSelector from "./LanguageSelector";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
      <div className="mobile-menu-overlay" onClick={onClose} />
      <div className="mobile-menu-container">
        <div className="mobile-menu-header">
          <LanguageSelector />
          <button className="mobile-menu-close" onClick={onClose} type="button">
            ×
          </button>
        </div>
        <nav className="mobile-nav">
          <ul className="mobile-navigation">
            <li className={location.pathname === "/" ? "current" : ""}>
              <Link to="/" onClick={onClose}>
                {t("nav.home")}
              </Link>
            </li>
            <li className={location.pathname === "/download" ? "current" : ""}>
              <Link to="/download" onClick={onClose}>
                {t("nav.download")}
              </Link>
            </li>
            <li
              className={location.pathname === "/enterprise" ? "current" : ""}
            >
              <Link to="/enterprise" onClick={onClose}>
                {t("enterprise")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
