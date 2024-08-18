import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass } from '@coreui/icons'
import { Link } from 'react-router-dom'

const UnAuthorized = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <span className="clearfix">
              <h1 className="float-start display-3 me-4">403</h1>
              <h4 className="pt-3">Houston, we have a problem!</h4>
              <p className="text-body-secondary float-start">
                Bạn không có quyền truy cập trang web này. Vui lòng đăng nhập với tư cách Admin
              </p>
            </span>
            <Link to={'/logout'} style={{marginY:"auto"}}>
                Đăng nhập với trang Admin
            </Link>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default UnAuthorized
