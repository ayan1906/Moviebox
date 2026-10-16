import React from 'react';
import { X } from 'lucide-react';

const Moviemodal = ({ movie, setmovie }) => {
    return (
        <>

            {movie && (
                <div
                    onClick={() => setmovie(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
                >
                    <div
                        className="bg-[#1c1d21] border border-white/10 rounded-3xl p-6 md:p-8 max-w-2xl w-full h-120 relative shadow-2xl overflow-hidden text-white"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setmovie(null)}
                            className="absolute cursor-pointer right-4 top-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition text-white"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Modal Top Content (Poster + Info Side by Side) */}
                        <div className="flex flex-col sm:flex-row gap-6 items-start">

                            {/* Left: Movie Poster */}
                            <div className="shrink-0 mx-auto sm:mx-0">
                                <img
                                    className="h-64 w-44 md:h-72 md:w-48 rounded-xl object-cover shadow-lg border border-white/10"
                                    src={movie.image?.original || "https://via.placeholder.com/210x295?text=No+Image"}
                                    alt={movie.name}
                                />
                            </div>

                            {/* Right: Movie Info */}
                            <div className="flex-1 w-full">
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                                    {movie.name}
                                </h2>

                                <div className="flex items-center gap-3 text-sm text-gray-300 mb-3">
                                    {movie.rating?.average && (
                                        <span className="bg-yellow-500/20 text-yellow-400 font-semibold px-2.5 py-0.5 rounded border border-yellow-500/30">
                                            ⭐ {movie.rating.average}
                                        </span>
                                    )}
                                    {movie.language && (
                                        <span className="bg-white/10 px-2.5 py-0.5 rounded text-xs uppercase font-medium">
                                            {movie.language}
                                        </span>
                                    )}
                                </div>

                                {/* Genres Badges */}
                                <div className="flex flex-wrap gap-2">
                                    {movie.genres?.map((genr, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1 rounded-full text-gray-300"
                                        >
                                            {genr}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-4 pt-4 border-t border-white/10 max-h-36  pr-2 ">
                                    <p className="text-xs text-gray-300 leading-relaxed">
                                        {movie.summary
                                            ? movie.summary.replace(/<[^>]*>?/gm, "")
                                            : "No summary available for this movie/show."}
                                    </p>
                                <div className="flex justify-end mt-2">
                                    <a className="bg-[#0f0f13] px-3 py-2 rounded-full " href={movie.url} target = "blank">Watch Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom: Summary Section */}

                    </div>
                </div>
            )}
        </>
    );
};

export default Moviemodal;