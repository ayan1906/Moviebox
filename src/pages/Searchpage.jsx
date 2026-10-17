import { useState } from 'react'
import { useMovies } from '../context/MovieContext';
import Moviemodal from '../components/Moviemodal'

import { Search } from 'lucide-react'
const Searchpage = () => {
    const { data, loading, error } = useMovies();
    const [text, settext] = useState('')
    const [movie, setMovie] = useState(null)
    if (loading) {
        return <p>Loading movies...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }


    const handlesearch = data.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
    )


    const displaycard = text === '' ? handlesearch.slice(30, 90) : handlesearch; return (
        <div>
            <div className='flex items-center justify-center w-full mt-6'>
                <h1 className='w-140 bg-[#393838] py-2 px-3 rounded-full text-slate-300 flex items-center gap-2'><Search className=' w-5 h-5' /> <input onChange={(e) => { settext(e.target.value) }} className='outline-none w-130' value={text} type="text" placeholder="Search Titles" /></h1>
            </div>
            <h2 className="text-2xl font-bold mt-6 text-white mx-10">Popular Searches</h2>

            <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-6 gap-6 mx-10 " >
                {displaycard.map((movie) => (
                    <div onClick={() => { setMovie(movie) }} className=" group overflow-hidden rounded-xl">
                        <img className="cursor-pointer object-cover rounded-2xl h-70 group-hover:scale-105 transition duration-300 " src={movie.image?.original} alt="" />

                    </div>
                ))}

            </div>
            <Moviemodal movie={movie} setmovie={setMovie} />

        </div>
    )
}

export default Searchpage