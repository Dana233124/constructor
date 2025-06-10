import React, { useState } from "react";


const Data = () => {
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Сохранено!\nИмя: ${name}\nEmail: ${email}\nАватар: ${avatar ? avatar.name : "не выбран"}`);
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "50px auto",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "'Inter', sans-serif",
      color: "#2A1C71",
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Данные пользователя</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        
        {/* Блок загрузки аватара */}
        <label style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", cursor: "pointer" }}>
          <div style={{
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  backgroundColor: "#eee",
  backgroundImage: avatarPreview ? `url(${avatarPreview})` : "none",
  backgroundSize: "cover",
  backgroundPosition: "center",
  border: "2px dashed #ccc",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  color: "#999",
  fontSize: "14px",
  userSelect: "none",
  textAlign: "center",  // добавлено для многострочного текста (если понадобится)
  padding: "10px",      // немного внутреннего отступа на всякий случай
}}>
  {!avatarPreview && "Выберите аватар"}
</div>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            style={{ display: "none" }}
          />
        </label>

        <label style={{ fontWeight: 600, fontSize: "16px" }}>
          Имя:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              marginTop: "6px",
              padding: "8px 12px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              width: "100%",
              boxSizing: "border-box",
            }}
            placeholder="Введите имя"
          />
        </label>

        <label style={{ fontWeight: 600, fontSize: "16px" }}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              marginTop: "6px",
              padding: "8px 12px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              width: "100%",
              boxSizing: "border-box",
            }}
            placeholder="Введите email"
          />
        </label>

        <button
          type="submit"
          style={{
            backgroundColor: "#2A1C71",
            color: "white",
            fontWeight: "600",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#20154f")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2A1C71")}
        >
          Сохранить
        </button>
      </form>
    </div>
  );
};

export default Data;
