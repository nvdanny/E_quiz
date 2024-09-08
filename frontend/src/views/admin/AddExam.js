import React, { useEffect, useState } from 'react';
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
  CFormLabel,
  CFormTextarea
} from '@coreui/react';
import { useParams } from 'react-router-dom';
import CIcon from '@coreui/icons-react';
import { cilSearch } from '@coreui/icons';
import { getExamById,editExam,createExam } from '../../api/ExamApi';
import { listQuestion } from '../../api/QuestionApi';

const AddExam = () => {
  const { examId } = useParams();
  const [examName, setExamName] = useState('');
  const [examDescription, setExamDescription] = useState('');
  const [examDuration, setExamDuration] = useState('');
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const token = localStorage.getItem("accessToken")

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await listQuestion(token);
        const data = response.data.msg.questions;
        console.log(data)
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();

    if (examId) {
      const fetchExamDetails = async () => {
        try {
          const response = await getExamById(examId,token);
          console.log(response)
          const exam = response.data.msg.foundExam;
          setExamName(exam.title);
          setExamDescription(exam.description);
          setExamDuration(exam.duration);
          setSelectedQuestions(exam.questions);
        } catch (error) {
          console.error('Error fetching exam details:', error);
        }
      };

      fetchExamDetails();
    }
  }, [examId]);

  const handleQuestionSelect = (question) => {
    setSelectedQuestions((prevSelected) => {
      if (prevSelected.find((q) => q._id === question._id)) {
        return prevSelected.filter((q) => q._id !== question._id);
      } else {
        return [...prevSelected, question];
      }
    });
  };

  const handleSaveExam = async () => {
    const examData = {
      title: examName,
      description: examDescription,
      duration: examDuration,
      questions: selectedQuestions.map(question => question._id), 
    };
  
    try {
      if (examId) {
        await editExam(examId, examData, token); 
        alert('Cập nhật thanh công!');
      } else {
        await createExam(examData, token); 
        alert('Tạo mới thành công!');
      }
    } catch (error) {
      console.error('Error saving exam:', error);
      alert('An error occurred while saving the exam.');
    }
  };
  

  const filteredQuestions = questions.filter((question) =>
    question.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isSelected = (id) => {
    return selectedQuestions.some((q) => q._id === id);
  };

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader className='text-primary'>
            {examId ? 'Chỉnh sửa bài thi' : 'Tạo bài thi mới'}
          </CCardHeader>
          <CCardBody>
            <CRow className="mb-3">
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
                <h5>Mô tả:</h5>
              </CCol>
              <CCol sm="6">
                <CFormTextarea
                  placeholder="Nhập mô tả bài thi"
                  value={examDescription}
                  onChange={(e) => setExamDescription(e.target.value)}
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
                  <CInputGroupText style={{maxHeight:"38px"}}>
                    <CIcon icon={cilSearch}/>
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
                <CListGroupItem key={question._id}>
                  <CFormCheck
                    type="checkbox"
                    label={question.description}
                    checked={isSelected(question._id)}
                    onChange={() => handleQuestionSelect(question)}
                  />
                </CListGroupItem>
              ))}
            </CListGroup>
            <h4 className="my-3">Câu hỏi đã chọn:</h4>
            <CListGroup>
              {selectedQuestions.map((question, index) => (
                <CListGroupItem key={question._id}>
                  Câu {index + 1}: {question.description}
                </CListGroupItem>
              ))}
            </CListGroup>
            <CButton color="primary" onClick={handleSaveExam} className="mt-3">
              {examId ? 'Cập nhật bài thi' : 'Lưu bài thi'}
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default AddExam;
