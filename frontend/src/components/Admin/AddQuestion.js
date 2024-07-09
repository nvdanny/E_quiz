import React, { useState } from 'react';
import axios from 'axios';

const AddQuestion = () => {
  const [text, setText] = useState('');
  const [options, setOptions] = useState([{ text: '', isCorrect: false }]);

  const handleAddOption = () => {
    setOptions([...options, { text: '', isCorrect: false }]);
  };

  const handleOptionChange = (index, event) => {
    const newOptions = options.map((option, idx) => 
      idx === index ? { ...option, [event.target.name]: event.target.name === 'isCorrect' ? event.target.checked : event.target.value } : option
    );
    setOptions(newOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/questions/add', { text, options });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Add Question</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question Text:</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        {options.map((option, index) => (
          <div key={index}>
            <label>Option Text:</label>
            <input type="text" name="text" value={option.text} onChange={(e) => handleOptionChange(index, e)} />
            <label>Correct:</label>
            <input type="checkbox" name="isCorrect" checked={option.isCorrect} onChange={(e) => handleOptionChange(index, e)} />
          </div>
        ))}
        <button type="button" onClick={handleAddOption}>Add Option</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddQuestion;
