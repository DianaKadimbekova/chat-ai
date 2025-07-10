import "./App.css";
import { ChatScreen } from "./components/ChatScreen/ChatScreen";

export const App: React.FC = () => {
  return (
    <div className="app">
      <ChatScreen />
    </div>
  );
};
