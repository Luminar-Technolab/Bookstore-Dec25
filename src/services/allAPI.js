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

//http://localhost:3000/books/69f57ef388c71023ee8d3997/buy : called by View component when make payment btn clicked
export const buyBookAPI = async (id)=>{
    return await apiService("PUT",`/books/${id}/buy`,{})
}
//'http://localhost:3000/profile/69e994ca6601400b8c3a71ef : put rqst by admin Settings page when update btn clicked
export const adminUpdateAPI = async (adminId,adminData)=>{
    return await apiService("PUT",`/profile/${adminId}`,adminData)
}
//http://localhost:3000/user-list : get rqst by resources when tab become 2
export const userListAPI = async ()=>{
    return await apiService("GET",`/user-list`,{})
}

//http://localhost:3000/book-list: get rqst by resource when tab == 1
export const bookListAPI = async ()=>{
    return await apiService("GET",`/book-list`,{})
}

//http://localhost:3000/books/69f57e3c88c71023ee8d3996: put rqst by resouce component when approve btn cliked
export const editBookStatusAPI = async (id)=>{
    return await apiService("PUT",`/books/${id}`,{})
}