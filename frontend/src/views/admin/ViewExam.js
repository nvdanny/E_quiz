import { cilPencil, cilSearch, cilTrash } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CModalTitle
} from '@coreui/react';
import React, { useState } from 'react';

const examData = [
  { id: 1, name: 'Đề thi số 1', timeLimit: '60 phút', questionCount: 2 },
  { id: 2, name: 'Đề thi số 2', timeLimit: '45 phút', questionCount: 2 },
];

const ViewExam = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedExamId, setSelectedExamId] = useState(null);
  const [visible, setVisible] = useState(false)

  const handleDeleteExam = (id) => {
    setSelectedExamId(id);
    setShowDeleteModal(true);
  };

  const confirmDeleteExam = () => {
    console.log('Deleting exam with id:', selectedExamId);
    // Perform delete operation here
    setShowDeleteModal(false);
  };

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Danh sách đề thi
          </CCardHeader>
          <CCardBody>
            <CTable striped hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col" className="text-center">ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">Tên đề thi</CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">Thời gian thi</CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">Số lượng câu hỏi</CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {examData.map((exam) => (
                  <CTableRow key={exam.id}>
                    <CTableDataCell className="text-center">{exam.id}</CTableDataCell>
                    <CTableDataCell className="text-center">{exam.name}</CTableDataCell>
                    <CTableDataCell className="text-center">{exam.timeLimit}</CTableDataCell>
                    <CTableDataCell className="text-center">{exam.questionCount}</CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CButton size="sm" color="info" className="me-2">
                        <CIcon icon={cilSearch} />
                      </CButton>
                      <CButton size="sm" color="warning" className="me-2">
                        <CIcon icon={cilPencil} />
                      </CButton>
                      <CButton size="sm" color="danger" onClick={() => handleDeleteExam(exam.id)}>
                        <CIcon icon={cilTrash} />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>

      <CModal visible={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <CModalHeader closeButton>
          Xác nhận xóa đề thi
        </CModalHeader>
        <CModalBody>
          Bạn có chắc chắn muốn xóa đề thi này không?
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={confirmDeleteExam}>Xóa</CButton>{' '}
          <CButton color="secondary" onClick={() => setShowDeleteModal(false)}>Hủy</CButton>
        </CModalFooter>
      </CModal>
    </CRow>
  );
};

export default ViewExam;
