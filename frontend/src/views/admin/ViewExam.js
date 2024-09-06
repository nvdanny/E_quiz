import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { deleteExam, listExams, updateStatus } from '../../api/ExamApi';
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
import CIcon from '@coreui/icons-react';
import { cilPencil, cilSearch, cilTrash, cilCheckCircle, cilXCircle } from '@coreui/icons';
=======
import { deleteExam, editExam, listExams } from '../../api/ExamApi'; // Import các hàm từ ExamApi
>>>>>>> origin/main

const ViewExam = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [selectedExamId, setSelectedExamId] = useState(null);
  const [selectedExamStatus, setSelectedExamStatus] = useState(null);
  const [exams, setExams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExams = async () => {
      const token = localStorage.getItem('accessToken');
      const response = await listExams(token);
      if (response.status === 200) {
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
    if (response.status === 200) {
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

  const handleStatusChange = (id, status) => {
    setSelectedExamId(id);
    setSelectedExamStatus(status);
    setShowStatusModal(true);
  };

  const confirmStatusChange = async () => {
    const token = localStorage.getItem('accessToken');
    const newStatus = !selectedExamStatus; 
    const response = await updateStatus(selectedExamId, newStatus, token);
    if (response.status === 200) {
      setExams(exams.map(exam =>
        exam._id === selectedExamId ? { ...exam, active: newStatus } : exam
      ));
      setShowStatusModal(false);
    } else {
      console.error(response.error);
      setShowStatusModal(false);
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
                  <CTableHeaderCell scope="col" className="text-center">Trạng thái</CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {exams.map((exam, index) => (
                  <CTableRow key={exam._id}>
                    <CTableDataCell className="text-center">{index + 1}</CTableDataCell>
                    <CTableDataCell className="text-center">{exam.title}</CTableDataCell>
                    <CTableDataCell className="text-center">{exam.duration}</CTableDataCell>
                    <CTableDataCell className="text-center">{exam.questions.length}</CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CButton
                        size="md"
                        color={exam.active ? 'success' : ''}
                        onClick={() => handleStatusChange(exam._id, exam.active)}
                      >
                        <CIcon icon={exam.active ? cilCheckCircle : cilXCircle} />
                        &nbsp;
                        {exam.active?"Đang hiển thị":"Đã ẩn"}
                      </CButton>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
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

      <CModal visible={showStatusModal} onClose={() => setShowStatusModal(false)}>
        <CModalHeader closeButton>
          Xác nhận thay đổi trạng thái
        </CModalHeader>
        <CModalBody>
          Bạn có chắc chắn muốn thay đổi trạng thái của đề thi này không?
        </CModalBody>
        <CModalFooter>
          <CButton color="success" onClick={confirmStatusChange}>Thay đổi</CButton>{' '}
          <CButton color="secondary" onClick={() => setShowStatusModal(false)}>Hủy</CButton>
        </CModalFooter>
      </CModal>
    </CRow>
  );
};

export default ViewExam;
