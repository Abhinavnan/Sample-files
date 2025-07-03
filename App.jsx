import React from 'react'
import { BrowserRouter as  Router, Route, Routes, Navigate } from 'react-router-dom'; 
import CredentialsSignInPage from './components/LogIn/Login'
import Header from './Kart/Header/Header';
import './App.css'

function App() {

  return (
    <Router>
      <Header />   
      <Routes>
        <Route path="/" element={ <CredentialsSignInPage />} />
        <Route path="*" element={<Navigate to="/" replace />} /> {/*Redirect to home for invalid path*/}
      </Routes>
    </Router>
  )
}

export default App;

