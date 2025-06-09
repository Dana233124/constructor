// Dashboard.js
import React, { useState, useEffect } from "react";
import Footer from "./FrameParts/Footer";
import DashboardActions from "./DashboardActions";

const DashboardHeader = () => (
  <header className="dashboard-header">
    <div className="logo-small">Puzzle</div>
  </header>
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
  const actionsWrapperStyle = {
  position: "fixed",
  top: "120px",  // отступ под шапку (80px) + небольшой запас (20px)
  left: "40px",
  right: "40px",
  backgroundColor: "#DDD6FF",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  zIndex: 999,
};

  return (
    <div className="dashboard-container">
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
      <Footer />
    </div>
  );
};

export default Dashboard;
