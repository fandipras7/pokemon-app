import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../../pages/Home'
import AddPokemon from '../../pages/Tambah'
import Detail from '../../pages/Detail'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
        </Routes>
        <Routes>
            <Route path='/AddPokemon' element={<AddPokemon/>}></Route>
        </Routes>
        <Routes>
            <Route path='/Detail/:id' element={<Detail/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router