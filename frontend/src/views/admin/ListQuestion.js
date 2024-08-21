import React, { useState, useEffect } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CListGroup,
  CListGroupItem,
  CFormCheck,
} from '@coreui/react';

import questionData from './question_demo.json';

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      // Simulating fetching data from JSON file
      setQuestions(questionData);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Danh sách câu hỏi
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              {questions.map((question) => (
                <CListGroupItem key={question.id}>
                  <h5>{question.question}</h5>
                  {question.options.map((option) => (
                    <CFormCheck
                    
                      key={option.id}
                      type="radio"
                      name={`question_${question.id}`}
                      id={`option_${option.id}`}
                      label={`${option.text} ${option.isCorrect ? '(Đúng)' : ''}`}
                      disabled
                    />
                  ))}
                </CListGroupItem>
              ))}
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default QuestionsList;
