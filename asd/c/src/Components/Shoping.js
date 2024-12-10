import React, { useState } from "react";
import { Link } from "react-router-dom";
//import "./Shoping.css"; // Include this line in your Shoping component
import { useSelector } from "react-redux";
const Shoping = () => {
  const [num, setNum] = useState(0);
  const [targetCurrency, setTargetCurrency] = useState("sohar");

  const stud = useSelector((state) => state.studs.stud); // Logged-in user details
  const handleRadioChange = (e) => {
    setTargetCurrency(e.target.value);
  };

  const convertCurrency = () => {
    const rates = { sohar: 2, Fujairah: 3 };
    const result = num * rates[targetCurrency];
    return result.toFixed(2);
  };
  const rates = { sohar: 2, Fujairah: 3 };
  const dis = () => {
    const Dis =
      num > 10
        ? 0.5 * (num * rates[targetCurrency])
        : 0.0 * (num * rates[targetCurrency]);

    return Dis.toFixed(2);
  };

  return (
    <div className="shoping">
      <div className="form-header">
        <p>
          Welcome, <strong>{stud.name}</strong>!
        </p>
      </div>
      <h3>
        Please take note that before getting off the bus, students must adhere
        to the return time specified by the bus owner.
      </h3>

      <table className="table table-striped">
        <thead>
          <tr>
            <td colSpan="3" style={{ textAlign: "center" }}>
              <h1>Shopping</h1>
            </td>
          </tr>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Shopping Place</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sunday or Monday</td>
            <td>5:43</td>
            <td>Shinas Mall</td>
          </tr>
          <tr>
            <td colSpan="3" style={{ textAlign: "center" }}>
              <h1>Trip </h1>
            </td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>6:00</td>
            <td>Sohar (China Downtown+city)</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>5:00</td>
            <td>Fujairah(Central Market + Umbrella beach + Masafi Village)</td>
          </tr>
          <tr>
            <td colSpan="3">
              <h1>Trip Price</h1>
              <label>
                Number of Girls
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => setNum(Number(e.target.value))}
                />
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="currency"
                  value="sohar"
                  checked={targetCurrency === "sohar"}
                  onChange={handleRadioChange}
                />
                sohar
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="currency"
                  value="Fujairah"
                  checked={targetCurrency === "Fujairah"}
                  onChange={(e) => setTargetCurrency(e.target.value)}
                />
                Fujairah
              </label>
              <br />

              <br />
              <h2 className="display-6">
                Regular price: {convertCurrency()} OMR{" "}
              </h2>
              <h2 className="display-6">
                if there are more than 10 students there will be discount :{" "}
                {dis()} OMR
              </h2>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <Link to={`/studpage`} className="nav-link">
          <button className="btn btn-success">Previous</button>
        </Link>
      </div>
    </div>
  );
};

export default Shoping;
