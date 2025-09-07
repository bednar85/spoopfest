// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { MovieCard } from './components/molecules/movie-card'
import { moviesList } from './assets/data'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {moviesList.map((movie) => (<MovieCard movie={movie} />))}
    </>
  )
}

export default App



