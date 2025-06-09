import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Вход с Email: ${email} и Пароль: ${password}`);
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h2>Вход в аккаунт</h2>
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
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "12px",
          borderRadius: "45px",
          border: "1px solid #FF005E",
          backgroundColor: "white",
          color: "#FF005E",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Зарегистрироваться
      </button>

      <div
        className="admin-login-text"
        style={{
          marginTop: "20px",
          textAlign: "center",
          fontSize: "14px",
          color: "#2A1C71",
        }}
      >
        Вы являетесь администратором?{" "}
        <button
          onClick={() => navigate("/admin-login")}
          className="btn-login-switch"
          type="button"
          style={{
            backgroundColor: "transparent",
            color: "#FF005E",
            border: "none",
            padding: 0,
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            textDecoration: "underline",
            userSelect: "none",
            transition: "color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#e60052";
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.textDecoration = "none";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(230, 0, 82, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#FF005E";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.textDecoration = "underline";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Войти тут
        </button>
      </div>
    </div>
  );
};

export default Login;
