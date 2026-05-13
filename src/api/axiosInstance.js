import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:'https://bookstore-server-dec25.onrender.com',
    timeout:10000
})

// request interceptors : Handling Token append to Headers
axiosInstance.interceptors.request.use(
    (config)=>{
        const token = sessionStorage.getItem("token")
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

// response interceptors : Handling Global/Common Errors
axiosInstance.interceptors.response.use(
    (response)=>{
    console.log("Response Recieved!!!");
    return response    
    },
    (error)=>{
        if(error.response){
            const status = error.response.status
            if(status==401){
                console.log("Unauthorised Access - Invalid Token!!");
            }else if(status==404){
                console.log("API Not Found!!");
            }else if (status==500){
                console.log("Server Error!!!");                
            }else if(error.request){
                console.log("Client Error");   
                return   error.request
                // console.log("No response from server (Network issue)");
            }else{
                console.log("Error : "+error.message);                
            }
            return Promise.reject(error);
        }
    }
)


export default axiosInstance