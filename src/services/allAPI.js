import apiService from "../api/apiService";

//register api : called by auth component when register btn clicked
export const registerAPI = async (userData)=>{
    return await apiService("POST","/register",userData)
}

//login api : called by auth component when login btn clicked
export const loginAPI = async (userData)=>{
    return await apiService("POST","/login",userData)
}

//google-login api : called by auth compoenent when google login btn clicked
export const googleLoginAPI = async (userData)=>{
    return await apiService("POST","/google-login",userData)
}

//useredit api : called by Edit compoenent when update btn clicked
export const userUpdateAPI = async (userId,userData)=>{
    return await apiService("PUT",`/user/${userId}`,userData)
}

//addBook api : called by UploadBook compoenent when add btn clicked
export const addBookAPI = async (bookDetails)=>{
    return await apiService("POST",`/books`,bookDetails)
}

//getHomeBooks api : called by home component when page opens (http://localhost:3000/home-books)
export const getHomePageBooksAPI = async ()=>{
    return await apiService("GET",`/home-books`,{})
}

//all-books : getAllBooksAPI - called by Book scompoennet when page open
export const getAllBooksAPI = async (searchKey)=>{
    return await apiService("GET",`/all-books?search=${searchKey}`,{})
}

//user-books : called by BookStatus component when it opens
export const getAllUserBooksAPI = async ()=>{
    return await apiService("GET",`/user-books`,{})
}

//bought-books : called by Purchase  component when it opens
export const getAllUserBoughtBooksAPI = async ()=>{
    return await apiService("GET",`/bought-books`,{})
}

//http://localhost:3000/books/69f2e1acb10da1aaf80ba6b5 : called by BookStatus component when delete btn clicked
export const deleteUserUploadBookAPI = async (bookId)=>{
    return await apiService("DELETE",`/books/${bookId}`,{})
}

//http://localhost:3000/books/69f57ef388c71023ee8d3997 : called by View component when page open
export const viewBookAPI = async (id)=>{
    return await apiService("GET",`/books/${id}`,{})
}