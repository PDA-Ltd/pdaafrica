import React from "react";

const NCLRDashboard = () => {
  return (
    <section id="cclp-dashboard" className="max-container w-auto mt-28 h-auto">
      <div>
        <iframe
          src="https://stopviolenceagainstchildren.ushahidi.io/map"
          style={{ width: "100%", height: "100vh", border: "none" }}
          title="Dashboard"
        ></iframe>
      </div>
    </section>
  );
};

export default NCLRDashboard;
