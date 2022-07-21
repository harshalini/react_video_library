import "./App.css";
import { AppRouter } from "./router/router"
import { MobileNavbar } from "./components/shared/navbar";
import { MobileNav } from "./components/shared/sidebar";
import { toast } from "react-toastify"
toast.configure();

function App() {
  return (
    <div className="App">
      <MobileNavbar />
      <AppRouter />
      <MobileNav />
    </div>
  );
}

export default App;