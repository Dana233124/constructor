import React from "react";
import { useNavigate } from "react-router-dom";

import icon2 from "../assets/2.svg";
import tgIcon from "../assets/tg.svg";
import vkIcon from "../assets/vk.svg";
import pochtaIcon from "../assets/pochta.svg";

const FrameScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

        

        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          background-color: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
          padding: 0 60px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .logo-small {
          font-family: 'Nerko One', cursive;
          font-weight: 400;
          font-size: 40px;
          color: #FF005E;
          user-select: none;
        }

        .header-buttons {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .btn-login,
        .btn-register,
        .btn-create {
          transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .btn-login:hover,
        .btn-register:hover,
        .btn-create:hover {
          background-color: #FF005E;
          color: white;
          box-shadow: 0 4px 15px rgba(255, 0, 94, 0.6);
          transform: scale(1.05);
        }

        .btn-login {
          background: none;
          border: none;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 16px;
          color: #000000;
          text-decoration: underline;
          padding: 0;
          user-select: none;
          line-height: 1;
        }

        .btn-register {
          width: 191px;
          height: 50px;
          background-color: #FF005E;
          border: none;
          border-radius: 45px;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 15px;
          color: #FFFFFF;
          user-select: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .frame {
          width: 100%;
          box-sizing: border-box;
        }

        .first {
        
          background-size: 1440px 900px;
          background-position: center top;
          background-repeat: no-repeat;
          background-color: #DDD6FF;
          width: 100vw;
          height: 900px;
          padding-top: 80px;
          position: relative;
          background-image: url(${icon2});
        }

        .logo-big {
          position: absolute;
          left: 750px;
          top: 270px;
          font-family: 'Nerko One', cursive;
          font-weight: 400;
          font-size: 200px;
          color: #FF005E;
          user-select: none;
          line-height: 1;
        }

        .title-main {
          position: absolute;
          left: 38px;
          top: 302px;
          width: 456px;
          font-weight: 700;
          font-size: 40px;
          color: #2A1C71;
          user-select: none;
          line-height: 1.2;
          text-align: left;
        }

        .puzzle-text {
          position: absolute;
          left: 38px;
          top: 142px;
          font-family: 'Nerko One', cursive;
          font-weight: 400;
          font-size: 128px;
          color: #FF005E;
          user-select: none;
        }

        .btn-create {
          position: absolute;
          left: 38px;
          top: 435px;
          width: 354px;
          height: 94px;
          background-color: #FF005E;
          border: none;
          border-radius: 45px;
          font-size: 36px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .footer {
          position: relative;
          width: 100vw;
          margin-left: -50vw;
          left: 50%;
          height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: white;
          color: #2A1C71;
        }

        .footer-logo {
          position: absolute;
          top: 70px;
          left: 40px;
          font-family: 'Nerko One', cursive;
          font-weight: 400;
          font-size: 128px;
          color: #FF005E;
          user-select: none;
          line-height: 1;
        }

        .footer-text {
          position: absolute;
          bottom: 30px;
          left: 40px;
          font-size: 16px;
          color: #2A1C71;
          user-select: none;
        }

        .footer-icons {
          display: flex;
          gap: 20px;
        }

        .footer-icons img {
          width: 50px;
          height: 50px;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .footer-icons img:hover {
          transform: scale(1.1);
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="logo-small">Puzzle</div>
        <div className="header-buttons">
          <button className="btn-login" onClick={() => navigate("/login")}>
            Войти
          </button>
          <button className="btn-register" onClick={() => navigate("/register")}>
            Зарегистрироваться
          </button>
        </div>
      </header>

      {/* Frame */}
      <div className="frame">
        <header className="first">
          <div className="logo-big">P</div>
          <h1 className="title-main">Создай свой интернет-магазин</h1>
          <button className="btn-create" onClick={() => navigate("/register")}>
            Создать
          </button>
          <div className="puzzle-text">Puzzle</div>
        </header>

        <footer className="footer">
          <span className="footer-logo">Puzzle</span>
          <p className="footer-text">© 2025 Puzzle. Все права защищены.</p>
          <div className="footer-icons">
            <img src={tgIcon} alt="Telegram" />
            <img src={vkIcon} alt="VK" />
            <img src={pochtaIcon} alt="Email" />
          </div>
        </footer>
      </div>
    </>
  );
};

export default FrameScreen;
