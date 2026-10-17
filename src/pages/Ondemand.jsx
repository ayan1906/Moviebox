import { useState } from 'react'
import { useMovies } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';
import Moviemodal from '../components/Moviemodal';
const Ondemand = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loadmovie, setloadmovie] = useState(12)
  const [movie, setMovie] = useState(null)
  const { data, loading, error } = useMovies();

  if (loading) {
    return <p className="text-white p-10">Loading movies...</p>;
  }

  if (error) {
    return <p className="text-red-500 p-10">{error}</p>;
  }

  const category = ['all', ...new Set(data.flatMap((item) => item.genres || []))];
  const filtermovie = selectedCategory == 'all' ? data : data.filter((movie) => movie.genres?.includes(selectedCategory))
  const displaycard = filtermovie.slice(0, loadmovie)

  const handleshowmore = () => {
    setloadmovie(loadmovie + 12)
  }

  return (
    // pb-24 বা pb-32 দেওয়া হয়েছে যাতে নিচের বটম নেভবারের নিচে কন্টেন্ট ঢাকা না পড়ে
    <div className="text-white pb-28 md:pb-16 overflow-x-hidden">
      
      {/* Hero Section */}
      <div className="flex flex-col max-w-3xl mt-20 md:mt-24 px-6 md:px-16 gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Watch Free Movies & TV Shows
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
          You've come to the right place. We've got a bunch of free movies and tv shows here at flix. And you can start watching right away from any device, anywhere. Join Flix for free today.
        </p>
      </div>

      {/* Category Section */}
      <div className="w-full px-6 md:px-16 my-6 md:my-8">
        <h2 className="text-lg md:text-xl font-bold text-white mb-3">Categories</h2>

        {/* Horizontal Scrollable Category Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 custom-scrollbar scroll-smooth">
          {category.map((cat, index) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={index}
                onClick={() => {
                  setSelectedCategory(cat);
                  setloadmovie(12);
                }}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-white text-black shadow-lg scale-105"
                    : "bg-[#1c1d21] text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <span className="capitalize">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Movie Grid Section */}
      <div className="px-6 md:px-16">
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5'>
          {displaycard.map((movie, index) => (
            <div onClick={()=>{setMovie(movie)}} key={index}>
              <MovieCard  name={movie.name} image={movie.image?.original} rating={movie.rating?.average} />
            </div>
          ))}
          <Moviemodal movie={movie} setmovie={setMovie} />
        </div>

        {/* Show More Button */}
        {loadmovie < filtermovie.length && (
          <div className="flex justify-center mt-10">
            <button 
              onClick={handleshowmore}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-full font-semibold transition duration-300 cursor-pointer text-sm"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Ondemand;