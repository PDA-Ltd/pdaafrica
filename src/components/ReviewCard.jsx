import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, position, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="relative mb-6">
        <img
          src={imgURL}
          alt={customerName}
          className="rounded-full object-cover w-24 h-24 border-4 border-orange/20"
        />
      </div>
      <p className="max-w-sm text-center text-gray-700 leading-relaxed mb-6 font-poppins text-base">
        "{feedback}"
      </p>
      <div className="flex justify-center items-center gap-2 mb-4">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src={star}
            width={20}
            height={20}
            alt="rating star"
            className={`object-contain ${i < parseInt(rating) ? "opacity-100" : "opacity-30"}`}
          />
        ))}
        <span className="text-lg font-poppins text-gray-600 ml-2">({rating})</span>
      </div>
      <p className="text-lg font-poppins text-orange font-semibold mb-2">{position}</p>
      <h3 className="font-poppins text-2xl text-center font-bold text-gray-800">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
