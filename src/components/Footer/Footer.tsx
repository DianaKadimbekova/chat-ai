import { useState } from "react";
import styles from "./Footer.module.scss";
import { FiArrowUpRight } from "react-icons/fi";

interface FooterProps {
  handleSendMessage?: (message: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ handleSendMessage }) => {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (message.trim()) {
      handleSendMessage?.(message);
      setMessage("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <footer className={styles.footer}>
      <form className={styles["footer__input-box"]} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles["footer__input"]}
          placeholder="Ask anything..."
          value={message}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className={styles["footer__button-submit"]}
          disabled={!message.trim()}
        >
          <FiArrowUpRight className={styles["footer__send-icon"]} />
        </button>
      </form>
    </footer>
  );
};
