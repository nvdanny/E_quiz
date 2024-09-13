import axios from "axios";

const apiClient = axios.create({
  // baseURL: "https://blndt-sec-bav.com/",
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      handleLogout();
    }
    return Promise.reject(error);
  }
);
const handleLogout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userInfo");
  localStorage.removeItem("timeLeft");
  localStorage.removeItem("selectedAnswers");
  localStorage.removeItem("timeFinish");
  window.location.href = "/login";
};

export default apiClient;
