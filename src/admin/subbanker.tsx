import React, { useState, ChangeEvent, FormEvent } from "react";
import SidebarComponent from "./sidebar";

// Define a simple styles object for inline styles with proper typing
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column" as "column", // TypeScript expects a valid CSS value
    width: "300px",
  },
  inputGroup: {
    marginBottom: "10px",
  },
  input: {
    padding: "8px",
    marginTop: "5px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
};

interface FormData {
  name: string;
  email: string;
  phone: string;
}


const SubbankerForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add form validation here if needed
    alert("Form Submitted");
  };

  return (
    <>
      <SidebarComponent />
      <div style={styles.container}>
        <h2>Subbanker Form</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.name && <p style={styles.error}>{errors.name}</p>}
          </div>
          <div style={styles.inputGroup}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.email && <p style={styles.error}>{errors.email}</p>}
          </div>
          <div style={styles.inputGroup}>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.phone && <p style={styles.error}>{errors.phone}</p>}
          </div>
          <button type="submit" style={{ ...styles.input, backgroundColor: "#4CAF50", color: "white" }}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SubbankerForm;
