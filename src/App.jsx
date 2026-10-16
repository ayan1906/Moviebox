import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Router } from './routes/Routes'
import { MovieProvider } from './context/MovieContext'
import { AuthProvider } from './context/AuthContext'
// https://api.tvmaze.com/shows
const App = () => {
  return (
    <div>
      <AuthProvider>
        <MovieProvider>
          <RouterProvider router={Router} />
        </MovieProvider>
      </AuthProvider>
    </div>
  )
}

export default App