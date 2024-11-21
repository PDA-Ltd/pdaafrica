<section className="py-12 ">
<h2 className="font-poppins font-semibold text-2xl text-center text-red mb-8">
  Project Status
</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Achievements Section */}
  <div className="px-4 animate-slide-in">
    <h3 className="text-lg font-semibold text-orange">Achievements</h3>
    <ul className="list-disc list-inside text-gray-700 leading-relaxed font-poppins">
      <li>Two community libraries renovated.</li>
      <li>Reading clubs established in each community.</li>
      <li>Weekly reading sessions conducted with children.</li>
    </ul>

    {/* Renovation Images Gallery */}
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Replace with actual renovation images */}
      <img
        src={asuaold}
        alt="Library Renovation 1"
        className="rounded-lg shadow-md"
      />
      <img
        src={asuanew}
        alt="Library Renovation 2"
        className="rounded-lg shadow-md"
      />
      <img
        src={boatengold}
        alt="Library Renovation 3"
        className="rounded-lg shadow-md"
      />
      <img
        src={boatengnew}
        alt="Library Renovation 4"
        className="rounded-lg shadow-md"
      />
    </div>
  </div>

  {/* Milestones Section */}
  <div className="px-4 animate-slide-in">
    <h3 className="text-lg font-semibold text-orange">Milestones</h3>
    <p className="text-gray-700 leading-relaxed font-poppins">
      Since project inception, numerous milestones have been reached:
    </p>
    <ul className="list-disc list-inside text-gray-700 mt-4 leading-relaxed font-poppins">
      <li>Initial community consultations completed.</li>
      <li>
        5000 books purchased and distributed to community libraries.
      </li>
      <li>First reading competition held with over 200 children.</li>
    </ul>
  </div>
</div>
</section>