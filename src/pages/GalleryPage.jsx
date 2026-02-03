import React, { useState } from "react";
import { Data } from "../constants";
import AfricaGallery from "../sections/AfricaGallery";
import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";
import { fr } from "../translations/fr";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const GalleryPage = () => {
  const { language } = useLanguage();
  const t = language === "en" ? en.gallery : fr.gallery;
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const [heroRef, heroVisible] = useScrollAnimation();
  const [videosRef, videosVisible] = useScrollAnimation();
  const [photosRef, photosVisible] = useScrollAnimation();

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  // Extract video ID from YouTube embed URL
  const getVideoId = (url) => {
    if (!url) return null;
    const match = url.match(/embed\/([^?]+)/);
    return match ? match[1] : null;
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
          <div ref={heroRef} className={`max-w-4xl mx-auto text-center ${heroVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {t.title.split(" ").slice(0, 1).join(" ")} <span className="text-yellow-300">{t.title.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={videosRef} className={`flex justify-between items-center mb-10 ${videosVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {t.videos}
              </h2>
              <p className="text-lg text-gray-600">
                {t.videosDesc}
              </p>
            </div>
            <a
              href="https://www.youtube.com/@pdatv3656/playlists"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center bg-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange/90 transition-colors"
            >
              {t.moreVideos}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Data.filter(video => video.link).map((video, index) => {
              const videoId = getVideoId(video.link);
              const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : video.img;
              
              return (
                <div
                  key={index}
                  onClick={() => openVideoModal(video)}
                  className="group relative overflow-hidden rounded-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
                >
                  <div className="relative aspect-video bg-gray-200">
                    <img
                      src={thumbnailUrl}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-orange ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {video.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile More Videos Button */}
          <div className="mt-8 text-center md:hidden">
            <a
              href="https://www.youtube.com/@pdatv3656/playlists"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange/90 transition-colors"
            >
              {t.moreVideos}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={photosRef} className={`flex justify-between items-center mb-10 ${photosVisible ? 'animate-on-scroll visible fade-up' : 'animate-on-scroll fade-up'}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {t.photos}
              </h2>
              <p className="text-lg text-gray-600">
                {t.photosDesc}
              </p>
            </div>
          </div>
          <AfricaGallery />
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4" onClick={closeVideoModal}>
          <div className="bg-white rounded-lg max-w-4xl w-full relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-orange transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video">
              <iframe
                src={selectedVideo.link}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedVideo.title}</h3>
              {selectedVideo.description && (
                <p className="text-gray-600">{selectedVideo.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
