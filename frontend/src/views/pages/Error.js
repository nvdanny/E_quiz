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
              <h1 className="float-start display-3 me-4">404</h1>
              <h4 className="pt-3">Houston, we have a problem!</h4>
              <p className="text-body-secondary float-start">
                Xin lỗi vì bất tiện. Có lỗi xảy ra, vui lòng báo Admin.
              </p>
            </span>
            <Link to={'/'} style={{marginY:"auto"}}>
                Quay lại trang Landing 
            </Link>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default UnAuthorized
