import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import CardDesc from './Components/CardDesc'
import { Routes,Route } from 'react-router-dom';
import MemePage from './Pages/MemePage';
import VibeCheck from './Pages/VibeCheck';
import Edit from './Components/Edit';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<CardDesc/>}/>
        <Route path='/meme' element={<MemePage/>} />
        <Route path='/vibecheck' element={<VibeCheck/>} />
        <Route path='/edit' element={<Edit/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
        
    </div>
  )
}

export default App


