import React from 'react'
import AppSidebar from '../components/AppSidebar'
import AppContent from '../components/AppContent'
import AppHeader from '../components/AppHeader'
import { useNavigate } from 'react-router-dom'
import UnAuthorized from '../views/pages/UnAuthorized'
const DefaultLayout = () => {
  const navigate = useNavigate();
  const userInfo =  localStorage.getItem('userInfo')
  if(userInfo==null){
    navigate('/login');
  }
  if(JSON.parse(userInfo)['role']=='admin'){
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
  else{
    return(
      <UnAuthorized/>
    )
  }
}

export default DefaultLayout
