import React from 'react'
import styled from 'styled-components';
import { ChevronRight } from 'lucide-react'
import { useMovies } from '../context/MovieContext';

const PopularBD = () => {
    const { data } = useMovies()

    const displayedMovie = data.slice(121, 130)

    return (
        <div className=" px-6 md:px-10 pt-10">
            <h1 className="text-white flex items-center text-2xl font-bold mb-4 cursor-pointer group">Popular in BD <ChevronRight className="group-hover:translate-x-1 transition duration-200" /></h1>
            <StyledWrapper>
                <div className="slider" style={{ '--width': '200px', '--height': '300px', '--quantity': displayedMovie.length }}>
                    <div className="list">

                        {displayedMovie.map((movie, index) => (
                            <div key={movie.id} className="item" style={{ '--position': index + 1 }}>
                                <div className="card cursor-pointer">
                                    <img className="w-80 rounded-4xl" src={movie.image?.original} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </StyledWrapper>
        </div>
    );
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    color: white;
    text-align: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card p {
    font-size: 14px;
    color: white;
    margin: 4px 0;
  }

  .slider {
    width: 100%;
    height: var(--height);
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
  }
  .slider .list {
    display: flex;
    width: 100%;
    min-width: calc(var(--width) * var(--quantity));
    position: relative;
  }
  .slider .list .item {
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: autoRun 10s linear infinite;
    transition: filter 0.5s;
    animation-delay: calc(
      (10s / var(--quantity)) * (var(--position) - 1) - 10s
    ) !important;
  }
  .slider .list .item img {
    width: 100%;
  }
  @keyframes autoRun {
    from {
      left: 100%;
    }
    to {
      left: calc(var(--width) * -1);
    }
  }
  .slider:hover .item {
    animation-play-state: paused !important;
    filter: grayscale(1);
  }
  .slider .item:hover {
    filter: grayscale(0);
  }
  .slider[reverse="true"] .item {
    animation: reversePlay 10s linear infinite;
  }
  @keyframes reversePlay {
    from {
      left: calc(var(--width) * -1);
    }
    to {
      left: 100%;
    }
  }
`;


export default PopularBD