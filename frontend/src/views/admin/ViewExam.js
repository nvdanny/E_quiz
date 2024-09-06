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
} from '@coreui/react';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteExam, editExam, listExams } from '../../api/ExamApi'; // Import các hàm từ ExamApi

const ViewExam = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedExamId, setSelectedExamId] = useState(null);
  const [exams, setExams] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    // Fetch danh sách đề thi từ API khi component được render
    const fetchExams = async () => {
      const token = localStorage.getItem('accessToken'); // Giả sử token được lưu trong localStorage
      const response = await listExams(token);
      if (response.status==200) {
        setExams(response.data.msg.exams);
      } else {
        console.error(response.error);
      }
    };

    fetchExams();
  }, []);

  const handleDeleteExam = (id) => {

    setSelectedExamId(id);
    setShowDeleteModal(true);
  };

  const confirmDeleteExam = async () => {
    const token = localStorage.getItem('accessToken');
    const response = await deleteExam(selectedExamId, token);
    if (response.status == 200) {
      setExams(exams.filter(exam => exam._id !== selectedExamId));
      setShowDeleteModal(false);
    } else {
      console.error(response.error);
      setShowDeleteModal(false);
    }
  };

  const handleEditExam = (id) => {
    navigate(`/admin/exam/${id}`);
  };

  const toggleExamActive = async (id, isActive) => {
    const token = localStorage.getItem('accessToken');
    const newStatus = !isActive;
    const response = await editExam(id, { active: newStatus }, token);
    if (response.status === 200) {
      setExams(exams.map(exam => 
        exam._id === id ? { ...exam, active: newStatus } : exam
      ));
    } else {
      console.error(response.error);
    }
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
                  <CTableHeaderCell scope="col" className="text-center">STT</CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">Tên đề thi</CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">Thời gian thi (phút)</CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">Số lượng câu hỏi</CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {exams.map((exam,index) => (
                  <CTableRow key={exam.id}>
                    <CTableDataCell className="text-center">{index+1}</CTableDataCell>
                    <CTableDataCell className="text-center">{exam.title}</CTableDataCell>
                    <CTableDataCell className="text-center">{exam.duration}</CTableDataCell>
                    <CTableDataCell className="text-center">{exam.questions.length}</CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CButton size="sm" color="info" className="me-2">
                        <CIcon icon={cilSearch} />
                      </CButton>
                      <CButton size="sm" color="warning" className="me-2" onClick={() => handleEditExam(exam._id)}>
                        <CIcon icon={cilPencil} />
                      </CButton>
                      <CButton size="sm" color="danger" className="me-2" onClick={() => handleDeleteExam(exam._id)}>
                        <CIcon icon={cilTrash} />
                      </CButton>
                      <CButton size="sm"
                        color={exam.active ? 'success' : 'secondary'}
                        onClick={() => toggleExamActive(exam._id, exam.active)}>
                        Active
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
