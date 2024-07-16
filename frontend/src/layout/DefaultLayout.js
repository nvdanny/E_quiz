import React from 'react'
import AppSidebar from '../components/AppSidebar'
import AppContent from '../components/AppContent'
import AppHeader from '../components/AppHeader'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 ml-2">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
