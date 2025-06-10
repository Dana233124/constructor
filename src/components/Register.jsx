import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert("Пароли не совпадают!");
      return;
    }
    alert(`Регистрация с Email: ${email} и Пароль: ${password}`);
    navigate("/dashboard");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

        .register-container {
          max-width: 400px;
          margin: 80px auto;
          padding: 30px;
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          font-family: 'Inter', sans-serif;
          color: #2A1C71;
        }

        .register-container h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        .register-form label {
          display: flex;
          flex-direction: column;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .register-form input {
          margin-top: 5px;
          padding: 10px;
          font-size: 16px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        .btn-register-submit {
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

        .btn-register-submit:hover {
          background-color: #e60052;
          box-shadow: 0 4px 15px rgba(230, 0, 82, 0.6);
          transform: scale(1.05);
        }

        .btn-login-switch {
          margin-top: 20px;
          width: 100%;
          padding: 12px;
          border-radius: 45px;
          border: 1px solid #FF005E;
          background-color: white;
          color: #FF005E;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
        }

        .btn-login-switch:hover {
          background-color: #FF005E;
          color: white;
          border-color: #FF005E;
          box-shadow: 0 4px 15px rgba(255, 0, 94, 0.6);
          transform: scale(1.05);
        }

        .admin-login-text {
          margin-top: 20px;
          text-align: center;
          font-size: 14px;
          color: #2A1C71;
        }

        .admin-login-text button {
          background-color: transparent;
          color: #FF005E;
          border: none;
          padding: 0;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: underline;
          user-select: none;
          transition: color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
        }

        .admin-login-text button:hover {
          color: #e60052;
          transform: scale(1.05);
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(230, 0, 82, 0.6);
        }
      `}</style>

      <div className="register-container">
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit} className="register-form">
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

          <label>
            Подтвердите пароль:
            <input
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
              placeholder="Повторите пароль"
            />
          </label>

          <button type="submit" className="btn-register-submit">
            Зарегистрироваться
          </button>
        </form>

        <button
          onClick={() => navigate("/login")}
          className="btn-login-switch"
        >
          Войти
        </button>

        <div className="admin-login-text">
          Вы являетесь администратором?{" "}
          <button
            onClick={() => navigate("/admin-login")}
            type="button"
          >
            Войти тут
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
