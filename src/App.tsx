import "./App.css";
import { Main } from "./components/Main/Main";
import { SideBar } from "./components/SideBar/SideBar";

export const App: React.FC = () => {
  return (
    <div className="app">
      <SideBar />
      <Main />
    </div>
  );
};
