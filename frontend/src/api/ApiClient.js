import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.blndt-sec-bav.com/",
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
  window.location.href = "/login";
};

export default apiClient;
