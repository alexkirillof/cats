import { Route, Routes } from 'react-router-dom'

import { Main } from '../pages/Main/Main.tsx'
import { Favorites } from '../../src/pages/Favorites/Favorites.tsx'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/favorites' element={<Favorites />} />
    </Routes>
  )
}
