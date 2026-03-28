/**
 * Story article with portrait + byline beside the narrative (lg+), stacked on small screens.
 * @param {{ story: object, t: object, name: string, location: string, group: string, image: string }} props
 */
const VslaImpactStoryBody = ({ story, t, name, location, group, image }) => (
  <div className="max-w-5xl mx-auto px-6 pt-20 pb-12 sm:pt-24 md:pt-28 md:pb-16">
    <div className="lg:grid lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:gap-x-10 xl:gap-x-12 lg:items-start">
      <header className="mb-10 lg:mb-0 text-center lg:text-left space-y-4 lg:sticky lg:top-28 lg:self-start">
        <figure className="mx-auto lg:mx-0 w-full max-w-[220px] sm:max-w-[260px] lg:max-w-none">
          <img
            src={image}
            alt={name}
            className="w-full h-auto object-contain object-top rounded-sm"
            loading="eager"
            decoding="async"
          />
          <figcaption className="sr-only">
            {name}, {location}, {group}
          </figcaption>
        </figure>
        <h1 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-bold text-gray-900 leading-tight text-balance">
          {name}
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          <span className="text-gray-800 font-medium">{location}</span>
          <span className="text-orange mx-2">·</span>
          <span>{group}</span>
        </p>
      </header>

      <div className="min-w-0">
        <div className="mb-10">
          <div className="flex items-start gap-3">
            <span className="text-orange text-4xl md:text-5xl font-bold leading-none mt-1 flex-shrink-0" aria-hidden>
              &ldquo;
            </span>
            <p className="text-lg md:text-xl font-semibold text-gray-800 italic leading-relaxed">
              {story.introduction}
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {story.seeingPossibilities && (
            <div>
              <h2 className="text-xl font-bold text-orange mb-3">{t.seeingPossibilities}</h2>
              <p className="text-gray-700 leading-relaxed">{story.seeingPossibilities}</p>
            </div>
          )}
          {story.takingRisks && (
            <div>
              <h2 className="text-xl font-bold text-orange mb-3">{t.takingRisks}</h2>
              <p className="text-gray-700 leading-relaxed">{story.takingRisks}</p>
            </div>
          )}
          {story.learningToTrack && (
            <div>
              <h2 className="text-xl font-bold text-orange mb-3">{t.learningToTrack}</h2>
              <p className="text-gray-700 leading-relaxed">{story.learningToTrack}</p>
            </div>
          )}
          {story.learningToSave && (
            <div>
              <h2 className="text-xl font-bold text-orange mb-3">{t.learningToSave}</h2>
              <p className="text-gray-700 leading-relaxed">{story.learningToSave}</p>
            </div>
          )}
          {story.rethinkingSpending && (
            <div>
              <h2 className="text-xl font-bold text-orange mb-3">{t.rethinkingSpending}</h2>
              <p className="text-gray-700 leading-relaxed">{story.rethinkingSpending}</p>
            </div>
          )}
          {story.strengtheningFamily && (
            <div>
              <h2 className="text-xl font-bold text-orange mb-3">{t.strengtheningFamily}</h2>
              <p className="text-gray-700 leading-relaxed">{story.strengtheningFamily}</p>
            </div>
          )}

          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-700 leading-relaxed italic">{story.conclusion}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VslaImpactStoryBody;
