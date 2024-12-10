import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./HostelForm.css"; // Import external CSS for styling
import { Link } from "react-router-dom";

const HostelForm = () => {
  const stud = useSelector((state) => state.studs.stud); // Logged-in user details
  const [stayedBefore, setStayedBefore] = useState(false);
  const [yearsStayed, setYearsStayed] = useState(0);
  const [rentalPrice, setRentalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const calculateDiscount = () => {
    let discountAmount = 0;
    if (stayedBefore) {
      if (yearsStayed === 1) discountAmount = 0.02 * rentalPrice;
      else if (yearsStayed === 2) discountAmount = 0.04 * rentalPrice;
      else if (yearsStayed === 3) discountAmount = 0.05 * rentalPrice;
      else if (yearsStayed >= 4) discountAmount = 0.1 * rentalPrice;
    }
    setDiscount(discountAmount);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/saveHostelData",
        {
          name: stud.name,
          email: stud.email,
          stayedBefore,
          yearsStayed,
          rentalPrice,
          discount,
        }
      );
      alert("Data saved successfully!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Error saving data.");
    }
  };

  return (
    <div className="hostel-form-container">
      <div className="form-header">
        <h2>Hostel Form</h2>
        <p>
          Welcome, <strong>{stud.name}</strong>! Please fill out the form below.
        </p>
      </div>
      <form className="hostel-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Have you stayed in the hostel before?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="stayedBefore"
                onChange={() => setStayedBefore(true)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="stayedBefore"
                onChange={() => setStayedBefore(false)}
              />{" "}
              No
            </label>
          </div>
        </div>

        {stayedBefore && (
          <div className="form-group">
            <label>How many years have you stayed?</label>
            <input
              type="number"
              value={yearsStayed}
              onChange={(e) => setYearsStayed(Number(e.target.value))}
              min="0"
              className="form-control"
              placeholder="Enter years stayed"
            />
          </div>
        )}

        <div className="form-group">
          <label>Enter Rental Price:</label>
          <input
            type="number"
            value={rentalPrice}
            onChange={(e) => setRentalPrice(Number(e.target.value))}
            min="0"
            className="form-control"
            placeholder="Enter rental price"
          />
        </div>

        <button
          type="button"
          className="btn calculate-btn"
          onClick={calculateDiscount}
        >
          Calculate Discount
        </button>

        {discount > 0 && (
          <div className="discount-display">
            Your discount is: <strong>OMR {discount.toFixed(2)}</strong>
          </div>
        )}

        <button type="submit" className="btn submit-btn">
          Save
        </button>
      </form>

      <div>
        <Link to={`/studpage`} className="nav-link">
          <button className="btn btn-success">Previous</button>
        </Link>
      </div>
    </div>
  );
};

export default HostelForm;
