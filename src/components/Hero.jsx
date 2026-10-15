import React from 'react'
import { ChevronRight } from 'lucide-react'

const Hero = () => {
    return (
        <div className='relative w-full h-[380px] md:h-[450px] overflow-hidden bg-[#0a0724] flex items-center px-6 md:px-16 -mt-16 pt-16'>

            {/* বাম থেকে ডানে  কালার ওভারলে (ছবির ওপর যে বেগুনি-নীল শ্যাডোটা পড়েছে) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#580c4d] via-[#1b1055] via-55% to-transparent z-10"></div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>

            <div className='flex items-center justify-between w-full'>

                <div className="left relative z-20 text-white max-w-xl space-y-4">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        Welcome To FlowFlix!
                    </h1>
                    <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                        Explore Our Free Movies and TV, Plus discover what's trending across your favourite streaming services.
                    </p>

                    {/* Browse Button */}
                    <div className="pt-4 flex items-center gap-3 cursor-pointer group w-fit">
                        <span className="bg-black/80 text-yellow-500 text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1 border border-white/10">
                            <ChevronRight className="w-3.5 h-3.5 stroke-[3]" /> Free
                        </span>
                        <span className="font-bold text-base md:text-lg flex items-center gap-1 ">
                            Browse Movies & TV Shows <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </div>
                </div>

                <div className="absolute -right-16 md:-right-10 top-0 h-full w-[65%] md:w-[50%] flex items-center justify-center pointer-events-none">
                    <img
                        className='w-full h-[140%] object-cover rotate-12 scale-110 opacity-85'
                        src="/images/homeimage.jpg"
                        alt="FlowFlix Movies"
                    />
                </div>

            </div>
        </div>
    )
}

export default Hero