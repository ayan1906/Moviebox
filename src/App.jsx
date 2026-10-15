import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Router } from './routes/Routes'
import { MovieProvider } from './context/MovieContext'
// https://api.tvmaze.com/shows
const App = () => {
  return (
    <div>
      <MovieProvider>
        <RouterProvider router={Router} />
      </MovieProvider>
    </div>
  )
}

export default App