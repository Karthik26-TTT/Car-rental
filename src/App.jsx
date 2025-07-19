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
            {/* WhatsApp field */}
            <a
              href="https://wa.me/919948007396"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 8,
                textDecoration: "none",
                color: "#25D366",
                fontWeight: 700,
                fontSize: "1.08rem",
                background: "rgba(37,211,102,0.08)",
                borderRadius: 8,
                padding: "6px 12px",
                width: "fit-content",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                transition: "background 0.2s",
              }}
            >
              <svg
                style={{ marginRight: 7 }}
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#25D366" />
                <path
                  d="M23.472 19.339c-.355-.178-2.104-1.037-2.43-1.156-.326-.119-.563-.178-.8.178-.237.355-.914 1.156-1.122 1.393-.208.237-.415.267-.77.089-.355-.178-1.5-.553-2.86-1.763-1.057-.944-1.77-2.108-1.98-2.463-.208-.356-.022-.547.156-.724.16-.159.355-.415.533-.622.178-.208.237-.356.355-.593.119-.237.06-.445-.03-.623-.089-.178-.8-1.926-1.096-2.637-.288-.692-.582-.597-.8-.608-.208-.009-.445-.011-.683-.011-.237 0-.623.089-.95.445-.326.356-1.25 1.221-1.25 2.977 0 1.756 1.28 3.453 1.457 3.692.178.237 2.522 3.857 6.11 5.254.855.295 1.52.471 2.04.601.857.205 1.637.176 2.253.107.687-.077 2.104-.859 2.403-1.691.297-.832.297-1.545.208-1.691-.089-.148-.326-.237-.68-.415z"
                  fill="#fff"
                />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
        {/* Signature and location below contact card */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <div
            style={{
              fontFamily: "Pacifico, Brush Script MT, cursive, sans-serif",
              fontSize: "1.1rem",
              color: "#fbbf24",
              letterSpacing: 1.5,
              textShadow: "1px 1px 6px rgba(0,0,0,0.18)",
              marginBottom: 6,
            }}
          >
            - Akshay
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              color: "#fff",
              fontWeight: 500,
              letterSpacing: 1,
              textShadow: "1px 1px 6px rgba(0,0,0,0.18)",
            }}
          >
            <svg
              style={{ marginRight: 6 }}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2C6.686 2 4 4.686 4 8c0 4.418 5.25 9.54 5.472 9.76a1 1 0 0 0 1.416 0C10.75 17.54 16 12.418 16 8c0-3.314-2.686-6-6-6zm0 13.674C8.14 13.07 6 10.486 6 8a4 4 0 1 1 8 0c0 2.486-2.14 5.07-4 7.674z"
                fill="#fbbf24"
              />
              <circle cx="10" cy="8" r="2" fill="#1e40af" />
            </svg>
            Nizampet, Bachupally
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
