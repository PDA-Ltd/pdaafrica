// import { useState } from "react";
// import ServiceCard from "../components/ServiceCard";
// import { services } from "../constants";
// import { close } from "../assets/icons";
// // import PopupForm from "../components/PopupForm";

// const Volunteer = () => {
//   const [activeForm, setActiveForm] = useState(null);

//   const handleButtonClick = (link) => {
//     setActiveForm(link);
//   };

//   const handleClose = () => {
//     setActiveForm(null);
//   };

//   return (
//     <section id="get-involved" className="max-container w-full">
//       <div className="flex flex-col justify-center w-full ">
//         <h2 className="text-red font-bold text-xl text-center mb-5 font-poppins">
//           Get Involved
//         </h2>
//         <h3 className="text-4xl leading-[68px]  font-poppins font-bold mb-5 items-center text-center">
//           Let's Make A<span className="text-orange"> Difference</span> Today
//         </h3>
//       </div>
//       <div className=" flex justify-center flex-wrap gap-9 ">
//         {services.map((service) => (
//           <ServiceCard
//             key={service.label}
//             {...service}
//             onClick={() => handleButtonClick(service.link)}
//           />
//         ))}
//       </div>

//       {/* Conditionally render the iframe */}
//       {activeForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
//             <button
//               onClick={handleClose}
//               className="absolute top-4 right-4 text-red-500"
//             >
//               <img src={close} alt="close" height={20} width={20} />
//             </button>
//             <iframe
//               src={activeForm}
//               width="100%"
//               height="500px"
//               frameBorder="0"
//               marginHeight="0"
//               marginWidth="0"
//               style={{ border: "none" }}
//               allowFullScreen
//             >
//               Loading…
//             </iframe>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Volunteer;

// Paystack feature only

// import { useState } from "react";
// import { PaystackButton } from "react-paystack"; // Import Paystack
// import ServiceCard from "../components/ServiceCard";
// import { services } from "../constants";
// import { close } from "../assets/icons";

// const Volunteer = () => {
//   const [activeForm, setActiveForm] = useState(null);
//   const [isPaystackForm, setIsPaystackForm] = useState(false);
//   const [amount, setAmount] = useState(0); // Store user-entered amount
//   const [email, setEmail] = useState(""); // Store user-entered email

//   const handleButtonClick = (service) => {
//     if (service.isPaystack) {
//       setIsPaystackForm(true);
//       setActiveForm(service); // For Paystack, we pass the entire service object
//     } else {
//       setIsPaystackForm(false);
//       setActiveForm(service.link);
//     }
//   };

//   const handleClose = () => {
//     setActiveForm(null);
//     setIsPaystackForm(false);
//   };

//   const publicKey = "pk_test_2d8d00de7ecfca4c21a140a6226b5ee48f9f7f64"; // Replace with your Paystack public key

//   const componentProps = {
//     email,
//     amount,
//     publicKey,
//     text: "Donate Now",
//     onSuccess: (reference) =>
//       alert(`Payment complete! Reference: ${reference.reference}`),
//     onClose: () => alert("Transaction closed"),
//   };

//   return (
//     <section id="get-involved" className="max-container w-full">
//       <div className="flex flex-col justify-center w-full">
//         <h2 className="text-red font-bold text-xl text-center mb-5 font-poppins">
//           Get Involved
//         </h2>
//         <h3 className="text-4xl leading-[68px] font-poppins font-bold mb-5 text-center">
//           Let's Make A<span className="text-orange"> Difference</span> Today
//         </h3>
//       </div>
//       <div className="flex justify-center flex-wrap gap-9">
//         {services.map((service) => (
//           <ServiceCard
//             key={service.label}
//             {...service}
//             onClick={() => handleButtonClick(service)}
//           />
//         ))}
//       </div>

//       {/* Conditionally render the iframe or Paystack form */}
//       {activeForm && !isPaystackForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
//             <button
//               onClick={handleClose}
//               className="absolute top-4 right-4 text-red-500"
//             >
//               <img src={close} alt="close" height={20} width={20} />
//             </button>
//             <iframe
//               src={activeForm}
//               width="100%"
//               height="500px"
//               frameBorder="0"
//               marginHeight="0"
//               marginWidth="0"
//               style={{ border: "none" }}
//               allowFullScreen
//             >
//               Loading…
//             </iframe>
//           </div>
//         </div>
//       )}

//       {isPaystackForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
//             <button
//               onClick={handleClose}
//               className="absolute top-4 right-4 text-red-500"
//             >
//               <img src={close} alt="close" height={20} width={20} />
//             </button>
//             <h2 className="text-2xl font-bold mb-4">Donate to Support</h2>

//             {/* Input field for user to enter the donation amount */}
//             <input
//               type="number"
//               placeholder="Enter amount (GHS)"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="w-full mb-4 p-2 border border-gray-300 rounded"
//             />

//             {/* Input field for user to enter email */}
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full mb-4 p-2 border border-gray-300 rounded"
//             />

//             {/* Paystack Button */}
//             <PaystackButton {...componentProps} />
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Volunteer;

// Google form with paystack
// import { useState } from "react";
// import { PaystackButton } from "react-paystack";
// import ServiceCard from "../components/ServiceCard";
// import { services } from "../constants";
// import { close } from "../assets/icons";

// const Volunteer = () => {
//   const [activeForm, setActiveForm] = useState(null);
//   const [isPaystackForm, setIsPaystackForm] = useState(false);
//   const [amount, setAmount] = useState(0);
//   const [email, setEmail] = useState("");
//   const [donationMethod, setDonationMethod] = useState(null); // Track donation method

//   const handleButtonClick = (service) => {
//     setActiveForm(service.link); // Show the Google form by default
//     setIsPaystackForm(false); // Ensure Paystack form is hidden initially
//   };

//   const handleDonationMethodChange = (method) => {
//     setDonationMethod(method);
//     if (method === "Cash") {
//       setIsPaystackForm(true); // Show Paystack form if Cash is selected
//     }
//   };

//   const handleClose = () => {
//     setActiveForm(null);
//     setIsPaystackForm(false);
//   };

//   const publicKey = "pk_test_2d8d00de7ecfca4c21a140a6226b5ee48f9f7f64";
//   const componentProps = {
//     email,
//     amount: amount * 100, // Convert to Kobo
//     publicKey,
//     text: "Donate Now",
//     onSuccess: (reference) =>
//       alert(`Payment complete! Reference: ${reference.reference}`),
//     onClose: () => alert("Transaction closed"),
//   };

//   return (
//     <section id="get-involved" className="max-container w-full">
//       <div className="flex flex-col justify-center w-full">
//         <h2 className="text-red font-bold text-xl text-center mb-5 font-poppins">
//           Get Involved
//         </h2>
//         <h3 className="text-4xl leading-[68px] font-poppins font-bold mb-5 text-center">
//           Let's Make A<span className="text-orange"> Difference</span> Today
//         </h3>
//       </div>
//       <div className="flex justify-center flex-wrap gap-9">
//         {services.map((service) => (
//           <ServiceCard
//             key={service.label}
//             {...service}
//             onClick={() => handleButtonClick(service)}
//           />
//         ))}
//       </div>

//       {/* Conditionally render the iframe or Paystack form */}
//       {activeForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
//             <button
//               onClick={handleClose}
//               className="absolute top-4 right-4 text-red-500"
//             >
//               <img src={close} alt="close" height={20} width={20} />
//             </button>

//             {/* Embed the Google form */}
//             <iframe
//               src={activeForm}
//               width="100%"
//               height="500px"
//               frameBorder="0"
//               marginHeight="0"
//               marginWidth="0"
//               style={{ border: "none" }}
//               allowFullScreen
//             >
//               Loading…
//             </iframe>

//             {/* Option to select donation method (after Google form submission) */}
//             <div className="mt-4">
//               <label htmlFor="donationMethod" className="font-bold mb-2 block">
//                 How would you like to donate?
//               </label>
//               <select
//                 id="donationMethod"
//                 onChange={(e) => handleDonationMethodChange(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded"
//               >
//                 <option value="">Select Method</option>
//                 <option value="Cash">Cash (Paystack)</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       )}

//       {isPaystackForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
//             <button
//               onClick={handleClose}
//               className="absolute top-4 right-4 text-red-500"
//             >
//               <img src={close} alt="close" height={20} width={20} />
//             </button>

//             <h2 className="text-2xl font-bold mb-4">Donate via Paystack</h2>

//             <input
//               type="number"
//               placeholder="Enter amount (GHS)"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="w-full mb-4 p-2 border border-gray-300 rounded"
//             />

//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full mb-4 p-2 border border-gray-300 rounded"
//             />

//             <PaystackButton {...componentProps} />
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Volunteer;

// import { useState } from "react";
// import ServiceCard from "../components/ServiceCard";
// import { services } from "../constants";
// import { close } from "../assets/icons";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const Volunteer = () => {
//   const [activeForm, setActiveForm] = useState(null);
//   const navigate = useNavigate(); // Create a navigate function

//   const handleButtonClick = (service) => {
//     if (service.linkType === "paystack") {
//       navigate(service.link); // Redirect to Paystack form page
//     } else {
//       setActiveForm(service.link); // Open Google form in iframe
//     }
//   };

//   const handleClose = () => {
//     setActiveForm(null);
//   };

//   return (
//     <section id="get-involved" className="max-container w-full">
//       <div className="flex flex-col justify-center w-full ">
//         <h2 className="text-red font-bold text-xl text-center mb-5 font-poppins">
//           Get Involved
//         </h2>
//         <h3 className="text-4xl leading-[68px] font-poppins font-bold mb-5 items-center text-center">
//           Let's Make A<span className="text-orange"> Difference</span> Today
//         </h3>
//       </div>
//       <div className=" flex justify-center flex-wrap gap-9 ">
//         {services.map((service) => (
//           <ServiceCard
//             key={service.label}
//             {...service}
//             onClick={() => handleButtonClick(service)}
//           />
//         ))}
//       </div>

//       {/* Conditionally render the iframe for Google Forms */}
//       {activeForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
//             <button
//               onClick={handleClose}
//               className="absolute top-4 right-4 text-red-500"
//             >
//               <img src={close} alt="close" height={20} width={20} />
//             </button>
//             <iframe
//               src={activeForm}
//               width="100%"
//               height="500px"
//               frameBorder="0"
//               marginHeight="0"
//               marginWidth="0"
//               style={{ border: "none" }}
//               allowFullScreen
//             >
//               Loading…
//             </iframe>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Volunteer;

// import { useState } from "react";
// import ServiceCard from "../components/ServiceCard";
// import { services } from "../constants";
// import { close } from "../assets/icons";

// const Volunteer = () => {
//   const [activeForm, setActiveForm] = useState(null); // State to show/hide the form popup

//   // const handleButtonClick = (service) => {
//   //   if (service.linkType === "paystack") {
//   //     setActiveForm(service.link); // Set the Paystack form link here
//   //   } else {
//   //     setActiveForm(service.link); // Open Google form in iframe
//   //   }
//   // };
//   const handleButtonClick = (service) => {
//     if (service.linkType === "paystack") {
//       setShowDonateForm(true); // Show the Paystack popup form
//     } else {
//       setActiveForm(service.link); // Open the Google form in an iframe
//     }
//   };

//   const handleClose = () => {
//     setActiveForm(null); // Close the popup
//   };

//   return (
//     <section id="get-involved" className="max-container w-full">
//       <div className="flex flex-col justify-center w-full ">
//         <h2 className="text-red font-bold text-xl text-center mb-5 font-poppins">
//           Get Involved
//         </h2>
//         <h3 className="text-4xl leading-[68px] font-poppins font-bold mb-5 items-center text-center">
//           Let's Make A<span className="text-orange"> Difference</span> Today
//         </h3>
//       </div>
//       <div className=" flex justify-center flex-wrap gap-9 ">
//         {services.map((service) => (
//           <ServiceCard
//             key={service.label}
//             {...service}
//             onClick={() => handleButtonClick(service)}
//           />
//         ))}
//       </div>

//       {/* Conditionally render the iframe for Google Forms */}
//       {activeForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
//             <button
//               onClick={handleClose}
//               className="absolute top-4 right-4 text-red-500"
//             >
//               <img src={close} alt="close" height={20} width={20} />
//             </button>
//             <iframe
//               src={activeForm}
//               width="100%"
//               height="500px"
//               frameBorder="0"
//               marginHeight="0"
//               marginWidth="0"
//               style={{ border: "none" }}
//               allowFullScreen
//             >
//               Loading…
//             </iframe>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Volunteer;

import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
import { close } from "../assets/icons";
import DonateForm from "../components/DonateForm"; // Import your DonateForm component

const Volunteer = () => {
  const [activeForm, setActiveForm] = useState(null);
  const [showDonateForm, setShowDonateForm] = useState(false); // Add state for showing donate form

  const handleButtonClick = (service) => {
    if (service.linkType === "paystack") {
      setShowDonateForm(true); // Show the Paystack popup form
    } else {
      setActiveForm(service.link); // Open Google form in iframe
    }
  };

  const handleClose = () => {
    setActiveForm(null);
    setShowDonateForm(false); // Close the donate form as well
  };

  return (
    <section id="get-involved" className="max-container w-full">
      <div className="flex flex-col justify-center w-full ">
        <h2 className="text-red font-bold text-xl text-center mb-5 font-poppins">
          Get Involved
        </h2>
        <h3 className="text-4xl leading-[68px] font-poppins font-bold mb-5 items-center text-center">
          Let's Make A<span className="text-orange"> Difference</span> Today
        </h3>
      </div>
      <div className="flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServiceCard
            key={service.label}
            {...service}
            onClick={() => handleButtonClick(service)}
          />
        ))}
      </div>

      {/* Conditionally render the iframe for Google Forms */}
      {activeForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-red-500"
            >
              <img src={close} alt="close" height={20} width={20} />
            </button>
            <iframe
              src={activeForm}
              width="100%"
              height="500px"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              style={{ border: "none" }}
              allowFullScreen
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}

      {/* Conditionally render the DonateForm for Paystack */}
      {showDonateForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-red-500 "
            >
              <img src={close} alt="close" height={20} width={20} />
            </button>
            <DonateForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default Volunteer;
