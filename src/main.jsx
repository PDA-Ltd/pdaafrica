import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import TestimonialsPage from "./pages/TestimonialsPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import GetInvolvedPage from "./pages/GetInvolvedPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ImpactPage from "./pages/ImpactPage.jsx";
import WhereWeWorkPage from "./pages/WhereWeWorkPage.jsx";
import StaffPage from "./pages/StaffPage.jsx";
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
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import TermsOfServicePage from "./pages/TermsOfServicePage.jsx";
import ImpactProject from "./pages/ImpactProject.jsx";
import YenDaakye from "./pages/YenDaakye.jsx";
import VSLAImpactStories from "./pages/VSLAImpactStories.jsx";
// import Aboutafrica from "./sections/Aboutafrica.jsx";
// import AfricaGallery from "./sections/AfricaGallery.jsx";
// import PdaafricaContact from "./sections/PdaafricaContact.jsx";
// import CustomerReviews from "./sections/CustomerReviews.jsx";
// import Volunteer from "./sections/Volunteer.jsx";
// import Projects from "./sections/Projects.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // {
      //   path: "/pdaafrica/dataanalytics",
      //   element: <DataAnalytics />,
      // },
      // {
      //   path: "/pdaafrica/dataanalytics/cclp-dashboard",
      //   element: <CCLPDashboard />,
      // },
      // {
      //   path: "/pdaafrica/dataanalytics/vsla-dashboard",
      //   element: <VSLADashboard />,
      // },
      // {
      //   path: "/pdaafrica/dataanalytics/nclr-dashboard",
      //   element: <NCLRDashboard />,
      // },
      {
        path: "/cocoa-communities-library-project",
        element: <CCLP />,
      },
      {
        path: "/nyonkopa-child-labour-remediation",
        element: <Nyonkopa />,
      },
      {
        path: "/financial-inclusion-and-vsla",
        element: <VSLA />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/about-us/where-we-work",
        element: <WhereWeWorkPage />,
      },
      {
        path: "/about-us/staff",
        element: <StaffPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/impact",
        element: <ImpactPage />,
      },
      {
        path: "/testimonials",
        element: <TestimonialsPage />,
      },
      {
        path: "/news-and-updates",
        element: <NewsPage />,
      },
      {
        path: "/get-involved",
        element: <GetInvolvedPage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      // Donate route - hidden but code preserved
      // {
      //   path: "/donate", // Add the route for the donation page
      //   element: <DonateForm />,
      // },
      // {
      //   path: "/thank-you", // Route for the thank-you page after donation
      //   element: <ThankYouPage />,
      // },
      // {
      //   path: "/about-us",
      //   element: <Aboutafrica />,
      // },
      // {
      //   path: "/gallery",
      //   element: <AfricaGallery />,
      // },
      // {
      //   path: "/testimonials",
      //   element: <CustomerReviews />,
      // },
      // {
      //   path: "/get-involved",
      //   element: <Volunteer />,
      // },
      // {
      //   path: "/projects",
      //   element: <Projects />,
      // },
      // {
      //   path: "/contact-us",
      //   element: <PdaafricaContact />,
      // },
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
      {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/terms-of-service",
        element: <TermsOfServicePage />,
      },
      {
        path: "/the-impact-project",
        element: <ImpactProject />,
      },
      {
        path: "/yen-daakye-programme",
        element: <YenDaakye />,
      },
      {
        path: "/vsla-impact-stories",
        element: <VSLAImpactStories />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
