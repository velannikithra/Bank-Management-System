import React, { useState, ChangeEvent } from "react";
import "./setting.css";
import SidebarComponent from "./sidebar";

// Define the type for the settings state
interface Settings {
  websiteTitle: string;
  websiteColor: string;
  baseCurrency: string;
  currencySymbol: string;
  registration: boolean;
  emailNotification: boolean;
  smsNotification: boolean;
  emailVerification: boolean;
  smsVerification: boolean;
  branding: string;
}

const GeneralSettings: React.FC = () => {
  const [settings, setSettings] = useState<Settings>({
    websiteTitle: "iBanking",
    websiteColor: "#167287",
    baseCurrency: "INR",
    currencySymbol: "₹",
    registration: true,
    emailNotification: true,
    smsNotification: false,
    emailVerification: false,
    smsVerification: false,
    branding: "© 2019 iBanking. All rights reserved",
  });

  // Handle input changes for text and color inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  // Handle toggle changes for boolean values
  const handleToggle = (field: keyof Settings): void => {
    setSettings((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  // Handle update action
  const handleUpdate = (): void => {
    alert("Settings Updated!");
    console.log(settings);
  };

  return (
    <>
      <SidebarComponent />
      <div className="general-settings">
        <h2>General Settings</h2>
        <div className="settings-container">
          <div className="form-group">
            <label>Website Title</label>
            <input
              type="text"
              name="websiteTitle"
              value={settings.websiteTitle}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Website Color</label>
            <input
              type="color"
              name="websiteColor"
              value={settings.websiteColor}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Base Currency</label>
            <input
              type="text"
              name="baseCurrency"
              value={settings.baseCurrency}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Currency Symbol</label>
            <input
              type="text"
              name="currencySymbol"
              value={settings.currencySymbol}
              onChange={handleChange}
            />
          </div>
          <div className="toggle-buttons">
            <div>
              <label>Registration</label>
              <button
                className={settings.registration ? "toggle-on" : "toggle-off"}
                onClick={() => handleToggle("registration")}
              >
                {settings.registration ? "ON" : "OFF"}
              </button>
            </div>
            <div>
              <label>Email Notification</label>
              <button
                className={settings.emailNotification ? "toggle-on" : "toggle-off"}
                onClick={() => handleToggle("emailNotification")}
              >
                {settings.emailNotification ? "ON" : "OFF"}
              </button>
            </div>
            <div>
              <label>SMS Notification</label>
              <button
                className={settings.smsNotification ? "toggle-on" : "toggle-off"}
                onClick={() => handleToggle("smsNotification")}
              >
                {settings.smsNotification ? "ON" : "OFF"}
              </button>
            </div>
            <div>
              <label>Email Verification</label>
              <button
                className={settings.emailVerification ? "toggle-on" : "toggle-off"}
                onClick={() => handleToggle("emailVerification")}
              >
                {settings.emailVerification ? "ON" : "OFF"}
              </button>
            </div>
            <div>
              <label>SMS Verification</label>
              <button
                className={settings.smsVerification ? "toggle-on" : "toggle-off"}
                onClick={() => handleToggle("smsVerification")}
              >
                {settings.smsVerification ? "ON" : "OFF"}
              </button>
            </div>
          </div>
          <button onClick={handleUpdate}>Update Settings</button>
        </div>
      </div>
    </>
  );
};

export default GeneralSettings;

