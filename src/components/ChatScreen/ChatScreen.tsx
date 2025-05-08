import { Footer } from "../Footer/Footer";
import { Main } from "../Mainn/Main";
import "./ChatScreen.scss";

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
