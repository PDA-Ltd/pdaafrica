import React from "react";

const VSLADashboard = () => {
  return (
    <section id="vsla-dashboard" className="max-container w-auto mt-24 h-auto">
      <div>
        <iframe
          src="https://vsla-dashboards.herokuapp.com/summary"
          style={{ width: "100%", height: "100vh", border: "none" }}
          title="Dashboard"
        ></iframe>
      </div>
    </section>
  );
};

export default VSLADashboard;
