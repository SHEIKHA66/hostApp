import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Location.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Location = () => {
  const [ip, setIp] = useState(null); // State to hold the IP address
  const [geoData, setGeoData] = useState(null); // State to hold geolocation
  const stud = useSelector((state) => state.studs.stud); // Logged-in user details

  // Fetch the IP address dynamically
  const fetchIpAddress = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      setIp(response.data.ip); // Set the IP address in state
    } catch (error) {
      console.error("Error fetching IP address:", error.message);
    }
  };

  // Fetch geolocation data based on the IP
  const getGeoLocationData = async () => {
    if (!ip) return; // Ensure IP is available before making the request
    try {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_NoIYtZEjcgPrsNoDP6ddFmBechC3y&ipAddress=${ip}`
      );
      setGeoData(response.data); // Set geolocation data in state
      console.log("GeoLocation Data:", response.data);
    } catch (error) {
      console.error("Error fetching geolocation data:", error.message);
    }
  };

  // Fetch the IP address when the component is loaded
  useEffect(() => {
    fetchIpAddress();
  }, []);
  // Fetch geolocation data when the IP is updated
  useEffect(() => {
    if (ip) {
      getGeoLocationData();
    }
  }, [ip]);
  return (
    <div className="location">
      <h1>Location</h1>
      <div className="form-header">
        <p>
          Welcome, <strong>{stud.name}</strong>!
        </p>
      </div>
      <br />
      <br />
      {ip ? <p>IP Address: {ip}</p> : <p>Loading IP address...</p>}
      {geoData ? (
        <div>
          Country: {geoData.location.country}
          <br />
          Region: {geoData.location.region}
        </div>
      ) : (
        <p>Loading Geolocation Data...</p>
      )}
      <br></br>
      <div>
        <Link to={`/studpage`} className="nav-link">
          <button className="btn btn-success">Previous</button>
        </Link>
      </div>
    </div>
  );
};
export default Location;
