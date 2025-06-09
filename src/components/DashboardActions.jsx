import React, { useEffect, useRef } from "react";

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

  // Храним позицию скролла
  const scrollPositionRef = useRef(window.scrollY);

  // Перед обновлением сохраняем позицию
  useEffect(() => {
    scrollPositionRef.current = window.scrollY;
  }, [stores.length]);

  // После обновления восстанавливаем позицию
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
        <div>Магазины отсутствуют</div>
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
    <div className={`store-item ${store.published ? "published" : ""}`}>
      {store.editing ? (
        <input
          type="text"
          value={store.name}
          onChange={(e) => onNameChangeStore(store.id, e.target.value)}
          onBlur={() => onEditToggleStore(store.id)}
          autoFocus
          className="store-name-input"
        />
      ) : (
        <div className="store-name" onClick={() => onEditToggleStore(store.id)}>
          {store.name}
        </div>
      )}

      <div className="store-buttons">
        <button className="btn-store">Настроить</button>
        <button className="btn-store" onClick={() => onDeleteStore(store.id)}>
          Удалить
        </button>
        <button className="btn-store" onClick={() => onPublishStore(store.id)}>
          Опубликовать
        </button>
      </div>
    </div>
  );
};

export default DashboardActions;
