import React from "react";
import tgIcon from "../../assets/tg.svg";
import vkIcon from "../../assets/vk.svg";
import pochtaIcon from "../../assets/pochta.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer-logo">Puzzle</span>
      <p className="footer-text">© 2025 Puzzle. Все права защищены.</p>
      <div className="footer-icons">
        <img src={tgIcon} alt="Telegram" />
        <img src={vkIcon} alt="VK" />
        <img src={pochtaIcon} alt="Email" />
      </div>
    </footer>
  );
};

export default Footer;
;
