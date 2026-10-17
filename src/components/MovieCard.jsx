import { Star } from 'lucide-react'
const MovieCard = ({ name, image, rating }) => {
    return (
        <div className="flex flex-col gap-2 group cursor-pointer">
            {/* Image Container */}
            <div className="relative w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden border border-white/10 bg-[#1c1d21] shadow-md transition-transform duration-300 group-hover:scale-105">
                <img 
                    className="w-full h-full object-cover" 
                    src={image || "https://via.placeholder.com/210x295?text=No+Image"} 
                    alt={name} 
                />
            </div>

            {/* Movie Name & Rating */}
            <div className="flex items-center justify-between px-1 text-white">
                <h1 className="font-semibold text-sm truncate max-w-[70%]" title={name}>
                    {name}
                </h1>
                <div className="flex items-center gap-1 text-xs text-gray-300 font-medium bg-white/10 px-2 py-0.5 rounded-md">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" /> 
                    <span>{rating || "N/A"}</span>
                </div>
            </div>
        </div>
    )
}

export default MovieCard