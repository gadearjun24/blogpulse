import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <center>
        <h1>Bad request 404!</h1>
        <h3
          style={{
            marginTop: "20px",
          }}
        >
          Page Not Found <Link to={"/"}> Click to back home</Link>
        </h3>
      </center>
    </div>
  );
}

export default NotFound;
