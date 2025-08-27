
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingPage/LandingPage'
import SignUp from './pages/singUp/SignUp'
import Login from './pages/login/Login'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import Dashboard from './components/dashboard/Dashoard'
import ProtectedRoute from './components/ProtectedRoute'
import AuthCallback from './components/AuthCallback'
import SchoolDetails from './pages/schoolDetails/SchoolDetails'
import PropertyDetails from './pages/propertyDetails/PropertyDetails'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'






function App() {


  return (
    <>
    <Header/>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
         
          <Route path="/app" element={
            <ProtectedRoute>

            <Dashboard />
            </ProtectedRoute>
            
            } >
          {/* <Route path="schools" element={<SchoolCard />} /> */}
          <Route path="school-details/:id" element={<SchoolDetails />} />
          {/* <Route path="properties" element={<PropertyCard />} /> */}
          <Route path="property-details/:id" element={<PropertyDetails />} />
          </Route>
         
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    <Footer/>
    </>
  )
}

export default App
