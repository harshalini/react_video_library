import "./App.css";
import { AppRouter } from "./router/router"
import { toast } from "react-toastify"
toast.configure();

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;