import { Footer } from "../Footer/Footer";
import { Main } from "../Main/Main";
import "./ChatScreen.module.scss";

export const ChatScreen: React.FC = () => {
  const handleSendMessage = (message: string) => {
    console.log("Відправлено:", message);
  };

  return (
    <div className="chat-screen">
      <Main />
      <Footer handleSendMessage={handleSendMessage} />
    </div>
  );
};
