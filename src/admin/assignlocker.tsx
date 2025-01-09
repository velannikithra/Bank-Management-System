import React, { useState } from "react";
import SidebarComponent from "./sidebar";

const AssignLocker: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    lockerNumber: "",
  });

  // Handle form submission and other logic

  return (
    <>
      <SidebarComponent />
      <div style={{ padding: "20px" }}>
        <div style={{ marginBottom: "20px" }}>
          <h3 className="locker">Assign a Locker</h3>
          <form>
            <div style={{ marginBottom: "10px" }}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ padding: "8px", fontSize: "14px" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ padding: "8px", fontSize: "14px" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Locker Number:</label>
              <input
                type="text"
                name="lockerNumber"
                value={formData.lockerNumber}
                onChange={(e) => setFormData({ ...formData, lockerNumber: e.target.value })}
                style={{ padding: "8px", fontSize: "14px" }}
              />
            </div>
            <button type="submit" style={{ padding: "10px", backgroundColor: "#4CAF50", color: "white" }}>
              Assign Locker
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AssignLocker;
