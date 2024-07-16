import React from 'react'

const Dashboard = React.lazy(() => import('./views/admin/DashBoard'))
const AddExam = React.lazy(() => import('./views/admin/AddExam'))
const ViewExam = React.lazy(() => import('./views/admin/ViewExam'))
const AddQuestion = React.lazy(() => import('./views/admin/AddQuestion'))
const ListQuestion = React.lazy(() => import('./views/admin/ListQuestion'))
// const ViewUsers = React.lazy(() => import('./views/admin/user/ViewUsers'))
// const ViewResults = React.lazy(() => import('./views/admin/results/ViewResults'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/admin', name: 'Dashboard', element: Dashboard },
  { path: '/admin/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/admin/exam', name: 'Thêm đề thi', element: AddExam },
  { path: '/admin/exam/view', name: 'Xem đề thi', element: ViewExam },
  {
    path: '/admin/add-question',
    name: 'Thêm câu hỏi',
    element: AddQuestion
  },
  { path: '/admin/list-question', name: 'Ngân hàng câu hỏi', element: ListQuestion },
//   { path: '/admin/view-users', name: 'Danh sách người dùng', element: ViewUsers },
//   { path: '/admin/view-results', name: 'Kết quả thi', element: ViewResults },
]

export default routes
