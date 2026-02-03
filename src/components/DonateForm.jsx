import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";
import { givelove, close } from "../assets/icons";
import { africateam } from "../assets/images";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";

const DonateForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [amount, setAmount] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(true);

  const publicKey = "pk_test_2d8d00de7ecfca4c21a140a6226b5ee48f9f7f64";
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = language === "en" ? en.donate : fr.donate;

  const handleCloseForm = () => {
    const confirmMessage = language === "en" 
      ? "Are you sure you want to close the donation form?"
      : "Êtes-vous sûr de vouloir fermer le formulaire de don ?";
    const userConfirmed = window.confirm(confirmMessage);
    if (userConfirmed) {
      setIsFormVisible(false);
      navigate("/");
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
      alert(language === "en" ? "Thank you for your donation!" : "Merci pour votre don !");
      navigate("/thank-you");
    },
    onClose: () => {
      alert(language === "en" ? "Are you sure you want to close?" : "Êtes-vous sûr de vouloir fermer ?");
    },
  };

  const isFormValid = name && email && contact && amount > 0;

  const quickAmounts = [50, 100, 200, 500, 1000];

  return isFormVisible ? (
    <div className="min-h-screen pt-24 font-poppins bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] mb-12">
        <div className="absolute inset-0">
          <img
            src={africateam}
            alt="Donate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 flex items-end h-full padding pb-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {t.title.split("Difference")[0]} <span className="text-orange">{language === "en" ? "Difference" : "Différence"}</span>
            </h1>
            <p className="text-lg text-white/90">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="padding py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Info */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <div className="bg-orange/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <img src={givelove} alt="Donate" className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {t.whyDonate}
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">✓</span>
                    <span>{t.supportCommunity}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">✓</span>
                    <span>{t.empowerWomen}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">✓</span>
                    <span>{t.createChange}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">✓</span>
                    <span>{t.transparentFunds}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-xl p-8 md:p-10">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {t.donateToSupport}
                  </h2>
                  <button
                    onClick={handleCloseForm}
                    className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                  >
                    <img src={close} alt="close" height={20} width={20} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.fullName} *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-all"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.emailAddress} *
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-all"
                      required
                    />
                  </div>

                  {/* Contact */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.phoneNumber} *
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-all"
                      required
                    />
                  </div>

                  {/* Amount */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.donationAmount} *
                    </label>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-all text-lg font-semibold"
                      required
                    />

                    {/* Quick Amount Buttons */}
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 mb-2">{t.quickAmounts}</p>
                      <div className="flex flex-wrap gap-2">
                        {quickAmounts.map((quickAmount) => (
                          <button
                            key={quickAmount}
                            type="button"
                            onClick={() => setAmount(quickAmount.toString())}
                            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                              amount === quickAmount.toString()
                                ? "bg-orange text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            GHS {quickAmount}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Donate Button */}
                  <div className="pt-4">
                    <PaystackButton
                      {...componentProps}
                      disabled={!isFormValid}
                      className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                        isFormValid
                          ? "bg-orange text-white hover:bg-orange-600 shadow-lg hover:shadow-xl transform hover:scale-105"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    />
                  </div>

                  {/* Security Note */}
                  <p className="text-xs text-gray-500 text-center mt-4">
                    🔒 {t.securePayment}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ) : null;
};

export default DonateForm;
