import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo-small">Puzzle</div>
      <div className="header-buttons">
        <button className="btn-login" onClick={() => navigate("/login")}>Войти</button>
        <button className="btn-register" onClick={() => navigate("/register")}>Зарегистрироваться</button>
      </div>
    </header>
  );
};

export default Header;
