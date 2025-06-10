import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import icon15 from "../assets/15.svg";
import icon16 from "../assets/16.svg";
import tgIcon from "../assets/tg.svg";
import vkIcon from "../assets/vk.svg";
import pochtaIcon from "../assets/pochta.svg";
import "./Dashboard.css";


// Заголовок дашборда
const DashboardHeader = () => {
  const [isNotifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="dashboard-header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        fontFamily: "'Inter', sans-serif",
        color: "#2A1C71",
        fontWeight: 600,
        fontSize: "24px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "80px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <div className="logo-small">Puzzle</div>

      <div
  className="header-icons"
  style={{ display: "flex", gap: "30px", alignItems: "center", position: "relative" }}
>
  <button
    onClick={() => setNotifOpen(!isNotifOpen)}
    className="icon-button"
    aria-label="Уведомления"
  >
    <img src={icon16} alt="Уведомления" style={{ width: 40, height: 40 }} />
  </button>

  <button
    className="icon-button"
    aria-label="Данные"
    onClick={() => navigate("/data")}
  >
    <img src={icon15} alt="Данные" style={{ width: 40, height: 40 }} />
  </button>

  {isNotifOpen && (
    <div
      className="notification-popup"
      ref={notifRef}
      style={{
        position: "absolute",
        top: "60px",
        right: 0,
        width: "250px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        borderRadius: "12px",
        padding: "15px",
        zIndex: 999,
        fontSize: "14px",
        color: "#333",
      }}
    >
      <p>У вас нет новых уведомлений.</p>
    </div>
  )}
</div>

    </header>
  );
};


// Компонент для списка магазинов и действий
const DashboardActions = ({
  stores,
  onCreateStore,
  onDeleteStore,
  onPublishStore,
  onEditToggleStore,
  onNameChangeStore,
}) => {
  const MAX_STORES_DISPLAYED = 10;
  const displayedStores = stores.slice(0, MAX_STORES_DISPLAYED);

  const scrollPositionRef = useRef(window.scrollY);

  useEffect(() => {
    scrollPositionRef.current = window.scrollY;
  }, [stores.length]);

  useEffect(() => {
    window.scrollTo(0, scrollPositionRef.current);
  }, [stores.length]);

  if (stores.length === 0) {
    return (
      <>
        <button className="btn-create-site" onClick={onCreateStore}>
          Создать сайт
        </button>
        <button className="btn-settings">Настроить сайт</button>
        <button className="btn-save">Сохранить</button>
        <div className="stores-label">Мои магазины:</div>
          <div className="stores-empty-container">Магазины отсутствуют</div>
      </>
    );
  }

  return (
    <>
      <button className="btn-create-site" onClick={onCreateStore}>
        Создать сайт
      </button>
      <button className="btn-settings">Настроить сайт</button>
      <button className="btn-save">Сохранить</button>

      <div className="stores-label">Мои магазины:</div>

      <div className="stores-container">
        {displayedStores.map((store) => (
          <div key={store.id} className="store-list-wrapper">
            <StoreItem
              store={store}
              onDeleteStore={onDeleteStore}
              onPublishStore={onPublishStore}
              onEditToggleStore={onEditToggleStore}
              onNameChangeStore={onNameChangeStore}
            />
          </div>
        ))}

        {stores.length > MAX_STORES_DISPLAYED && (
          <div className="store-limit-message">
            Показано {MAX_STORES_DISPLAYED} из {stores.length} магазинов
          </div>
        )}
      </div>
    </>
  );
};

const StoreItem = ({
  store,
  onDeleteStore,
  onPublishStore,
  onEditToggleStore,
  onNameChangeStore,
}) => {
  return (
    <div className={`store-item ${store.published ? "published" : ""}`} style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px",
      marginBottom: "10px",
      backgroundColor: store.published ? "#E0FFE0" : "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      {store.editing ? (
        <input
          type="text"
          value={store.name}
          onChange={(e) => onNameChangeStore(store.id, e.target.value)}
          onBlur={() => onEditToggleStore(store.id)}
          autoFocus
          className="store-name-input"
          style={{ flex: 1, marginRight: "10px", padding: "6px", fontSize: "16px" }}
        />
      ) : (
        <div
          className="store-name"
          onClick={() => onEditToggleStore(store.id)}
          style={{ flex: 1, cursor: "pointer", fontWeight: "600", fontSize: "16px" }}
        >
          {store.name}
        </div>
      )}

      <div className="store-buttons" style={{ display: "flex", gap: "10px" }}>
        <button className="btn-store" style={btnStyle}>Настроить</button>
        <button className="btn-store" onClick={() => onDeleteStore(store.id)} style={btnStyle}>
          Удалить
        </button>
        <button className="btn-store" onClick={() => onPublishStore(store.id)} style={btnStyle}>
          Опубликовать
        </button>
      </div>
    </div>
  );
};

const btnStyle = {
  padding: "6px 12px",
  borderRadius: "6px",
  border: "1px solid #FF005E",
  backgroundColor: "white",
  color: "#FF005E",
  cursor: "pointer",
  fontWeight: "600",
  transition: "background-color 0.3s ease, color 0.3s ease",
};

const Footer = () => (
  <footer style={{
    height: "250px",
    backgroundColor: "#DDD6FF",
    marginTop: "auto",
    textAlign: "center",
    paddingTop: "60px",
    fontFamily: "'Inter', sans-serif",
    color: "#2A1C71",
  }}>
    Puzzle Footer
  </footer>
);

const Dashboard = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("myStores");
    if (saved) setStores(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("myStores", JSON.stringify(stores));
  }, [stores]);

  const handleCreateStore = () => {
    const newStore = {
      id: Date.now(),
      name: `Магазин #${stores.length + 1}`,
      published: false,
      editing: false,
    };
    setStores([...stores, newStore]);
  };

  const handleDeleteStore = (id) => {
    setStores(stores.filter((store) => store.id !== id));
  };

  const handlePublishStore = (id) => {
    setStores(
      stores.map((store) =>
        store.id === id ? { ...store, published: true } : store
      )
    );
  };

  const handleEditToggleStore = (id) => {
    setStores(
      stores.map((store) =>
        store.id === id ? { ...store, editing: !store.editing } : store
      )
    );
  };

  const handleNameChangeStore = (id, newName) => {
    setStores(
      stores.map((store) =>
        store.id === id ? { ...store, name: newName } : store
      )
    );
  };

  return (
    <div className="dashboard-container" style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    }}>
      <DashboardHeader />
      <main
        style={{
          flex: "1",
          minHeight: "calc(100vh - 80px - 250px)", // header + footer
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "40px",
          paddingTop: "100px", // отступ под шапку
          backgroundColor: "#F9F9F9",
          marginLeft: "40px",
          marginRight: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          position: "relative",
          zIndex: 10,
        }}
      >
        <DashboardActions
          stores={stores}
          onCreateStore={handleCreateStore}
          onDeleteStore={handleDeleteStore}
          onPublishStore={handlePublishStore}
          onEditToggleStore={handleEditToggleStore}
          onNameChangeStore={handleNameChangeStore}
        />
      </main>
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
  );
};

export default Dashboard;
