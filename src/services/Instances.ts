import axios,{AxiosError} from "axios";
const JsonPlaceholderInstance=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/",
    timeout:1000,
    headers:{"Content-Type":"application/json"}
})
const FakeStoreInstance=axios.create({
    baseURL:"https://fakestoreapi.com/",
    timeout:1000,
    headers:{"Content-Type":"application/json"}
})

const errorInterceptor = (error:AxiosError) => {
  if (error.code === "ECONNABORTED") {
    console.error("Request timeout please try again");
  }
  if (error.response) {
    console.error(
      `Error: ${error.response.status} - ${error.response.statusText}`
    );
    if (error.response.status === 404) {
      console.error("Resource not found.");
    } else if (error.response.status === 500) {
      console.error("Server error, please try again later.");
    }
  } else if (error.request) {
    console.error("No response from the server.");
  } else {
    console.error("An unknown error occurred.");
  }
  return Promise.reject(error);
};
JsonPlaceholderInstance.interceptors.response.use(
    (response)=>response,
    errorInterceptor

)
FakeStoreInstance.interceptors.response.use(
    (response)=>response,
    errorInterceptor
)
export {JsonPlaceholderInstance,FakeStoreInstance};