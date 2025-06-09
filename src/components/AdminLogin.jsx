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
    <div className="admin-login-page"> {/* Здесь задаём фон */}
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
  );
};

export default AdminLogin;
