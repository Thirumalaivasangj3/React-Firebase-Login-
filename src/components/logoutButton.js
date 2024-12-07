import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { toast } from "react-toastify";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        toast.success("Logged out successfully", {
          position: "top-center",
        });
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "bottom-center",
        });
      });
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
