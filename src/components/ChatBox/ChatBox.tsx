import { useState } from "react";
import styles from "./ChatBox.module.scss";
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";

interface ChatBoxProps {
  handleSendMessage?: (message: string) => void;
}

const modals = [
  { id: 0, value: "Gemini", label: "gemini" },
  { id: 1, value: "gpt-4", label: "gpt-4o" },
  { id: 2, value: "claude-3", label: "claude 3" },
  { id: 3, value: "deepseek", label: "deepSeek" },
  { id: 4, value: "perplexity", label: "perplexity" },
];

export const ChatBox: React.FC<ChatBoxProps> = ({ handleSendMessage }) => {
  const [message, setMessage] = useState<string>("");
  const [selectModal, setSelectModal] = useState(modals[0].value);

  const { t } = useTranslation();

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
    <form className={styles["footer__input-box"]} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles["footer__input"]}
        placeholder={t("ask")}
        value={message}
        onChange={handleInputChange}
      />
      <div className={styles.footer__controls}>
        <select
          className={styles.footer__dropdown}
          value={selectModal}
          onChange={(e) => {
            setSelectModal(e.target.value);
            e.target.blur();
          }}
        >
          {modals.map((modal) => (
            <option
              key={modal.id}
              value={modal.value}
              className={`${styles["footer__dropdown--item"]}`}
            >
              {modal.label}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className={styles["footer__button-submit"]}
          disabled={!message.trim()}
        >
          <FiArrowUpRight className={styles["footer__send-icon"]} />
        </button>
      </div>
    </form>
  );
};
