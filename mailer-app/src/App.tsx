import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import Mailer from './routes/Mailer'
import { Sent } from './routes/Sent'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/compose' element={<Mailer />} />
          <Route path='/sent' element={<Sent />}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App