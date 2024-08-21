import {
  cilLibrary,
  cilNotes,
  cilPlus,
  cilSearch,
  cilSpeedometer,
  cilUser
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import React from 'react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/admin',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Quản lý đề thi',
  },
  {
    component: CNavItem,
    name: 'Thêm đề thi',
    to: '/admin/exam',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Xem đề thi',
    to: '/admin/exam/view',
    icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Ngân hàng câu hỏi',
    to: '/admin/add-question',
    icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Thêm câu hỏi',
        to: '/admin/add-question'
      },
      {
        component: CNavItem,
        name: 'Danh sách câu hỏi',
        to: '/admin/list-question',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Quản lý người dùng',
  },
  {
    component: CNavItem,
    name: 'Danh sách người dùng',
    to: '/admin/view-users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Kết quả thi',
    to: '/admin/view-results',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
   
  }
]

export default _nav
