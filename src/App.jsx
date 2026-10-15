import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Router } from './routes/Routes'
// https://api.tvmaze.com/shows
const App = () => {
  return (
    <div>
      
      <RouterProvider router={Router}/>
    </div>
  )
}

export default App