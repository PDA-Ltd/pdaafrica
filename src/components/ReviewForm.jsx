import { useState } from "react";

const ReviewForm = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [video, setVideo] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form data object
    const formData = {
      email,
      rating,
      position,
      review,
      name: `${firstName} ${lastName}`,
      photo,
      video,
    };

    try {
      // Sending form data to Formspree
      const response = await fetch("https://formspree.io/f/mgorzvzn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setIsSubmitting(false);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error(error);
      alert("There was a problem submitting your review. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col space-y-4 font-poppins">
      {/* Show thank you message after form submission */}
      {submitted ? (
        <div className="mt-4 p-3 rounded-lg bg-red text-white text-center font-poppins">
          Thank you for submitting your review!
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 font-poppins"
        >
          <label className="font-bold">Rating *</label>
          <div className="flex space-x-1">
            {[...Array(5)].map((star, index) => (
              <button
                type="button"
                key={index}
                className={`w-20 h-20 ${
                  rating > index ? "text-orange" : "text-gray-300"
                }`}
                onClick={() => setRating(index + 1)}
              >
                ★
              </button>
            ))}
          </div>

          <label className="font-bold">Review *</label>
          <textarea
            className="border p-2 rounded"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />

          <label className="font-bold">First and Last Name *</label>
          <input
            type="text"
            className="border p-2 rounded"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            className="border p-2 rounded"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
          />

          <label className="font-bold">Position *</label>
          <input
            type="text"
            className="border p-2 rounded"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />

          <label className="font-bold">Email *</label>
          <input
            type="email"
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="font-bold">Video Testimonial</label>
          <input
            type="file"
            accept="video/*"
            className="border p-2 rounded"
            onChange={(e) => setVideo(e.target.files[0])}
          />

          <label className="font-bold">Share Photos</label>
          <input
            type="file"
            accept="image/*"
            className="border p-2 rounded"
            onChange={(e) => setPhoto(e.target.files[0])}
          />

          <button
            type="submit"
            className="bg-orange text-white py-2 px-4 rounded-lg hover:bg-red font-poppins"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ReviewForm;
