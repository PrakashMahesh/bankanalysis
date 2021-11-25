import axios from 'axios';


const instance = axios.create({
    baseURL: "http://10.0.0.6:8000/api/",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json,application/pdf',
        'Access-Control-Allow-Origin': '*',
        
    }
})

const injectToken = (request) => {
    return request;
}

const handleSuccess = (response) => {

    return response;
}

const handleError = (error) => {
   
    // switch (error.response.status) {
    //     case 401:
    //         // Handle Unauthorized
    //         break;
    //     case 403:
    //         // Handle Forbidden
    //         break;
    //     case 404:
    //         // Handle Page Not Found
    //         break;
    //     case 500:
    //         // Handle Internal Server Error
    //         break;
    //     default:
    //         // Handle Error
    //         break;
    // }
    return Promise.reject(error)
}

instance.interceptors.request.use(injectToken, handleError);
instance.interceptors.response.use(handleSuccess, handleError);

const API = {
    get: (url) => instance.get(url),
    post: (url, body) => instance.post(url, body),
    put: (url, body) => instance.put(url, body),
    delete: (url) => instance.delete(url),
};

export default API;