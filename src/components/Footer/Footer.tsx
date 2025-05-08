import { useState } from "react";
import "./Footer.scss";
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
    <footer className="footer">
      <form className="footer__input-box" onSubmit={handleSubmit}>
        <input
          type="text"
          className="footer__input"
          placeholder="Ask anything..."
          value={message}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="footer__button-submit"
          disabled={!message.trim()}
        >
          <FiArrowUpRight className="footer__send-icon" />
        </button>
      </form>
    </footer>
  );
};
