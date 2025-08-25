
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingPage/LandingPage'
import SignUp from './pages/singUp/SignUp'
import Login from './pages/login/Login'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import { AppLayout } from './pages/appLayout/AppLayout'
import AppNav from './components/appNav/AppNav'
import { PropertiesList } from './components/cityList/PropertiesList'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/app' element={<AppLayout/>} >
        <Route index element={<p>Welcome</p>} />
        <Route path='properties' element={<PropertiesList/>} />
        <Route path='schools' element={<p>List of shcools</p>} />
        <Route path='work' element={<p>Work Places</p>} />
        <Route path='form' element={<p>Form</p>} />
      </Route>
      <Route path='/app-nav' element={<AppNav/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    </>
  )
}

export default App
