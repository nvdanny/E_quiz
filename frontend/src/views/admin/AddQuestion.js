import React, { useState ,useEffect} from 'react';
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
import { createQuestion } from '../../api/QuestionApi'; // Import your API function

const CLOUDINARY_URL = process.env.REACT_APP_CLOUDINARY_URL;
const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

const AddQuestion = () => {
  const [text, setText] = useState('');
  const [options, setOptions] = useState([
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
  ]);
  const [image, setImage] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [showAlert, setShowAlert] = useState(false); 
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timer); 
    }
  }, [showAlert]);

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
    try {
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

      const response = await createQuestion(data, image, token);

      if (response.status === 200) {
        setAlertMessage('Thêm câu hỏi mới thành công!');
        setShowAlert(true);
      } else if(response.status === 200){
        setAlertMessage('Đầu vào không hợp lệ');
        setShowAlert(true);
      }
      else {
        setAlertMessage('Failed to add the question.');
        setShowAlert(true);
      }
  
      console.log(response.data);

      // Reset form
      setText('');
      setOptions([
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
      ]);
      setImage(null);
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
              {image && (
                <div className="mt-3">
                  <img src={image} alt="Question" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
              )}
            </CCol>
            <CCol sm="2">
              <CFormInput
                type="file"
                accept="image/*"
                placeholder='Thêm ảnh'
                onChange={handleImageChange}
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
