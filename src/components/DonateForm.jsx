// import React, { useState } from "react";
// import { PaystackButton } from "react-paystack";
// import { useNavigate } from "react-router-dom"; // If you're using React Router for navigation

// const DonateForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");
//   const [amount, setAmount] = useState("");

//   const publicKey = "pk_test_2d8d00de7ecfca4c21a140a6226b5ee48f9f7f64"; // Replace with your actual Paystack public key
//   const navigate = useNavigate(); // React Router hook for redirect

//   const handlePaystackSuccessAction = (response) => {
//     console.log(response); // Handle successful response
//     // Redirect to a thank-you page after successful payment
//     navigate("/thank-you");
//   };

//   const handlePaystackCloseAction = () => {
//     console.log("Payment popup closed");
//   };

//   // Paystack expects the amount in kobo (1 GHS = 100 kobo)
//   const amountInKobo = amount * 100;

//   const componentProps = {
//     email,
//     amount: amountInKobo,
//     metadata: {
//       name,
//       phone: contact,
//     },
//     publicKey,
//     text: "Donate Now",
//     onSuccess: handlePaystackSuccessAction,
//     onClose: handlePaystackCloseAction,
//   };

//   return (
//     <section className="min-h-screen">
//       <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 mt-32 mb-10">
//         <h2 className="text-2xl font-bold mb-4">Donate to Support</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Contact</label>
//             <input
//               type="tel"
//               placeholder="Enter your contact number"
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">
//               Amount (GHS)
//             </label>
//             <input
//               type="number"
//               placeholder="Enter amount to donate"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mt-6">
//             {/* Paystack Button */}
//             <PaystackButton
//               {...componentProps}
//               className="w-full bg-orange text-white py-2 rounded"
//             />
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default DonateForm;

// import React, { useState } from "react";
// import { PaystackButton } from "react-paystack";
// import { useNavigate } from "react-router-dom"; // If you're using React Router for navigation

// const DonateForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");
//   const [amount, setAmount] = useState("");

//   const publicKey = "pk_test_2d8d00de7ecfca4c21a140a6226b5ee48f9f7f64"; // Replace with your actual Paystack public key
//   const navigate = useNavigate(); // React Router hook for redirect

//   const handlePaystackSuccessAction = (response) => {
//     console.log(response); // Handle successful response
//     // Redirect to a thank-you page after successful payment
//     navigate("/thank-you");
//   };

//   const handlePaystackCloseAction = () => {
//     console.log("Payment popup closed");
//   };

//   // Paystack expects the amount in kobo (1 GHS = 100 kobo)
//   const amountInKobo = amount * 100;

//   const componentProps = {
//     email,
//     amount: amountInKobo,
//     metadata: {
//       name,
//       phone: contact,
//     },
//     publicKey,
//     text: "Donate Now",
//     onSuccess: handlePaystackSuccessAction,
//     onClose: handlePaystackCloseAction,
//   };

//   // Close form handler (replace with desired logic)
//   const handleCloseForm = () => {
//     navigate(-1); // Navigates to the previous page or you can hide the form with state
//   };

//   return (
//     <section className="min-h-screen">
//       <div className="relative max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 mt-32 mb-10">
//         {/* Close Button */}
//         <button
//           onClick={handleCloseForm}
//           className="absolute top-2 right-2 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-bold mb-4">Donate to Support</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Contact</label>
//             <input
//               type="tel"
//               placeholder="Enter your contact number"
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">
//               Amount (GHS)
//             </label>
//             <input
//               type="number"
//               placeholder="Enter amount to donate"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mt-6">
//             {/* Paystack Button */}
//             <PaystackButton
//               {...componentProps}
//               className="w-full bg-orange text-white py-2 rounded"
//             />
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default DonateForm;

// import React, { useState } from "react";
// import { PaystackButton } from "react-paystack";
// import { useNavigate } from "react-router-dom"; // If you're using React Router for navigation

// const DonateForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");
//   const [amount, setAmount] = useState("");
//   const [isFormVisible, setIsFormVisible] = useState(true); // State to manage form visibility

//   const publicKey = "pk_test_2d8d00de7ecfca4c21a140a6226b5ee48f9f7f64"; // Replace with your actual Paystack public key
//   const navigate = useNavigate(); // React Router hook for redirect

//   const handlePaystackSuccessAction = (response) => {
//     console.log(response); // Handle successful response
//     navigate("/thank-you"); // Redirect to a thank-you page after successful payment
//   };

//   const handlePaystackCloseAction = () => {
//     console.log("Payment popup closed");
//   };

//   // Paystack expects the amount in kobo (1 GHS = 100 kobo)
//   const amountInKobo = amount * 100;

//   const componentProps = {
//     email,
//     amount: amountInKobo,
//     metadata: {
//       name,
//       phone: contact,
//     },
//     publicKey,
//     text: "Donate Now",
//     onSuccess: handlePaystackSuccessAction,
//     onClose: handlePaystackCloseAction,
//   };

//   // Close form handler
//   const handleCloseForm = () => {
//     setIsFormVisible(false); // Set the form visibility to false to hide it
//   };

//   // Conditionally render the form based on isFormVisible state
//   return isFormVisible ? (
//     <section className="min-h-screen">
//       <div className="relative max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 mt-32 mb-10">
//         {/* Close Button */}
//         <button
//           onClick={handleCloseForm}
//           className="absolute top-2 right-2 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-bold mb-4">Donate to Support</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Contact</label>
//             <input
//               type="tel"
//               placeholder="Enter your contact number"
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">
//               Amount (GHS)
//             </label>
//             <input
//               type="number"
//               placeholder="Enter amount to donate"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mt-6">
//             {/* Paystack Button */}
//             <PaystackButton
//               {...componentProps}
//               className="w-full bg-orange text-white py-2 rounded"
//             />
//           </div>
//         </form>
//       </div>
//     </section>
//   ) : null; // If isFormVisible is false, return null to hide the form
// };

// export default DonateForm;

// import React, { useState } from "react";
// import { PaystackButton } from "react-paystack";
// import { useNavigate } from "react-router-dom"; // If you're using React Router for navigation

// const DonateForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");
//   const [amount, setAmount] = useState("");
//   const [isFormVisible, setIsFormVisible] = useState(true); // State to manage form visibility

//   const publicKey = "pk_test_2d8d00de7ecfca4c21a140a6226b5ee48f9f7f64"; // Replace with your actual Paystack public key
//   const navigate = useNavigate(); // React Router hook for redirect

//   const handlePaystackSuccessAction = (response) => {
//     console.log(response); // Handle successful response
//     alert("Thank you for your donation!"); // Show success message
//     navigate("/thank-you"); // Redirect to a thank-you page after successful payment
//   };

//   const handlePaystackCloseAction = () => {
//     alert("Are you sure you want to close?");
//   };

//   // Paystack expects the amount in kobo (1 GHS = 100 kobo)
//   const amountInKobo = amount * 100;

//   const componentProps = {
//     email,
//     amount: amountInKobo,
//     metadata: {
//       name,
//       phone: contact,
//     },
//     publicKey,
//     text: "Donate Now",
//     onSuccess: handlePaystackSuccessAction,
//     onClose: handlePaystackCloseAction,
//   };

//   // Close form handler
//   const handleCloseForm = () => {
//     setIsFormVisible(false); // Set the form visibility to false to hide it
//   };

//   // Validate the amount to ensure it's positive and non-zero
//   const handleAmountChange = (e) => {
//     const inputAmount = e.target.value;
//     if (inputAmount < 1) {
//       alert("Amount must be greater than 0");
//       setAmount("");
//     } else {
//       setAmount(inputAmount);
//     }
//   };

//   // Check if the form is valid before enabling the Paystack button
//   const isFormValid = name && email && contact && amount > 0;

//   // Conditionally render the form based on isFormVisible state
//   return isFormVisible ? (
//     <section className="min-h-screen">
//       <div className="relative max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 mt-32 mb-10">
//         {/* Close Button */}
//         <button
//           onClick={handleCloseForm}
//           className="absolute top-2 right-2 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-bold mb-4">Donate to Support</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Contact</label>
//             <input
//               type="tel"
//               placeholder="Enter your contact number"
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">
//               Amount (GHS)
//             </label>
//             <input
//               type="number"
//               placeholder="Enter amount to donate"
//               value={amount}
//               onChange={handleAmountChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mt-6">
//             {/* Paystack Button */}
//             <PaystackButton
//               {...componentProps}
//               disabled={!isFormValid}
//               className={`w-full py-2 rounded ${
//                 isFormValid ? "bg-orange text-white" : "bg-gray-300"
//               }`}
//             />
//           </div>
//         </form>
//       </div>
//     </section>
//   ) : null; // If isFormVisible is false, return null to hide the form
// };

// export default DonateForm;

// correct working code

// import React, { useState } from "react";
// import { PaystackButton } from "react-paystack";
// import { useNavigate } from "react-router-dom"; // If you're using React Router for navigation

// const DonateForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");
//   const [amount, setAmount] = useState("");
//   const [isFormVisible, setIsFormVisible] = useState(true); // State to manage form visibility

//   // const publicKey = "pk_test_466f60b5081faa6734168152196e0bc3fdaa3277"; // Replace with your actual Paystack public key
//   const publicKey = "pk_test_2d8d00de7ecfca4c21a140a6226b5ee48f9f7f64";
//   // const publicKey = "pk_live_cb54b7d6231bb859072e97f00d6889a639ef6b1c";
//   const navigate = useNavigate(); // React Router hook for redirect

//   const handlePaystackSuccessAction = (response) => {
//     console.log(response); // Handle successful response
//     alert("Thank you for your donation!"); // Show success message
//     navigate("/pdaafrica/thank-you"); // Redirect to a thank-you page after successful payment
//   };

//   const handlePaystackCloseAction = () => {
//     alert("Are you sure you want to close?");
//   };

//   // Paystack expects the amount in kobo (1 GHS = 100 kobo)
//   // const amountInKobo = amount * 100;

//   const componentProps = {
//     email,
//     amount: amount * 100,
//     currency: "GHS",
//     metadata: {
//       name,
//       phone: contact,
//     },
//     publicKey,
//     text: "Donate Now",
//     onSuccess: handlePaystackSuccessAction,
//     onClose: handlePaystackCloseAction,
//   };

//   // Close form handler
//   const handleCloseForm = () => {
//     setIsFormVisible(false);
//     const userConfirmed = window.confirm(
//       "Are you sure you want to close the donation form?"
//     );
//     if (userConfirmed) {
//       setIsFormVisible(false);
//       navigate("/pdaafrica"); // Redirect to the homepage
//     }
//   };
//   // const handleCloseForm = () => {
//   //   setIsFormVisible(false); // Set the form visibility to false to hide it
//   // };

//   // Validate the amount to ensure it's positive and non-zero
//   // const handleAmountChange = (e) => {
//   //   const inputAmount = e.target.value;
//   //   if (inputAmount < 1) {
//   //     alert("Amount must be greater than 0");
//   //     setAmount("");
//   //   } else {
//   //     setAmount(inputAmount);
//   //   }
//   // };

//   // Prevent form reload on submit
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//   };

//   // Check if the form is valid before enabling the Paystack button
//   const isFormValid = name && email && contact && amount > 0;

//   // Conditionally render the form based on isFormVisible state
//   return isFormVisible ? (
//     <section className="min-h-screen">
//       <div className="relative max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 mt-32 mb-10">
//         {/* Close Button */}
//         <button
//           onClick={handleCloseForm}
//           className="absolute top-2 right-2 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-bold mb-4">Donate to Support</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Contact</label>
//             <input
//               type="tel"
//               placeholder="Enter your contact number"
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">
//               Amount (GHS)
//             </label>
//             <input
//               type="number"
//               placeholder="Enter amount to donate"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mt-6">
//             {/* Paystack Button */}
//             <PaystackButton
//               {...componentProps}
//               disabled={!isFormValid}
//               className={`w-full py-2 rounded ${
//                 isFormValid ? "bg-orange text-white" : "bg-gray-300"
//               }`}
//             />
//           </div>
//         </form>
//       </div>
//     </section>
//   ) : null; // If isFormVisible is false, return null to hide the form
// };

// export default DonateForm;
// correct working code end

import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";

const DonateForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [amount, setAmount] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(true);

  const publicKey = "pk_test_2d8d00de7ecfca4c21a140a6226b5ee48f9f7f64";
  const navigate = useNavigate();

  const handleCloseForm = () => {
    const userConfirmed = window.confirm(
      "Are you sure you want to close the donation form?"
    );
    if (userConfirmed) {
      setIsFormVisible(false); // Set form visibility to false
      navigate("/"); // Redirect to homepage
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const componentProps = {
    email,
    amount: amount * 100,
    currency: "GHS",
    metadata: { name, phone: contact },
    publicKey,
    text: "Donate Now",
    onSuccess: (response) => {
      alert("Thank you for your donation!");
      navigate("/thank-you");
    },
    onClose: () => {
      alert("Are you sure you want to close?");
    },
  };

  return isFormVisible ? (
    <section className="min-h-screen">
      <div className="relative max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 mt-32 mb-10">
        {/* Close Button */}
        <button
          onClick={handleCloseForm}
          className="absolute top-2 right-2 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Donate to Support</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Contact</label>
            <input
              type="tel"
              placeholder="Enter your contact number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Amount (GHS)
            </label>
            <input
              type="number"
              placeholder="Enter amount to donate"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mt-6">
            <PaystackButton
              {...componentProps}
              disabled={!name || !email || !contact || amount <= 0}
              className={`w-full py-2 rounded ${
                name && email && contact && amount > 0
                  ? "bg-orange text-white"
                  : "bg-gray-300"
              }`}
            />
          </div>
        </form>
      </div>
    </section>
  ) : null; // Return null if the form is not visible
};

export default DonateForm;
