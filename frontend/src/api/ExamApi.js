import apiClient from './ApiClient';

export const createExam = async (data, token) => {
    const payload = {
        title: data.title,
        description: data.description,
        duration: data.duration,
        start: data.start,
        end: data.end,
        questions: data.questions,
    };
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
    return apiClient.post(`/api/exam/`, payload, { headers });
};

export const editExam = async (examId, data, token) => {
    const payload = {
        id: examId,
        title: data.title,
        description: data.description,
        duration: data.duration,
        start: data.start,
        end: data.end,
        questions: data.questions,
        active: data.active,
    };
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
    return apiClient.put(`/api/exam/${examId}`, payload, { headers });
};

export const getExamById = async (examId, token) => {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    return apiClient.get(`/api/exam/${examId}`, { headers });
};

export const listExams = async (token) => {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    return apiClient.get(`/api/exam/list`, { headers });
};

export const deleteExam = async (examId, token) => {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    return apiClient.delete(`/api/exam/${examId}`, { headers });
};


export const updateStatus = async (examId, newStatus, token) => {
    const payload = {
        id: examId,
        active: newStatus,
    };
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
    return apiClient.post(`/api/exam/updateStatus`, payload, { headers });
};

export const doExam = async (token) => {
    const headers = { 
        Authorization: `Bearer ${token}`,
    };
    return apiClient.get(`/api/submission/`, { headers });
}

export const getActiveExam = async (token) => {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    return apiClient.get(`/api/exam/`, { headers });
}

export const submitExam = async (token, examId, answers, user) => {
    const payload = {
        id: examId,
        answers: answers,
        user : user,
    };
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
    return apiClient.post(`/api/submission/submit`, payload, {headers});
}