import { useState } from "react";
import styles from "./SideBar.module.scss";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleRollOut = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <aside className={`${isOpen ? styles.open : styles.aside}`}>
        <img
          src={
            isOpen
              ? "/src/assets/image/big_logo.svg"
              : "/src/assets/image/logo.svg"
          }
          alt="logo"
          className={`${isOpen ? styles.open__logo : styles.aside__logo}`}
        />
        <div
          className={`${styles["aside__history"]} ${
            isOpen
              ? styles["aside__history--visible"]
              : styles["aside__history--hidden"]
          }`}
        >
          <div className={styles.history__box}>
            <img
              className={styles.history__img}
              src="/src/assets/image/icon_history.svg"
              alt="history"
            />
            <p className={styles.history__text}>History</p>
          </div>
          <p className={`${styles["name-chat"]}`}>Name of chat</p>
        </div>
        <div
          className={`${isOpen ? styles.open__bottom : styles.aside__bottom}`}
        >
          <button
            className={`${isOpen ? styles.open__button : styles.aside__button}`}
          >
            <img
              src="/src/assets/image/new_chat.svg"
              alt="new chat"
              className={`${
                isOpen
                  ? styles["open__button--new-chat"]
                  : styles["aside__button--new-chat"]
              }`}
            />
            <p
              className={` ${
                isOpen
                  ? styles["open__button--text"]
                  : styles["aside__button--text"]
              }`}
            >
              {isOpen ? "New Chat" : "new"}
            </p>
          </button>
          <button
            className={`${isOpen ? styles.open__button : styles.aside__button}`}
          >
            <img
              src="/src/assets/image/setting.svg"
              alt="settings"
              className={`${
                isOpen
                  ? styles["open__button--settings"]
                  : styles["aside__button--settings"]
              } `}
            />
            <p
              className={`${
                isOpen
                  ? styles["open__button--text"]
                  : styles["aside__button--text"]
              }`}
            >
              {isOpen ? "Settings" : "settings"}
            </p>
          </button>
        </div>
      </aside>
      <button
        className={`${isOpen ? styles["roll-up"] : styles["roll-out"]}`}
        onClick={handleRollOut}
      >
        <img
          className={`${styles["roll-out__image"]}`}
          src={
            isOpen
              ? "/src/assets/image/roll-up.svg"
              : "/src/assets/image/roll-out.svg"
          }
          alt="roll-out"
        />
      </button>
    </>
  );
};
