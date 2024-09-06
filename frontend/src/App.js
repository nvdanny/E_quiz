import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // Sử dụng BrowserRouter thay vì HashRouter
import { CSpinner } from '@coreui/react'
import './scss/style.scss'
import {Cloudinary} from "@cloudinary/url-gen";
import LandingPage from './views/pages/LandingPage';
// Lazy load the components
const ExamPage = React.lazy(() => import('./views/pages/ExamPage'))
const Login = React.lazy(() => import('./views/pages/Login'))
const Logout = React.lazy(() => import('./views/pages/Logout'))
const Register = React.lazy(() => import('./views/pages/Register'))
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dxoenxs1a'
  }
});

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route path="/exam" name="Exam Page" element={<ExamPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/logout" element={<Logout/>} />
          <Route path="/welcome" element={<LandingPage />} />
          <Route path="/admin/*" name="Home" element={<DefaultLayout />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App

