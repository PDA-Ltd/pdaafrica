import React from "react";

const CCLPDashboard = () => {
  return (
    <section id="cclp-dashboard" className="max-container w-auto mt-24 h-auto">
      <div>
        <iframe
          src="https://vsla-dashboards.herokuapp.com/magic-library"
          style={{ width: "100%", height: "100vh", border: "none" }}
          title="Dashboard"
        ></iframe>
      </div>
    </section>
  );
};

export default CCLPDashboard;
