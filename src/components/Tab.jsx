const Tab = ({ label }) => {
  return (
    <button className="justify-center items-center px-7 py-4 border font-poppins text-lg leading-none bg-orange text-white font-bold border-none hover:scale-110 rounded-xl">
      {label}
    </button>
  );
};

export default Tab;
