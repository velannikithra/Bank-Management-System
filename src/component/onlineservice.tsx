import React, { useState } from "react";
import "./onlineservice.css";

// Define types for the state
interface OnlineserviceState {
  balance: number;
  amount: string;
  ifsc: string;
  accountNo: string;
}

function Onlineservice() {
  // Define the state variables with types
  const [balance, setBalance] = useState<number>(50000);
  const [amount, setAmount] = useState<string>("");
  const [ifsc, setIfsc] = useState<string>(""); // State for IFSC code
  const [accountNo, setAccountNo] = useState<string>(""); // State for Account Number

  // Input change handlers
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleIfscChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIfsc(e.target.value.toUpperCase()); // Convert input to uppercase
  };

  const handleAccountNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountNo(e.target.value);
  };

  // Validation for IFSC Code
  const validateIFSC = (code: string): boolean => {
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    if (!code.trim()) {
      alert("IFSC Code is required.");
      return false;
    }
    if (!ifscRegex.test(code)) {
      alert("Invalid IFSC Code. Please enter a valid 11-character IFSC code.");
      return false;
    }
    return true;
  };

  // Validation for Account Number
  const validateAccountNumber = (number: string): boolean => {
    const accountRegex = /^[0-9]{9,18}$/; // Example: 9-18 digits for account numbers
    if (!number.trim()) {
      alert("Account Number is required.");
      return false;
    }
    if (!accountRegex.test(number)) {
      alert("Invalid Account Number. Please enter a valid 9-18 digit number.");
      return false;
    }
    return true;
  };

  // Validation function for all inputs
  const validateInputs = (): boolean => {
    if (!validateIFSC(ifsc)) return false;
    if (!validateAccountNumber(accountNo)) return false;

    // Check for valid amount
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Please enter a valid positive number for the amount.");
      return false;
    }

    return true;
  };

  // Deposit function
  const handleDeposit = () => {
    if (!validateInputs()) return; // Validate inputs before proceeding

    const depositAmount = parseFloat(amount);
    setBalance((prev) => prev + depositAmount);
    setAmount(""); // Reset input field
  };

  // Withdraw function
  const handleWithdraw = () => {
    if (!validateInputs()) return; // Validate inputs before proceeding

    const withdrawAmount = parseFloat(amount);

    // Check for insufficient balance
    if (withdrawAmount > balance) {
      alert("Insufficient balance!");
      return;
    }

    setBalance((prev) => prev - withdrawAmount);
    setAmount(""); // Reset input field
  };

  // Reset function to clear inputs
  const handleReset = () => {
    setAmount("");
    setIfsc("");
    setAccountNo("");
  };

  return (
    <>
      <div className="box-container">
        <div className="online">
          <h4>Online Service</h4>
          <p className="ps">Balance: ${balance.toFixed(2)}</p>
        </div>
        <div className="onlines">
          <input
            type="text"
            value={ifsc}
            placeholder="Enter IFSC Code"
            onChange={handleIfscChange}
          />
          <input
            type="text"
            value={accountNo}
            placeholder="Enter Account Number"
            onChange={handleAccountNoChange}
          />
          <input
            type="number"
            value={amount}
            placeholder="Enter Amount"
            onChange={handleAmountChange}
          />
          <div className="handbutton">
            <button className="deposit" onClick={handleDeposit}>
              Deposit
            </button>
            <button className="withdraw" onClick={handleWithdraw}>
              Withdraw
            </button>
            <button className="reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Onlineservice;
