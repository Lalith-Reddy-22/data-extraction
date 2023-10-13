import axios from "axios";
import React, { useEffect, useState } from "react";
import "./FetchData.css"; // Import a CSS file for styling

function FetchData() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setRecords(res.data.users); // Access the "users" property in the response
      })
      .catch((err) => {
        console.error(err); // Log the error to the console
        setRecords([]); // Set records to an empty array or handle the error as needed
      });
  }, []);

  return (
    <div className="center-text">
      <h1>Dummy Data</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, i) => (
            <tr key={i}>
              <td>{record.id}</td>
              <td>
                <img
                  src={record.image}
                  alt={`Profile Pic ${i}`}
                  width="50"
                  height="50"
                />
              </td>
              <td>{record.firstName}</td>
              <td>{record.lastName}</td>
              <td>{record.gender}</td>
              <td>{record.email}</td>
              <td>{record.username}</td>
              <td>{record.domain}</td>
              <td>{record.ip}</td>
              <td>{record.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchData;
