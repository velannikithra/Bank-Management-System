import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation logic
    if (!username || !password) {
      setError('Both fields are required!');
      return;
    }

    // Clear error
    setError('');

    // Save the password securely in localStorage (use cautiously in real-world apps)
    localStorage.setItem('password', password);

    // Perform login logic (e.g., API call or authentication)
    console.log('Login successful:', { username, password });

    // Navigate to the dashboard on successful login
    navigate('/sidebar');
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', textAlign: 'center', padding: '20px', fontFamily: 'Arial' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>
        {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px',
            width: '100%',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
