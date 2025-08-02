import { useEffect } from "react";

const AuthSuccess = () => {
  useEffect(() => {
    fetch("http://localhost:3000/me", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Logged in user:", data.user);
        // Store in context or redirect accordingly
      });
  }, []);

  return <div>Login successful! Redirecting...</div>;
};

export default AuthSuccess;
