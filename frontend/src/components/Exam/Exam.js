import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Exam = () => {
  const [exam, setExam] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchExam = async () => {
      const response = await axios.get('/api/exams/current');
      setExam(response.data);
    };
    fetchExam();
  }, []);

  const handleAnswer = (questionIndex, answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    const response = await axios.post('/api/exams/submit', { answers });
    console.log(response.data);
  };

  if (!exam) return <div>Loading...</div>;

  return (
    <div>
      <h1>{exam.name}</h1>
      {exam.questions.map((question, index) => (
        <div key={index}>
          <h3>{question.text}</h3>
          {question.options.map((option, idx) => (
            <div key={idx}>
              <input
                type="radio"
                name={`question-${index}`}
                onChange={() => handleAnswer(index, idx)}
              />
              {option.text}
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Exam;
