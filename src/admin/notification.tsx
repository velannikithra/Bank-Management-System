import React, { useState } from "react";
import SidebarComponent from "./sidebar";

const NotificationComponent: React.FC = () => {
  const [message, setMessage] = useState<string>(""); // Type the state as string
  const [balance, setBalance] = useState<number>(500); // Type the balance as number

  const handleSetNotification = (): void => {
    if (balance === 500) {
      if (message.trim()) {
        alert(`Notification for User: ${message}`); // Show the notification as an alert
        setMessage(""); // Clear the input field
      } else {
        alert("Please enter a notification message."); // Handle empty input
      }
    } else {
      alert("Notification can only be set for customers with a balance of 500 rupees.");
    }
  };

  return (
    <>
      <SidebarComponent />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h1>Admin Notification Panel</h1>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Enter notification message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                padding: "10px",
                width: "300px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                marginRight: "10px",
              }}
            />
            <button
              onClick={handleSetNotification}
              style={{
                padding: "10px 20px",
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Set Notification
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationComponent;
