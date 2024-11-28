import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import PDAAFRICA from "./pages/PDAAFRICA.jsx";
import DonateForm from "./components/DonateForm.jsx"; // Import the DonateForm component
import ThankYouPage from "./components/ThankYouPage.jsx"; // Import the ThankYou component
import DataAnalytics from "./pages/DataAnalytics.jsx";
import CCLP from "./pages/CCLP.jsx";
import Nyonkopa from "./pages/Nyonkopa.jsx";
import VSLA from "./pages/VSLA.jsx";
import WhoWeAre from "./pages/WhoWeAre.jsx";
import WhatWeDo from "./pages/WhatWeDo.jsx";
import EthicalReviewCommittee from "./pages/EthicalReviewCommittee.jsx";
import Staff from "./pages/Staff.jsx";
import Teams from "./pages/Teams.jsx";
import ChildAbuseTracker from "./pages/ChildAbuseTracker.jsx";
import Covid19 from "./pages/Covid19.jsx";
import OurImpact from "./pages/OurImpact.jsx";
import Publications from "./pages/Publications.jsx";
import VidPic from "./pages/VidPic.jsx";
import Podcast from "./pages/Podcast.jsx";
import CCLPDashboard from "./pages/CCLPDashboard.jsx";
import VSLADashboard from "./pages/VSLADashboard.jsx";
import NCLRDashboard from "./pages/NCLRDashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/pdaafrica/dataanalytics",
        element: <DataAnalytics />,
      },
      {
        path: "/pdaafrica/dataanalytics/cclp-dashboard",
        element: <CCLPDashboard />,
      },
      {
        path: "/pdaafrica/dataanalytics/vsla-dashboard",
        element: <VSLADashboard />,
      },
      {
        path: "/pdaafrica/dataanalytics/nclr-dashboard",
        element: <NCLRDashboard />,
      },
      {
        path: "/pdaafrica/cocoa-communities-library-project",
        element: <CCLP />,
      },
      {
        path: "/pdaafrica/nyonkopa-child-labour-remediation",
        element: <Nyonkopa />,
      },
      {
        path: "/pdaafrica/financial-inclusion-and-vsla",
        element: <VSLA />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pdaafrica",
        element: <PDAAFRICA />,
      },
      {
        path: "/pdaafrica/donate", // Add the route for the donation page
        element: <DonateForm />,
      },
      {
        path: "/pdaafrica/thank-you", // Route for the thank-you page after donation
        element: <ThankYouPage />,
      },
      {
        path: "/who-we-are",
        element: <WhoWeAre />,
      },
      {
        path: "/what-we-do",
        element: <WhatWeDo />,
      },
      {
        path: "/our-impact",
        element: <OurImpact />,
      },
      {
        path: "/publications",
        element: <Publications />,
      },
      {
        path: "/videos-pictures",
        element: <VidPic />,
      },
      {
        path: "/podcast",
        element: <Podcast />,
      },
      {
        path: "/staff",
        element: <Staff />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      {
        path: "/ethical-review-committee",
        element: <EthicalReviewCommittee />,
      },
      {
        path: "/child-abuse-tracker",
        element: <ChildAbuseTracker />,
      },
      {
        path: "/covid-19",
        element: <Covid19 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
