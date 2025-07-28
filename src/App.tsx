import { Outlet } from "react-router-dom";

import "./app.css";

const App = () => {
  return (
    <div>
      <main className="dark">
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2025 My App</p>
      </footer>
    </div>
  );
};
export default App;
