import apiService from "../api/apiService";

//register api : called by auth component when register btn clicked
export const registerAPI = async (userData)=>{
    return await apiService("POST","/register",userData)
}