import axios from "axios";

const API_BASE_URL = "https://gut-buddy-api.applore.in";

// Create an Axios instance with common configuration
let token = localStorage.getItem("token");
// const token =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTdiMjcxZDc5MjFiNjU5YTFhMjNjOTciLCJpYXQiOjE3MDI1Njk3NTcsImV4cCI6MTcwMzQzMzc1N30.JNhGNWooZdeiA_lA52pTiHvTKdcDy2I1biWztX5KQA0";
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

const handleRequestError = (error) => {
  if (error.response) {
    // Handle HTTP errors (e.g., 404, 500)
    let err = {
      errorType: "HTTP Error",
      status: error.response.status,
      message: error.response.data,
      response: "Failure",
    };
    return err;
  } else if (error.request) {
    // Handle network issues (e.g., no internet connection)
    let err = {
      errorType: "Network Error",
      // status: error.response.status,
      message: error.message,
      response: "Failure",
    };
    return err;
  } else {
    // Handle other errors
    console.error("Error:", error.message);
  }
  throw error; // Propagate the error for further handling
};

// GET request function
export const get = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

// POST request function
export const post = async (url, data = {}) => {
  try {
    const response = await axiosInstance.post(url, data);
    return { data: response.data, response: "Success" };
  } catch (error) {
    return handleRequestError(error);
  }
};

// PUT request function
export const put = async (url, data = {}) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

// PATCH request function
export const patch = async (url, data = {}) => {
  try {
    const response = await axiosInstance.patch(url, data);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

// DELETE request function
export const del = async (url) => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

// POST with files
export const postFiles = async (url, data, method) => {
  method = method ? method : "POST";
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return { data: responseData, response: "Success" };
  } catch (error) {
    return handleRequestError(error);
  }
};
