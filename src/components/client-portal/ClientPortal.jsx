import React from "react";

const ClientPortal = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Access Your Client Portal</h2>
      <a
        href="https://ahsuite.com/login"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "12px 24px",
          backgroundColor: "#2d72d9",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px",
          fontSize: "16px",
        }}
      >
        Login to Ahsuite
      </a>
    </div>
  );
};

export default ClientPortal;
