import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import ReviewForm from "../components/ReviewForm";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";

const TestimonialsPage = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.testimonials : fr.testimonials;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen font-poppins">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange via-orange/90 to-orange/80">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-3">
              {t.title.split(" ").slice(0, 1).join(" ")} <span className="text-black">{t.title.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mt-12 mb-12">
            <Slider {...settings}>
              {reviews.map((review, index) => {
                // Map review to translated version
                const reviewKeys = ["eugene", "beyondBeans", "emelia", "janet"];
                const reviewKey = reviewKeys[index];
                const reviewTranslations = language === "en" ? en.reviews : fr.reviews;
                const translatedReview = reviewTranslations[reviewKey] || {};
                const reviewPositions = language === "en" ? en.testimonials.reviewPositions : fr.testimonials.reviewPositions;
                const reviewFeedback = language === "en" ? en.testimonials.reviewFeedback : fr.testimonials.reviewFeedback;
                
                return (
                  <div key={index} className="px-4">
                    <ReviewCard
                      imgURL={review.imgURL}
                      customerName={translatedReview.name || review.customerName}
                      rating={review.rating}
                      position={reviewPositions?.[review.position] || review.position}
                      feedback={reviewFeedback?.[review.feedback] || review.feedback}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>

          {/* Leave Review Button */}
          <div className="flex justify-center mt-10">
            <button
              className="bg-orange text-white py-4 px-8 rounded-lg hover:bg-orange/90 text-lg font-poppins font-semibold transition-colors shadow-lg hover:shadow-xl"
              onClick={openModal}
            >
              {t.leaveReview}
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative max-h-screen overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <ReviewForm closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsPage;
