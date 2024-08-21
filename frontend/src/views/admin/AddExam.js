// AddExam.js
import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CListGroup,
  CListGroupItem,
  CFormInput,
  CFormCheck,
  CInputGroup,
  CInputGroupText,
  CFormLabel
} from '@coreui/react';
import questionData from './question_demo.json';
import CIcon from '@coreui/icons-react';
import { cilSearch } from '@coreui/icons';

const AddExam = () => {
  const [examName, setExamName] = useState('');
  const [examDuration, setExamDuration] = useState('');
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleQuestionSelect = (question) => {
    setSelectedQuestions((prevSelected) => {
      if (prevSelected.find((q) => q.id === question.id)) {
        return prevSelected.filter((q) => q.id !== question.id);
      } else {
        return [...prevSelected, question];
      }
    });
  };

  const handleSaveExam = () => {
    // Save the exam with the selected questions, examName, and examDuration
    console.log('Exam Name:', examName);
    console.log('Exam Duration:', examDuration);
    console.log('Selected Questions:', selectedQuestions);
  };

  const filteredQuestions = questionData.filter((question) =>
    question.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isSelected = (id) => {
    return selectedQuestions.some((q) => q.id === id);
  };

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader className='text-primary'>
            Tạo bài thi mới
          </CCardHeader>
          <CCardBody>
            <CRow className="mb-3 ">
              <CCol sm="2" className='mt-2'>
                <h5>Tên bài thi:</h5>
              </CCol>
              <CCol sm="6">
                <CFormInput
                  type="text"
                  placeholder="Nhập tên bài thi"
                  value={examName}
                  onChange={(e) => setExamName(e.target.value)}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol sm="2" className='mt-2'>
                <h5>Thời gian thi:</h5>
              </CCol>
              <CCol sm="6">
                <CFormInput
                  type="number"
                  placeholder="Nhập thời gian thi (phút)"
                  value={examDuration}
                  onChange={(e) => setExamDuration(e.target.value)}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
            <CCol sm="6">
              <CInputGroup>
                <CFormLabel className='mt-2'>
                  <h5>Tìm kiếm: &nbsp;&nbsp;&nbsp;</h5>
                </CFormLabel>
                <CInputGroupText>
                  <CIcon icon={cilSearch} />
                </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Nhập từ khóa"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </CInputGroup>
            </CCol>
          </CRow>

            <CListGroup>
              {filteredQuestions.map((question) => (
                <CListGroupItem key={question.id}>
                  <CFormCheck
                    type="checkbox"
                    label={question.question}
                    checked={isSelected(question.id)}
                    onChange={() => handleQuestionSelect(question)}
                  />
                </CListGroupItem>
              ))}
            </CListGroup>
            <h4 className="my-3">Câu hỏi đã chọn:</h4>
            <CListGroup>
              {selectedQuestions.map((question) => (
                <CListGroupItem key={question.id}>
                  {question.question}
                </CListGroupItem>
              ))}
            </CListGroup>
            <CButton color="primary" onClick={handleSaveExam} className="mt-3">
              Lưu bài thi
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default AddExam;
