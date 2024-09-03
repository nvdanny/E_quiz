import  apiClient  from './ApiClient';

export const createQuestion = (data, file, token) => {
    const payload = {
        description: data.description,
        imageUrl: data.imageUrl,
        options: data.options,
        answer: data.answer,
    };
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
    return apiClient.post(`/api/question/create`, payload, { headers });
};


export const deleteQuestion = (questionId, token) => {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    return apiClient.delete(`/api/question/delete/${questionId}`, { headers });
};

export const listQuestion = (token) => {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    return apiClient.get(`/api/question/list`, { headers });
};

export const updateQuestion = async (data, questionId, token) => {
    const payload = {
        description: data.description,
        imageUrl: data.imageUrl, // or `file.path` if you're handling file uploads separately
        options: data.options,
        answer: data.answer,
    };
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
    return apiClient.put(`/api/question/update/${questionId}`, payload, { headers });
};


export const getQuestionById = async (questionId, token) => {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    return apiClient.get(`/api/question/${questionId}`, { headers });
};