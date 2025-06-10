import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Вход с Email: ${email} и Пароль: ${password}`);
    navigate("/dashboard");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

        .login-container {
          max-width: 400px;
          margin: 80px auto;
          padding: 30px;
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          font-family: 'Inter', sans-serif;
          color: #2A1C71;
        }

      .login-container h2 {
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
          font-family: 'Inter', sans-serif;
        }

        .login-form input:focus {
          border-color: #FF005E;
          outline: none;
          box-shadow: 0 0 8px rgba(255, 0, 94, 0.4);
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
          font-family: 'Inter', sans-serif;
        }

        .btn-login-submit:hover {
          background-color: #e60052;
          box-shadow: 0 4px 15px rgba(230, 0, 82, 0.6);
          transform: scale(1.05);
        }

        .btn-register-switch {
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
          font-family: 'Inter', sans-serif;
        }

        .btn-register-switch:hover {
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
          font-family: 'Inter', sans-serif;
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
          font-family: 'Inter', sans-serif;
        }

        .admin-login-text button:hover {
          color: #e60052;
          transform: scale(1.05);
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(230, 0, 82, 0.6);
        }
      `}</style>

      <div className="login-container">
        <h2>Вход</h2>
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

        <button
          onClick={() => navigate("/register")}
          className="btn-register-switch"
        >
          Зарегистрироваться
        </button>

        <div className="admin-login-text">
          Вы являетесь администратором?{" "}
          <button onClick={() => navigate("/admin-login")} type="button">
            Войти тут
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
