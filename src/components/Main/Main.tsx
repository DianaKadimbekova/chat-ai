import { useTranslation } from "react-i18next";
import { ChatBox } from "../ChatBox/ChatBox";
import styles from "./Main.module.scss";

export const Main: React.FC = () => {
  const { t } = useTranslation();
  return (
    <main className={styles.main}>
      <img
        className={styles.main__logo}
        src="/src/assets/image/big_logo.svg"
        alt="Big logo"
      />
      <p className={styles.main__text}>{t("signature")}</p>
      <ChatBox />
    </main>
  );
};
