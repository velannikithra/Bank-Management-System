import React, { useState, ChangeEvent, FormEvent } from "react";
import "./create.css";

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  birthMonth: string;
  birthDay: string;
  birthYear: string;
  username: string;
  keepInformed: string;
  avatar: File | null;
}

interface Customer extends FormData {
  id: number;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    username: "",
    keepInformed: "",
    avatar: null,
  });

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [errors, setErrors] = useState<Partial<FormData & { birthDate?: string }>>({});
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, avatar: e.target.files[0] });
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData & { birthDate?: string }> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";

    if (!formData.birthMonth || !formData.birthDay || !formData.birthYear)
      newErrors.birthDate = "Complete Birth Date is required";

    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.keepInformed) newErrors.keepInformed = "Choose Yes or No";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const newCustomer: Customer = { ...formData, id: editingIndex ?? Date.now() };

      if (editingIndex !== null) {
        const updatedCustomers = customers.map((customer, index) =>
          index === editingIndex ? newCustomer : customer
        );
        setCustomers(updatedCustomers);
        setEditingIndex(null);
      } else {
        setCustomers([...customers, newCustomer]);
      }

      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        birthMonth: "",
        birthDay: "",
        birthYear: "",
        username: "",
        keepInformed: "",
        avatar: null,
      });
      alert("Customer saved successfully!");
    }
  };

  const handleEdit = (index: number) => {
    setFormData(customers[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    setCustomers(customers.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            value={formData.middleName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
        </div>

        <div>
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="ex: myname@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Birth Date</label>
          <select name="birthMonth" value={formData.birthMonth} onChange={handleChange}>
            <option value="">Please select a month</option>
            {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(
              (month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              )
            )}
          </select>
          <select name="birthDay" value={formData.birthDay} onChange={handleChange}>
            <option value="">Please select a day</option>
            {[...Array(31)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select name="birthYear" value={formData.birthYear} onChange={handleChange}>
            <option value="">Please select a year</option>
            {[...Array(100)].map((_, i) => (
              <option key={i} value={2024 - i}>
                {2024 - i}
              </option>
            ))}
          </select>
          {errors.birthDate && <p style={{ color: "red" }}>{errors.birthDate}</p>}
        </div>

        <div>
          <label>Preferred Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        </div>

        <div>
          <label>Keep me informed</label>
          <label>
            <input
              type="radio"
              name="keepInformed"
              value="Yes"
              checked={formData.keepInformed === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="keepInformed"
              value="No"
              checked={formData.keepInformed === "No"}
              onChange={handleChange}
            />
            No
          </label>
          {errors.keepInformed && <p style={{ color: "red" }}>{errors.keepInformed}</p>}
        </div>

        <div>
          <label>Upload Avatar</label>
          <input type="file" name="avatar" onChange={handleFileChange} />
        </div>

        <div>
          <button type="submit">{editingIndex !== null ? "Update" : "Submit"}</button>
        </div>
      </form>

      <h2 className="customer">Customer Details</h2>
      {customers.length > 0 ? (
        <table border={1} cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={customer.id}>
                <td>
                  {customer.firstName} {customer.lastName}
                </td>
                <td>{customer.email}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No customers found</p>
      )}
    </div>
  );
};

export default RegistrationForm;
