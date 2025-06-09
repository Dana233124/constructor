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
  navigate("/dashboard");  // переход на личный кабинет после регистрации
};


  return (
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
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "12px",
          borderRadius: "45px",
          border: "1px solid #FF005E",
          backgroundColor: "white",
          color: "#FF005E",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Войти
      </button>

      <div
        className="admin-login-text"
        style={{ marginTop: "20px", textAlign: "center", fontSize: "14px", color: "#2A1C71" }}
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
            transition: "color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease"
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

export default Register;
