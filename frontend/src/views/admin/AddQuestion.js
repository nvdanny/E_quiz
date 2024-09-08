import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get path variables
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
  CFormTextarea,
  CAlert
} from '@coreui/react';
import { createQuestion, getQuestionById ,updateQuestion} from '../../api/QuestionApi'; // Import your API functions
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';

const CLOUDINARY_URL = process.env.REACT_APP_CLOUDINARY_URL;
const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

const AddQuestion = () => {
  const { questionId } = useParams();
  
  const [text, setText] = useState('');
  const [options, setOptions] = useState([
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
  ]);
  const [image, setImage] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('accessToken'));
  const [showAlert, setShowAlert] = useState(false); 
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    if (questionId) {
      fetchQuestionData(questionId);
    }
  }, [questionId]);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timer); 
    }
  }, [showAlert]);
  const fetchQuestionData = async (id) => {
    try {
      const response = await getQuestionById(id, token);
      const question = response.data.msg.question;
      setText(question.description);
      setImage(question.imageUrl || null);

      const updatedOptions = (question.options || [
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
      ]).map((option, index) => ({
        ...option,
        isCorrect: option._id === question.answer._id
      }));
  
      setOptions(updatedOptions);
    } catch (err) {
      setAlertMessage('Lỗi khi tải thông tin câu hỏi');
      setShowAlert(true);
    }
  };

  const handleAddOption = () => {
    setOptions([...options, { text: '', isCorrect: false }]);
  };

  const handleOptionChange = (index, event) => {
    const newOptions = options.map((option, idx) =>
      idx === index ? { ...option, [event.target.name]: event.target.name === 'isCorrect' ? event.target.checked : event.target.value } : option
    );
    setOptions(newOptions);
  };

  const validateForm = () => {
    if (!text.trim()) {
      setAlertMessage('Đề bài không được để trống.');
      return false;
    }
    if (options.some(option => !option.text.trim())) {
      setAlertMessage('Tất cả các lựa chọn phải có nội dung.');
      return false;
    }
    if (!options.some(option => option.isCorrect)) {
      setAlertMessage('Phải chọn ít nhất một đáp án đúng.');
      return false;
    }
    return true;
  };

  const handleDeleteOption = (index) => {
    setOptions(options.filter((_, idx) => idx !== index));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
      
      try {
        const response = await axios.post(CLOUDINARY_URL, formData);
        setImage(response.data.secure_url);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setShowAlert(true);
      return;
    }
    
    // Chuyển đổi các tùy chọn thành định dạng mong muốn
    const formattedOptions = options.map(option => ({
      text: option.text,
      isCorrect: option.isCorrect
    }));
    const correctOptionIndex = options.findIndex(option => option.isCorrect);
  
    const data = {
      description: text,
      imageUrl: image,
      options: formattedOptions,
      answer: correctOptionIndex
    };
  
    try {
      let response;
      if (questionId) {
        response = await updateQuestion(data, questionId,token);
      } else {
        response = await createQuestion(data, image, token);
      }
  
      if (response.status === 200) {
        setAlertMessage(questionId ? 'Cập nhật câu hỏi thành công!' : 'Thêm câu hỏi mới thành công!');
        setShowAlert(true);
      } else {
        setAlertMessage('Đầu vào không hợp lệ');
        setShowAlert(true);
      }
  
      if(!questionId){
        setText('');
        setOptions([
          { text: '', isCorrect: false },
          { text: '', isCorrect: false },
          { text: '', isCorrect: false },
          { text: '', isCorrect: false },
        ]);
        setImage(null);
        }
    } catch (err) {
      console.error(err);
      setAlertMessage('Lỗi khi lưu câu hỏi');
      setShowAlert(true);
    }
  };
  
  const handlePasteInput = () => {
    const pastedText = prompt('Hãy dán nội dung câu hỏi:');
    if (pastedText) {
      const regex = /^(.*?)(?=(?:\s*[A-D]\.\s*))/s;
      const match = pastedText.match(regex);
  
      if (match) {
        const questionText = match[1].trim();
        const answersText = pastedText.slice(match[0].length).trim();
  
        const answerRegex = /\s*[A-D]\.\s*([^A-D]*)/g;
        const parsedOptions = [];
        let answerMatch;
  
        while ((answerMatch = answerRegex.exec(answersText)) !== null) {
          parsedOptions.push({
            text: answerMatch[1].trim(),
            isCorrect: false
          });
        }
  
        setText(questionText);
        setOptions(parsedOptions);
      } else {
        setAlertMessage('Nội dung dán vào không đúng định dạng.');
        setShowAlert(true);
      }
    }
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Hướng dẫn định dạng</Popover.Header>
      <Popover.Body>
        <p>Để paste câu hỏi, bạn cần định dạng như sau:</p>
        <p>
          Câu hỏi hoặc mô tả <br />
          A. Đáp án 1 <br />
          B. Đáp án 2 <br />
          C. Đáp án 3 <br />
          D. Đáp án 4
        </p>
        <p>Hoặc:</p>
        <p>
          Câu hỏi hoặc mô tả <br />
          A. Đáp án 1 B. Đáp án 2 C. Đáp án 3 D. Đáp án 4
        </p>
      </Popover.Body>
    </Popover>
  );
  
  return (
    <CCard>
      <CCardHeader>
        {questionId ? 'Chỉnh sửa câu hỏi' : 'Thêm câu hỏi'}
      </CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
          {showAlert && (
            <CAlert color={alertMessage.startsWith('Failed') || alertMessage.startsWith('An error') ? 'danger' : 'success'}>
              {alertMessage}
            </CAlert>
          )}
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
              {/* {image && (
                <div className="mt-3">
                  <img src={image} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
              )} */}
            </CCol>
            <CCol sm="2">
              {/* <CFormInput
                type="file"
                accept="image/*"
                placeholder='Thêm ảnh'
                onChange={handleImageChange}
              /> */}
              <CButton color="primary" onClick={handlePasteInput}>
                Import nhanh
              </CButton>
              <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <CButton  color="info" style={{ marginLeft: '10px' }}>?</CButton>
              </OverlayTrigger>
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
                {questionId ? 'Cập nhật' : 'Lưu'}
              </CButton>
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default AddQuestion;
