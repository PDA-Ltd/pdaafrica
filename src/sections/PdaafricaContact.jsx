// import React, { useState } from "react";
// import ContactCard from "../components/ContactCard";
// import { contacts } from "../constants";
// import { africateam } from "../assets/images";

// const Contacts = () => {
//   // State to store form data
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     phone: "",
//     message: "",
//   });

//   // Handle input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send formData to your backend or third-party service
//     console.log(formData);
//   };

//   const googleFormUrl =
//     "https://docs.google.com/forms/d/1omB8XVssTs_9uR3FcmHttWzSWrSmgw0AylugLPOHMVU/";

//   // Create the form data object
//   const formBody = new FormData();
//   formBody.append("entry.2005620554", formData.name); // Replace with actual entry ID for Name
//   formBody.append("entry.1045781291", formData.email); // Replace with actual entry ID for Email
//   formBody.append("entry.1065046570", formData.subject); // Replace with actual entry ID for Subject
//   formBody.append("entry.1166974658", formData.phone); // Replace with actual entry ID for Phone
//   formBody.append("entry.839337160", formData.message); // Replace with actual entry ID for Message

//   fetch(googleFormUrl, {
//     method: "POST",
//     body: formBody,
//     mode: "no-cors", // Google Forms requires no-cors
//   })
//     .then(() => {
//       alert("Form submitted successfully!");
//     })
//     .catch((error) => {
//       console.error("Error submitting the form:", error);
//     });

//   return (
//     <section
//       id="contact-us"
//       className="max-container py-2 flex flex-wrap min-h-screen justify-center gap-14  max-sm:gap-2"
//     >
//       <div className="w-full flex justify-center flex-col">
//         <h2 className="text-orange font-bold text-xl text-center">
//           Contact Us
//         </h2>
//         <h3 className="font-poppins text-4xl font-bold text-black leading-tight mb-5 text-center ">
//           Feel Free To <span className="text-red">Contact & Reach </span>Us!
//         </h3>
//       </div>
//       {/* Left Section - Contact Information */}
//       <div className="w-full md:w-1/2 lg:w-1/3 pl-2">
//         {/* <div className="mb-8">
//           <h3 className="font-poppins text-4xl font-bold text-black leading-tight mb-5 ">
//             Feel Free To Contact &<br /> Reach Us!
//           </h3>
//           <p className="text-gray-600 text-base mb-8">
//             Etiam! Veniam voluptate vero quam bibendum, metus tempor fringilla
//             rutrum taciti odio rutrum quis, harum faucibus primis pellentesque,
//             porro commodo.
//           </p>
//         </div> */}
//         <div className="flex flex-col gap-3">
//           {contacts.map((contact, index) => (
//             <ContactCard key={index} {...contact} />
//           ))}
//         </div>
//       </div>

//       {/* Right Section - Contact Form */}
//       <div className="w-full md:w-1/2 lg:w-[50%] px-1 lg:mt-0  justify-center flex-wrap">
//         <div className="bg-cover bg-africa p-10 rounded-lg shadow-lg ">
//           {/* <img src={africateam} alt="" /> */}
//           <form className="flex flex-col gap-4 mt-5 " onSubmit={handleSubmit}>
//             {/* <div>
//               <h3 className="font-poppins font-semibold text-3xl leading-8 text-orange ">
//                 Leave a comment, review, or problem!
//               </h3>
//             </div> */}
//             <div className="flex gap-4 max-sm:flex-wrap md:flex-wrap lg:flex-nowrap ">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 placeholder="Enter Name*"
//                 className="flex-1 p-3 rounded-lg border border-gray-300 bg-opacity-50"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Enter Email*"
//                 className="flex-1 p-3 rounded-lg border border-gray-300"
//               />
//             </div>
//             <div className="flex gap-4 max:sm-flex-wrap max-md:flex-wrap md:flex-wrap lg:flex-nowrap">
//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleInputChange}
//                 placeholder="Enter Subject*"
//                 className="flex-1 p-3 rounded-lg border border-gray-300"
//               />
//               <input
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 placeholder="Enter Phone No.*"
//                 className="flex-1 p-3 rounded-lg border border-gray-300"
//               />
//             </div>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//               placeholder="Enter Message*"
//               className="p-2 rounded-lg border border-gray-300 h-36 w-full pr-0 flex-grow-0"
//             ></textarea>
//             <button
//               type="submit"
//               className="p-3 rounded-lg bg-orange text-white font-bold hover:bg-red"
//             >
//               Submit Now
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contacts;

// import React, { useState } from "react";
// import ContactCard from "../components/ContactCard";
// import { contacts } from "../constants";

// const Contacts = () => {
//   // State to store form data
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     phone: "",
//     message: "",
//   });

//   // Handle input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const googleFormUrl =
//       "https://docs.google.com/forms/d/1omB8XVssTs_9uR3FcmHttWzSWrSmgw0AylugLPOHMVU/formResponse";

//     // Create the form data object
//     const formBody = new FormData();
//     formBody.append("entry.2005620554", formData.name); // Replace with actual entry ID for Name
//     formBody.append("entry.1045781291", formData.email); // Replace with actual entry ID for Email
//     formBody.append("entry.1065046570", formData.subject); // Replace with actual entry ID for Subject
//     formBody.append("entry.1166974658", formData.phone); // Replace with actual entry ID for Phone
//     formBody.append("entry.839337160", formData.message); // Replace with actual entry ID for Message

//     // Submit the form data to Google Forms
//     fetch(googleFormUrl, {
//       method: "POST",
//       body: formBody,
//       // mode: "no-cors", // Google Forms requires no-cors
//     })
//       .then(() => {
//         alert("Form submitted successfully!");
//       })
//       .catch((error) => {
//         console.error("Error submitting the form:", error);
//       });
//   };

//   return (
//     <section
//       id="contact-us"
//       className="max-container py-2 flex flex-wrap min-h-screen justify-center gap-14  max-sm:gap-2"
//     >
//       <div className="w-full flex justify-center flex-col">
//         <h2 className="text-orange font-bold text-xl text-center">
//           Contact Us
//         </h2>
//         <h3 className="font-poppins text-4xl font-bold text-black leading-tight mb-5 text-center ">
//           Feel Free To <span className="text-red">Contact & Reach </span>Us!
//         </h3>
//       </div>
//       {/* Left Section - Contact Information */}
//       <div className="w-full md:w-1/2 lg:w-1/3 pl-2">
//         <div className="flex flex-col gap-3">
//           {contacts.map((contact, index) => (
//             <ContactCard key={index} {...contact} />
//           ))}
//         </div>
//       </div>

//       {/* Right Section - Contact Form */}
//       <div className="w-full md:w-1/2 lg:w-[50%] px-1 lg:mt-0 justify-center flex-wrap">
//         <div className="bg-cover bg-africa p-10 rounded-lg shadow-lg ">
//           <form className="flex flex-col gap-4 mt-5 " onSubmit={handleSubmit}>
//             <div className="flex gap-4 max-sm:flex-wrap md:flex-wrap lg:flex-nowrap ">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 placeholder="Enter Name*"
//                 className="flex-1 p-3 rounded-lg border border-gray-300 bg-opacity-50"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Enter Email*"
//                 className="flex-1 p-3 rounded-lg border border-gray-300"
//                 required
//               />
//             </div>
//             <div className="flex gap-4 max:sm-flex-wrap max-md:flex-wrap md:flex-wrap lg:flex-nowrap">
//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleInputChange}
//                 placeholder="Enter Subject*"
//                 className="flex-1 p-3 rounded-lg border border-gray-300"
//                 required
//               />
//               <input
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 placeholder="Enter Phone No.*"
//                 className="flex-1 p-3 rounded-lg border border-gray-300"
//                 required
//               />
//             </div>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//               placeholder="Enter Message*"
//               className="p-2 rounded-lg border border-gray-300 h-36 w-full pr-0 flex-grow-0"
//               required
//             ></textarea>
//             <button
//               type="submit"
//               className="p-3 rounded-lg bg-orange text-white font-bold hover:bg-red"
//             >
//               Submit Now
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contacts;

import React, { useState } from "react";
import ContactCard from "../components/ContactCard";
import { contacts } from "../constants";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";

const Contacts = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.contact : fr.contact;
  
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  // State to store submission status
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Use Formspree or any backend API to handle the form submission
    fetch("https://formspree.io/f/xqewladk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true); // Show the thank you message
          setFormData({
            name: "",
            email: "",
            subject: "",
            phone: "",
            message: "",
          }); // Clear the form data
        } else {
          console.error("Form submission error");
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
      });
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t.getInTouch}
            </h2>
            <div className="flex flex-col gap-4">
              {contacts.map((contact, index) => (
                <ContactCard key={index} {...contact} />
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t.sendMessage}
            </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t.enterName}
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t.enterEmail}
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder={t.enterSubject}
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t.enterPhone}
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange"
                  required
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t.enterMessage}
                className="p-3 rounded-lg border border-gray-300 h-32 w-full focus:outline-none focus:ring-2 focus:ring-orange resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="p-3 rounded-lg bg-orange text-white font-bold hover:bg-orange-600 transition-colors"
              >
                {t.submitNow}
              </button>
            </form>

            {/* Show thank you message after form submission */}
            {submitted && (
              <div className="mt-4 p-4 rounded-lg bg-green-500 text-white text-center font-poppins">
                {t.thankYouMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
