import React from "react";
import LogoutButton from "./logoutButton";


function UserProfile() {
  return (
    <div>
      <h2>User Profile</h2>
      <LogoutButton />
      <p>Welcome to your user dashboard!</p>
    </div>
  );
}

export default UserProfile;
