import React, { useEffect, useState } from 'react'
import { deleteUserUploadBookAPI, getAllUserBooksAPI } from '../../services/allAPI'

function BookStatus() {
    
    const [uploadBooks,setUploadBooks] = useState([])
    // console.log(uploadBooks);
    
    useEffect(()=>{
        getUserUploadBooks()
    },[])

    const getUserUploadBooks = async ()=>{
        const result = await getAllUserBooksAPI()
        setUploadBooks(result.data)
    }

    const removeBook = async (id)=>{
        const result = await deleteUserUploadBookAPI(id)
        getUserUploadBooks()
    }

  return (
    <div className='p-10 my-15 shadow rounded'>
        {/* duplicate uploaded books */}
        {
            uploadBooks.length>0 ?
                uploadBooks?.map(book=>(
                    <div className="p-5 rounded mt-4 bg-gray-100">
                        <div className="md:grid items-center grid-cols-[3fr_1fr]">
                            <div className="px-4">
                                <h1 className="text-2xl">{book?.title}</h1>
                                <h2 className="text-xl">{book?.author}</h2>
                                <h3 className="text-lg text-blue-500">$ {book?.discountPrice}</h3>
                                <p className="text-justify mt-5 "><span className='font-semibold'>Abstract</span> : {book?.abstract}</p>
                                {/* status images */}
                                <div className="flex mt-3">
                                    {
                                        book?.status=="pending"?
                                        <img width={'120px'} height={'120px'} src="https://png.pngtree.com/png-clipart/20230918/original/pngtree-pending-review-stamp-check-picture-image_13053786.png" alt="pending" />
                                        :
                                        book?.status=="approved"?
                                        <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/previews/024/382/871/non_2x/approved-sign-symbol-icon-label-stamp-green-round-design-transparent-background-free-png.png" alt="approved" />
                                        :
                                        <img width={'120px'} height={'120px'} src="https://www.pngmart.com/files/7/Sold-PNG-Transparent.png" alt="sold" />
                                    }
                                </div>
                            </div>
                            <div className="px-4 mt-4 md:mt-0">
                                <img className='w-full' src={book?.imageURL} alt="No Image" />
                                <div className="mt-4 flex justify-end">
                                    <button onClick={()=>removeBook(book?._id)} className="bg-red-600 text-white p-2 rounded">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            :
            <div className="font-bold text-xl">You haven't upload any book yet!!!</div>
        }
    </div>
  )
}

export default BookStatus