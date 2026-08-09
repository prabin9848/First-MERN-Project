import React from 'react'
import { Route, Routes} from "react-router"
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetail from './pages/NoteDetail'
import { toast, Toaster } from "react-hot-toast"

const App = () => {
  return (
    <div data-theme="forest">
      
      <Routes>
        <Route path ="/" element={<HomePage />}></Route>
        <Route path ="/create" element={<CreatePage />}></Route>
        <Route path ="/note/:id" element={<NoteDetail />}></Route>
      </Routes>
    </div>
  )
}

export default App
