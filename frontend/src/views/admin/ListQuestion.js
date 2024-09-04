import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton, CModal, CModalHeader, CModalBody, CModalFooter, CPagination ,CFormCheck} from '@coreui/react';
import { listQuestion, deleteQuestion } from '../../api/QuestionApi';
import { left } from '@popperjs/core';

const QuestionsList = ({ token }) => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(10);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await listQuestion(token);
      setQuestions(response.data.msg.questions);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleDelete = async () => {
    try {
      if (selectedQuestion) {
        console.log(selectedQuestion)
        await deleteQuestion(selectedQuestion._id, token);
        setQuestions(questions.filter(q => q._id !== selectedQuestion._id));
        setShowDeleteModal(false);
      }
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  const openDeleteModal = (question) => {
    setSelectedQuestion(question);
    setShowDeleteModal(true);
  };

  const handleQuestionClick = (question) => {
    navigate('/admin/add-question/'+question._id, { state: { question } }); 
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const getOptionLetter = (index) => {
    const letters = ['A', 'B', 'C', 'D'];
    return letters[index] || '';
  };

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  return (
    <CRow>
       <CCol>
        <CCard>
          <CCardHeader>Danh sách câu hỏi</CCardHeader>
          <CCardBody>
            <div className='container' style={{ padding: "20px 30px" }}>
              {currentQuestions.map((question, questionIndex) => (
                <div key={question._id} style={{ marginBottom: '20px' }} className='row'>
                  <div className="col-md-8 col-10">
                    <h5
                      style={{ cursor: 'pointer'}}
                      onClick={() => handleQuestionClick(question)}
                    >
                      Câu {questionIndex + 1}: {question.description}
                    </h5>

                    {question.options.map((option, optionIndex) => (
                      <div key={option._id} style={{ marginLeft: "20px",marginBottom:"10px" }}>
                        <CFormCheck
                          type="radio"
                          name={`question-${option._id}`}
                          checked={question.answer._id === option._id}
                          readOnly
                        />
                        <span style={{ marginLeft: "10px" }}>{getOptionLetter(optionIndex)}. {option.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className='col-md-4 col-2'>
                    <CButton color="danger" onClick={() => openDeleteModal(question)} style={{ marginLeft: '10px' }}>
                      Xóa
                    </CButton>
                  </div>
                </div>
              ))}
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      {/* Delete Confirmation Modal */}
      <CModal visible={showDeleteModal} onDismiss={() => setShowDeleteModal(false)}>
        <CModalHeader closeButton>Xác nhận xóa</CModalHeader>
        <CModalBody>Bạn có chắc chắn muốn xóa câu hỏi này không?</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setShowDeleteModal(false)}>
            Hủy
          </CButton>
          <CButton color="danger" onClick={handleDelete}>
            Xóa
          </CButton>
        </CModalFooter>
      </CModal>

      {/* Pagination */}
      <CPagination
        activePage={currentPage}
        pages={Math.ceil(questions.length / questionsPerPage)}
        onPageChange={handlePageChange} // Corrected handler
      />
    </CRow>
  );
};

export default QuestionsList;
