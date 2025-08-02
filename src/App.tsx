import { useEffect } from "react";

import { Outlet } from "react-router-dom";
import "./app.css";

const App = () => {
  useEffect(() => {
    fetch("http://localhost:3000/me", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Logged in user:", data.user);
        // Save to context or state
      });
  }, []);

  return (
    <div className="dark min-h-screen bg-background text-foreground flex flex-col">
      <header className="p-6 text-center">
        <h1 className="text-4xl font-bold text-white">My Blog</h1>
      </header>

      <main className="flex flex-1 items-center justify-center">
        <Outlet />
      </main>

      <footer className="flex items-center justify-center border-t pt-6 text-sm text-muted-foreground">
        <span>
          © {new Date().getFullYear()} <strong>Eskenazi Ventures LLC</strong>.
          All rights reserved.
        </span>
      </footer>
    </div>
  );
};

export default App;
