import React, { useState } from "react";
import {
  FaUserCircle, // Profile icon for admin
  FaSignOutAlt, // Logout icon
} from "react-icons/fa"; // Importing necessary icons from react-icons
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Link } from "react-router-dom";
import SidebarComponent from "./sidebar";
import "./dashboard.css"; // Include your CSS file for customization

// Define type for the data used in the chart
interface ChartData {
  month: string;
  deposits: number;
  withdrawals: number;
  customers: number;
}

const Dashboard: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const data: ChartData[] = [
    { month: "Jan", deposits: 5000, withdrawals: 3000, customers: 200 },
    { month: "Feb", deposits: 7000, withdrawals: 4000, customers: 220 },
    { month: "Mar", deposits: 8000, withdrawals: 4500, customers: 250 },
    { month: "Apr", deposits: 10000, withdrawals: 6000, customers: 270 },
    { month: "May", deposits: 9500, withdrawals: 5000, customers: 300 },
  ];

  // Toggle dropdown visibility when profile icon is clicked
  const toggleDropdown = (): void => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <SidebarComponent />
      <div className="main-content">
        <div className="chart-section">
          <h3 className="trading">Trading Activity</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="deposits"
                fill="#8884d8"
                name="Deposits ($)"
              />
              <Bar
                yAxisId="left"
                dataKey="withdrawals"
                fill="#82ca9d"
                name="Withdrawals ($)"
              />
              <Bar
                yAxisId="left"
                dataKey="customers"
                fill="#ffc658"
                name="Customer Count"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
