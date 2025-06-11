import "./App.css";
//import { ChatScreen } from "./components/ChatScreen/ChatScreen";
import { SideBar } from "./components/SideBar/SideBar";

export const App: React.FC = () => {
  return (
    <div className="app">
      <SideBar />
    </div>
  );
};
