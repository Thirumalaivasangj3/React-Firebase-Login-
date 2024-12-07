import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import "./Profile.css"; // Custom CSS for styling

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserDetails({ firstName: user.displayName }); // Simulating user details
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className="profile-container">
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
      {userDetails ? (
        <>
          <header className="hero-section">
            <div className="hero-content">
              <h1>Welcome, {userDetails.firstName} 🙏🙏</h1>
              <p>Your daily dose of motivation and positivity.</p>
            </div>
          </header>

          <section className="motivation-section">
            <h2>Today's Motivation</h2>
            <div className="quote-container">
              <p className="quote">
                "Believe you can and you're halfway there."
              </p>
              <p className="author">- Theodore Roosevelt</p>
            </div>
            <div className="quote-container">
              <p className="quote">
                "The only way to do great work is to love what you do."
              </p>
              <p className="author">- Steve Jobs</p>
            </div>
          </section>

          <section className="about-section">
            <h2>About Us</h2>
            <p>
              We're here to inspire and motivate you every day. Embrace the
              positive energy!
            </p>
          </section>

          <section className="contact-section">
            <h2>Contact Us</h2>
            <p>For any queries or assistance, feel free to reach out to us.</p>
          </section>

          <section className="new-section">
            <h2>New Section</h2>
            <p>Stay tuned for more exciting updates and content!</p>
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
