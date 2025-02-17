import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Inaccessible.css";
import NotFound_404 from "../assets/img/not-found.png";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound">
      <img src={NotFound_404} alt="Not Found" />
      <h1>404: Page Not Found</h1>
      <p>
        We're sorry, but the page you are looking for doesn't exist or has been
        moved.
      </p>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
}

export default NotFound;
