import { Routes, Route } from 'react-router-dom'
import { Bookmarks, Home, Registration } from '../pages'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='bookmarks' element={<Bookmarks />}/>
        <Route path='registr' element={<Registration />}/>
      </Routes>
    </>
  )
}