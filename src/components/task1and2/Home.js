import React from "react";
import { useSelector } from "react-redux";
function Home() {
  const user = useSelector((state) => state.userDetails);
  return (
    <div className="container">
      <h2 className="text-center">Username:{user.username}</h2>
      <h2 className="text-center">Name:{user.name}</h2>
      <h2 className="text-center">Email:{user.email}</h2>
    </div>
  );
}

export default Home;
