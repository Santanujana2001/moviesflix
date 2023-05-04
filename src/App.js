import React from 'react'
import {Routes , Route} from 'react-router-dom';
import Main from './Main';
import Book from './Book';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/more' element={<Book/>}/>
      </Routes>
    </>
  )
}

export default App