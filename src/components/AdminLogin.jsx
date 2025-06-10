import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Вход администратора с Email: ${email} и Пароль: ${password}`);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

        .admin-page {
          background-color: #ffe4e6;
          min-height: 100vh;
          padding: 20px 0;
        }

        .admin-login-page {
          background-color: #fcd9e6; /* светло-розовый фон */
          min-height: 100vh;          /* минимум 100% высоты экрана */
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 0;
          width: 100vw;              /* Занять всю ширину окна */
          box-sizing: border-box;    /* Чтобы паддинги не вылезали за ширину */
          margin: 0;                 /* Убедиться, что нет внешних отступов */
        }

        .admin-login-container {
          max-width: 400px;
          margin: auto;
          padding: 30px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          font-family: 'Inter', sans-serif;
          color: #2A1C71;
        }

        .admin-login-container h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        .login-form label {
          display: flex;
          flex-direction: column;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .login-form input {
          margin-top: 5px;
          padding: 10px;
          font-size: 16px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        .btn-login-submit {
          width: 100%;
          padding: 12px;
          background-color: #FF005E;
          border: none;
          border-radius: 45px;
          color: white;
          font-size: 18px;
          cursor: pointer;
          transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
        }

        .btn-login-submit:hover {
          background-color: #e60052;
          box-shadow: 0 4px 15px rgba(230, 0, 82, 0.6);
          transform: scale(1.05);
        }

        .admin-login-text {
          margin-top: 16px;
          font-size: 14px;
          color: #2A1C71;
          text-align: center;
        }

        .admin-login-text button.btn-login-switch {
          background-color: transparent;
          color: #FF005E;
          border: none;
          padding: 0;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
          text-decoration: underline;
          user-select: none;
        }

        .admin-login-text button.btn-login-switch:hover {
          color: #e60052;
          transform: scale(1.05);
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(230, 0, 82, 0.6);
        }
      `}</style>

      <div className="admin-login-page">
        <div className="admin-login-container">
          <h2>Вход администратора</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Введите email"
              />
            </label>

            <label>
              Пароль:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Введите пароль"
              />
            </label>

            <button type="submit" className="btn-login-submit">
              Войти
            </button>
          </form>

          <div className="admin-login-text">
            Не администратор?{" "}
            <button
              onClick={() => navigate("/login")}
              className="btn-login-switch"
              type="button"
            >
              Войти как пользователь
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
