import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [tagline, setTagline] = useState("");

  const calculateBMI = () => {
    if (height && weight) {
      if (height > 0 && weight > 0) {
        const heightInMeters = height / 100; // Convert cm to meters
        const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(bmiValue);

        if (bmiValue < 18.5) {
          setTagline("You are underweight.");
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
          setTagline("You have a normal weight.");
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
          setTagline("You are overweight.");
        } else {
          setTagline("You are obese.");
        }
      } else {
        alert("Height and weight must be positive values!");
      }
    } else {
      alert("Please enter valid height and weight!");
    }
  };

  return (
    <div className="app">
      {/* Top Navigation Bar */}
      <div className="top-navbar">
        <h2 className="brand">BMI Wala</h2>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      {/* Main Container */}
      <div className="main-container">
        <h1>BMI Calculator</h1>
        <div className="input-container">
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <button onClick={calculateBMI}>Calculate</button>
        </div>
        {bmi && (
          <div className="result-container">
            <h2>Your BMI: {bmi}</h2>
            <p>{tagline}</p>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <h3>Contact us</h3>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/abhishek-3028192a3/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.png" alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/Ak-official881" target="_blank" rel="noopener noreferrer">
            <img src="github.png" alt="GitHub" />
            <span>GitHub</span>
          </a>
          <a href="mailto:ak.official881@gmail.com">
            <img src="gmail.png" alt="Gmail" />
            <span>Gmail</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;