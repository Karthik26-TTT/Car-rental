import React from "react";

const gradientText = {
  fontSize: "2.5rem",
  fontWeight: 900,
  background: "linear-gradient(90deg, #fbbf24 10%, #f59e42 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
  letterSpacing: "2px",
  textShadow: "4px 4px 16px rgba(0,0,0,0.18)",
  marginBottom: 10,
  lineHeight: 1.1,
  textAlign: "center",
};

const subtitleStyle = {
  fontFamily: "Pacifico, Brush Script MT, cursive, sans-serif",
  fontSize: "1.3rem",
  color: "#fbbf24",
  marginBottom: 12,
  textShadow: "2px 2px 8px rgba(0,0,0,0.18)",
  letterSpacing: "2px",
  textAlign: "center",
};

const cardStyle = {
  background: "rgba(30, 58, 138, 0.85)",
  borderRadius: 24,
  padding: "32px 16px",
  margin: "32px auto",
  boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
  maxWidth: 420,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backdropFilter: "blur(12px)",
  border: "1.5px solid rgba(255,255,255,0.18)",
  width: "95vw",
};

const serviceTitleStyle = {
  fontSize: "1.1rem",
  color: "#fbbf24",
  marginBottom: 14,
  fontWeight: 700,
  textAlign: "center",
  letterSpacing: 1,
  textShadow: "1px 1px 4px rgba(0,0,0,0.12)",
};

const serviceListStyle = {
  listStyle: "none",
  padding: 0,
  margin: "0 auto",
  maxWidth: 320,
  width: "100%",
};

const serviceItemStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: 12,
  fontSize: "1rem",
  color: "#fff",
  textShadow: "1px 1px 3px rgba(0,0,0,0.18)",
  letterSpacing: 0.5,
  gap: 10,
};

const bulletStyle = {
  color: "#fbbf24",
  fontSize: "1.2rem",
  marginRight: 10,
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
};

const contactCardStyle = {
  display: "flex",
  alignItems: "center",
  background: "linear-gradient(90deg, #fbbf24 60%, #f59e42 100%)",
  padding: "16px 20px",
  borderRadius: 18,
  boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
  maxWidth: 320,
  border: "1.5px solid rgba(255,255,255,0.18)",
  margin: "18px auto 0",
  width: "100%",
};

const phoneIconStyle = {
  background: "#3b82f6",
  width: 44,
  height: 44,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 16,
  boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
};

const phoneLabelStyle = {
  fontSize: "0.95rem",
  color: "#374151",
  marginBottom: 2,
  fontWeight: 600,
};

const phoneNumberStyle = {
  fontSize: "1.15rem",
  fontWeight: 900,
  color: "#111827",
  letterSpacing: 1,
  textDecoration: "none",
  transition: "color 0.3s ease",
  cursor: "pointer",
  display: "block",
};

const appBg = {
  minHeight: "100vh",
  minWidth: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)",
  padding: 0,
};

const App = () => {
  return (
    <div style={appBg}>
      <div style={cardStyle}>
        <div style={{ width: "100%" }}>
          <div style={subtitleStyle}>Rental CARZZ.</div>
          <div style={gradientText}>Budget Friendly Cars Hyderabad</div>
        </div>
        <div style={{ width: "100%", marginTop: 18 }}>
          <div style={serviceTitleStyle}>SERVICE WE OFFER :</div>
          <ul style={serviceListStyle}>
            <li style={serviceItemStyle}>
              <span style={bulletStyle}>▶</span>24/7 Customer Service
            </li>
            <li style={serviceItemStyle}>
              <span style={bulletStyle}>▶</span>UNLIMITED KMS
            </li>
            <li style={serviceItemStyle}>
              <span style={bulletStyle}>▶</span>Brand new cars
            </li>
            <li style={serviceItemStyle}>
              <span style={bulletStyle}>▶</span>Friendly documentation
            </li>
            <li style={serviceItemStyle}>
              <span style={bulletStyle}>▶</span>Lots of Choices
            </li>
          </ul>
        </div>
        <div style={contactCardStyle}>
          <div style={phoneIconStyle}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <div style={phoneLabelStyle}>Phone Number</div>
            <a href="tel:9948007396" style={phoneNumberStyle}>
              9948007396
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
