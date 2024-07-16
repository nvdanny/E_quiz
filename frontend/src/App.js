import React, { Suspense } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { CSpinner } from '@coreui/react'
import './scss/style.scss'

// Lazy load the components
const ExamPage = React.lazy(() => import('./views/pages/ExamPage'))
const Login = React.lazy(() => import('./views/pages/Login'))
const LandingPage = React.lazy(() => import('./views/pages/LandingPage'))
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

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
          <Route path="/exam" name="Login Page" element={<ExamPage />} />
          {/* http://localhost:3000/#/login */}
          <Route exact path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/welcome" element={<LandingPage />} />

          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
