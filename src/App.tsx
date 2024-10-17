import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/header/Header";
import UserProfile from "./components/userProfile/UserProfile";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext";
import store from "./store";

function AppContent() {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background dark:bg-dark-bg text-text-primary dark:text-white transition-colors duration-300 p-6 font-mono">
        <div className="max-w-xl mx-auto">
          <Header />
          <UserProfile/>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store} >
      <DarkModeProvider>
        <AppContent />
      </DarkModeProvider>
    </Provider>
  );
}

export default App;
