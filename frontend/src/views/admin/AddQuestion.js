import React, { useState } from 'react';
import axios from 'axios';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormCheck,
  CRow,
  CCol,
  CFormTextarea
} from '@coreui/react';

const AddQuestion = () => {
  const [text, setText] = useState('');
  const [options, setOptions] = useState([
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
  ]);

  const handleAddOption = () => {
    setOptions([...options, { text: '', isCorrect: false }]);
  };

  const handleOptionChange = (index, event) => {
    const newOptions = options.map((option, idx) =>
      idx === index ? { ...option, [event.target.name]: event.target.name === 'isCorrect' ? event.target.checked : event.target.value } : option
    );
    setOptions(newOptions);
  };

  const handleDeleteOption = (index) => {
    setOptions(options.filter((_, idx) => idx !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('/api/questions/add', { text, options });
      // console.log(response.data);
      console.log(options)
      setText('');
      setOptions([
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CCard>
      <CCardHeader>
        Thêm câu hỏi
      </CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
          <CRow className="mb-3">
            <CCol sm="2">
              <label htmlFor="question-text">Đề bài:</label>
            </CCol>
            <CCol sm="6">
              <CFormTextarea
                id="question-text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={4}
              />
            </CCol>

          </CRow>
          {options.map((option, index) => (
            <CRow className="mb-3" key={index}>
              <CCol sm="2">
                <label htmlFor={`option-text-${index}`}>Đáp án {index + 1}:</label>
              </CCol>
              <CCol sm="6">
                <CFormInput
                  id={`option-text-${index}`}
                  type="text"
                  name="text"
                  value={option.text}
                  onChange={(e) => handleOptionChange(index, e)}
                />
              </CCol>
              <CCol sm="2" className="align-self-center">
                <CFormCheck
                  id={`option-correct-${index}`}
                  label="Đúng"
                  name="isCorrect"
                  checked={option.isCorrect}
                  onChange={(e) => handleOptionChange(index, e)}
                />
              </CCol>
              <CCol sm="2" className="align-self-center">
                <CButton
                  type="button"
                  color="danger"
                  onClick={() => handleDeleteOption(index)}
                >
                  Xóa
                </CButton>
              </CCol>
            </CRow>
          ))}
          <CRow className="mb-3">
            <CCol sm="12">
              <CButton type="button" color="primary" onClick={handleAddOption}>
                Thêm lựa chọn
              </CButton>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol sm="12">
              <CButton type="submit" color="success">
                Lưu
              </CButton>
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default AddQuestion;
