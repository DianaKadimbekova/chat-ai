import { createPortal } from "react-dom";
import styles from "./Settings.module.scss";
import { useTranslation } from "react-i18next";

const settings = document.getElementById("settings");

interface SettingsProps {
  onClose: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onClose }) => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  if (!settings) return null;
  return createPortal(
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.settings}>
        <div className={styles.settings__title}>{t("settings_title")}</div>
        <hr className={styles.settings__line} />
        <div className={styles.settings__list}>
          <div className={`${styles["settings__item"]} ${styles["item"]}`}>
            <span className={styles.item__name}>{t("theme")}</span>
            <div className={styles.item__box}>
              <svg
                width="16"
                height="14"
                x="0"
                y="0"
                viewBox="0 0 512.021 512.021"
              >
                <path
                  d="M304.947 385.93v8.714h-97.382v-8.714H0v3.584c0 5.642 2.048 11.274 6.154 15.38 4.096 4.096 9.738 6.154 15.38 6.154h468.951c5.642 0 11.274-2.048 15.38-6.154 4.096-4.096 6.154-9.738 6.154-15.38v-3.584H304.947zM68.68 400.276H47.155v-2.56H68.68v2.56zM60.989 377.728H451.01c3.584 0 7.178-1.536 9.738-4.096s4.096-6.154 4.096-9.738V114.806c0-3.584-1.536-7.178-4.096-9.738s-6.154-4.096-9.738-4.096H60.989c-3.584 0-7.178 1.536-9.738 4.096s-4.096 6.154-4.096 9.738v249.078c0 3.584 1.536 7.178 4.096 9.738 3.072 3.082 6.154 4.106 9.738 4.106zm195.267-270.602c2.56 0 4.608 2.048 4.608 4.608s-2.048 4.608-4.608 4.608-4.608-2.048-4.608-4.608 2.048-4.608 4.608-4.608zm-187.064 15.37h374.139v233.707H69.192V122.496z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                ></path>
              </svg>
              <select
                onChange={(e) => e.target.blur()}
                className={styles.item__list}
              >
                <option className={styles.item__option}>{t("system")}</option>
                <option className={styles.item__option}>{t("dark")}</option>
                <option className={styles.item__option}>{t("light")}</option>
              </select>
            </div>
          </div>
          <hr className={styles.settings__line} />

          <div className={`${styles["settings__item"]} ${styles["item"]}`}>
            <span className={styles.item__name}>{t("language")}</span>
            <div className={styles.item__box}>
              <svg width="14" height="14" x="0" y="0" viewBox="0 0 512 512">
                <path
                  d="M256 0C115.041 0 0 115.049 0 256c0 140.959 115.049 256 256 256 140.959 0 256-115.049 256-256C512 115.041 396.951 0 256 0zm-76.362 43.29c-17.564 22.331-30.328 49.94-39.16 76.71H75.621c26.263-34.746 62.314-61.693 104.017-76.71zM56.452 149.9h75.538c-6.786 28.437-10.792 59.307-11.754 91.1H30.51c2.154-32.707 11.293-63.633 25.942-91.1zm0 212.1c-14.649-27.467-23.788-58.293-25.942-91h89.726c.962 31.793 4.968 62.563 11.754 91H56.452zm19.169 30h64.856c8.83 26.763 21.594 54.376 39.161 76.71-41.703-15.017-77.754-41.964-104.017-76.71zM241 479.454C207.509 468.196 184.418 425.2 172.222 392H241v87.454zM241 362h-78.115c-7.29-28.035-11.61-58.884-12.637-91H241v91zm0-121h-90.752c1.028-32.116 5.348-62.965 12.637-91H241v91zm0-121h-68.778C184.417 86.801 207.509 43.804 241 32.546V120zm214.548 30c14.65 27.467 23.788 58.293 25.942 91h-89.726c-.962-31.793-4.968-62.563-11.754-91h75.538zm-19.169-30h-64.856c-8.83-26.763-21.594-54.376-39.161-76.71 41.703 15.017 77.754 41.964 104.017 76.71zM271 32.546C304.491 43.804 327.582 86.8 339.778 120H271V32.546zM271 150h78.115c7.29 28.035 11.61 58.884 12.637 91H271v-91zm0 120.9h90.752c-1.028 32.116-5.348 63.065-12.637 91.1H271v-91.1zm0 208.554V391.9h68.778c-12.195 33.199-35.287 76.296-68.778 87.554zm61.362-10.744c17.564-22.331 30.328-50.041 39.161-76.81h64.856c-26.263 34.746-62.314 61.793-104.017 76.81zM455.548 362H380.01c6.786-28.437 10.792-59.307 11.754-91.1h89.726c-2.154 32.707-11.293 63.633-25.942 91.1z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                ></path>
              </svg>
              <select
                onChange={(e) => {
                  i18n.changeLanguage(e.target.value);
                  e.target.blur();
                }}
                className={styles.item__list}
              >
                <option value={"en"} className={styles.item__option}>
                  {t("english")}
                </option>
                <option value={"uk"} className={styles.item__option}>
                  {t("ukraine")}
                </option>
              </select>
            </div>
          </div>

          <hr className={styles.settings__line} />
          <div className={`${styles["settings__item"]} ${styles["item"]}`}>
            <span className={styles.item__name}>{t("model")}</span>
            <div className={styles.item__box}>
              <svg width="16" height="16" x="0" y="0" viewBox="0 0 24 24">
                <path
                  fill="#000000"
                  d="m16.004 9.414-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2z"
                  opacity="1"
                  data-original="#000000"
                ></path>
              </svg>
              <button className={styles.item__choose}>
                {t("choose_here")}
              </button>
            </div>
          </div>
        </div>
        <button className={styles.settings__btn} onClick={onClose}>
          <svg
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 404.43"
            className={`${styles["settings__btn--arrow"]}`}
          >
            <path
              fill-rule="nonzero"
              d="m68.69 184.48 443.31.55v34.98l-438.96-.54 173.67 159.15-23.6 25.79L0 199.94 218.6.02l23.6 25.79z"
            />
          </svg>
          <span className={`${styles["settings__btn--text"]}`}>
            {t("back")}
          </span>
        </button>
      </div>
    </>,
    settings
  );
};
