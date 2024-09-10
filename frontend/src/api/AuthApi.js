
import apiClient from './ApiClient';


export const signUp = (username, email, password, displayName, phoneNumber, birthday, university, major, year, studentId, linkFb) => {

    const payload = {
        username: username,
        email: email,
        password: password,
        displayName: displayName,
        phoneNumber: phoneNumber,
        birthday: birthday,
        university: university,
        major: major,
        year: year,
        studentId: studentId,
        linkFb: linkFb
    };
    return apiClient.post(`/api/auth/sign-up`, payload);
};

export const login = async (email,password) => {
    const payload = {
        email: email,
        password: password
    };
    return apiClient.post(`/api/auth/sign-in`, payload);
}

export const logout = async (accessToken) => {
    const headers = {
      Authorization: "Bearer " + accessToken,
    };
    return apiClient.post(`/api/auth/sign-out`, {}, { headers });
  };
  