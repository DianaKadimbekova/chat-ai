import { useState } from "react";
import styles from "./SideBar.module.scss";
import { Settings } from "../Settings/Settings";
import { useTranslation } from "react-i18next";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openSettings, setOpenSettings] = useState<boolean>(false);

  const { t } = useTranslation();

  const handleSettings = () => {
    setOpenSettings((prev) => !prev);
  };

  const handleRollOut = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={`${isOpen ? styles.aside__none : styles.aside}`}>
        <img
          src={"/src/assets/image/logo.svg"}
          alt="logo"
          className={`${styles.aside__logo}`}
        />
        <div
          className={`${styles["aside__history"]} ${styles["aside__history--hidden"]}`}
        ></div>
        <div className={`${styles.aside__bottom}`}>
          <button className={`${styles.aside__button}`}>
            <img
              src="/src/assets/image/new_chat.svg"
              alt="new chat"
              className={`${styles["aside__button--new-chat"]}`}
            />
            <p className={` ${styles["aside__button--text"]}`}>
              {t("chat_roll_up")}
            </p>
          </button>
          <button
            onClick={handleSettings}
            className={`${styles.aside__button}`}
          >
            <img
              src="/src/assets/image/setting.svg"
              alt="settings"
              className={`${styles["aside__button--settings"]} `}
            />
            <p className={`${styles["aside__button--text"]}`}>
              {t("settings_roll_up")}
            </p>
          </button>
          {openSettings && <Settings onClose={handleSettings} />}
        </div>
      </div>
      <a
        className={`${isOpen ? styles["roll-up"] : styles["roll-out"]}`}
        onClick={handleRollOut}
        href="#open"
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
      </a>
      <aside className={`${isOpen ? styles.open : styles.open__none}`}>
        <img
          src={"/src/assets/image/big_logo.svg"}
          alt="logo"
          className={`${styles.open__logo}`}
        />

        <div className={styles.open__history}>
          <div className={`${styles["open__history--box"]}`}>
            <img
              className={`${styles["open__history--img"]}`}
              src="/src/assets/image/icon_history.svg"
              alt="history"
            />
            <p className={`${styles["open__history--text"]}`}>{t("history")}</p>
          </div>
          <p className={`${styles["open__history--name-chat"]}`}>
            {t("name_of_chat")}
          </p>
        </div>

        <div className={`${styles.open__bottom}`}>
          <button className={`${styles.open__button}`}>
            <img
              src="/src/assets/image/new_chat.svg"
              alt="new chat"
              className={`${styles["open__button--new-chat"]}`}
            />
            <p className={` ${styles["open__button--text"]}`}>
              {t("chat_roll_out")}
            </p>
          </button>
          <button className={`${styles.open__button}`} onClick={handleSettings}>
            <img
              src="/src/assets/image/setting.svg"
              alt="settings"
              className={`${styles["open__button--settings"]} `}
            />
            <p className={`${styles["open__button--text"]}`}>
              {t("settings_roll_out")}
            </p>
          </button>
          {openSettings && <Settings onClose={handleSettings} />}
        </div>
      </aside>
    </>
  );
};
