import  apiClient  from './ApiClient';

// export const createQuestion = (data, file, token) => {
//     const payload = {
//         description: data.description,
//         imageUrl: data.imageUrl,
//         options: data.options,
//         answer: data.answer,
//     };
//     const headers = {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//     };
//     return apiClient.post(`/api/question/`, payload, { headers });
// };

export const createQuestion = async (formData, token) => {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    return apiClient.post(`/api/question/create`, formData, { headers });
};
  


export const deleteQuestion = (questionId, token) => {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    return apiClient.delete(`/api/question/${questionId}`, { headers });
};

export const listQuestion = (token) => {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    return apiClient.get(`/api/question/list`, { headers });
};

export const updateQuestion = async (formData, questionId, token) => {
    const headers = {
        Authorization: `Bearer ${token}`
    };
    return apiClient.put(`/api/question/${questionId}`, formData, { headers });
};


export const getQuestionById = async (questionId, token) => {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    return apiClient.get(`/api/question/${questionId}`, { headers });
};