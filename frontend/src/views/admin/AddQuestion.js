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
    try {
      // Prepare form data
      const formData = new FormData();
      formData.append('text', text);
      formData.append('options', JSON.stringify(options));
      if (image) {
        formData.append('image', image);
      }

      // Send the request
      // const response = await axios.post('/api/questions/add', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // });
      // console.log(response.data);
      console.log({ text, options, image });

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
