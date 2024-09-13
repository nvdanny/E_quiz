import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton, CModal, CModalHeader, CModalBody, CModalFooter, CPagination, CFormCheck, CPaginationItem } from '@coreui/react';
import { listQuestion, deleteQuestion } from '../../api/QuestionApi';
import { CImage } from '@coreui/react';

const QuestionsList = ({ token }) => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(10);
  const navigate = useNavigate();
  // document.getElementById('root').style.overflow = 'hidden';
  useEffect(() => {
    fetchQuestions();
  }, [token]); // Add token as dependency

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
    navigate(`/admin/add-question/${question._id}`, { state: { question } });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const getOptionLetter = (index) => {
    return ['A', 'B', 'C', 'D'][index] || '';
  };

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>Danh sách câu hỏi</CCardHeader>
          <CCardBody style={{ height: '72vh', overflowY: 'auto' }}>
            <div className='container' style={{ padding: "20px 30px" }}>
              {currentQuestions.map((question, questionIndex) => (
                <div key={question._id} style={{ marginBottom: '20px' }} className='row'>
                  <div className="col-md-8 col-10">
                    <h5
                      style={{ cursor: 'pointer'}}
                      onClick={() => handleQuestionClick(question)}
                    >
                      Câu {questionIndex + 1 + (currentPage - 1) * questionsPerPage}: {question.description}
                    </h5>
                    {question.imageUrl && question.imageUrl !== "/0" && (
                      <div style={{ margin :"10px 15px", maxWidth:"300px" }}>
                        <CImage
                          src={question.imageUrl}
                          alt="Question Image"
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                      </div>
                    )}

                    {question.options.map((option, optionIndex) => (
                      <div key={option._id} style={{ marginLeft: "20px", marginBottom:"10px" }}>
                        <CFormCheck
                          type="radio"
                          name={`question-${question._id}`}
                          checked={question.answer._id === option._id}
                          readOnly
                        />
                        <span style={{ marginLeft: "10px" }}>{getOptionLetter(optionIndex)}. {option.text}</span>
                        {option.imageUrl && (
                          <div style={{ margin :"10px 15px", maxWidth:"300px" }}>
                            <CImage
                              src={option.imageUrl}
                              alt="Option Image"
                              style={{ maxWidth: '100%', height: 'auto' }}
                            />
                          </div>
                       )}
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
            <CPagination aria-label="Page navigation example" align="center">
          {[...Array(Math.ceil(questions.length / questionsPerPage))].map((_, index) => (
            <CPaginationItem
              key={index}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </CPaginationItem>
          ))}
        </CPagination>
        </CCard>
      </CCol>
      
      <CModal visible={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
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

    </CRow>
  );
};

export default QuestionsList;