import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

function UploadBook() {
    const [bookDetails,setBookDetails] = useState({
        title:"",author:"",pages:"",imageURL:"",price:"",discountPrice:"",abstract:"",publisher:"",isbn:"",language:"",category:"",uploadImages:[]
    })
    const [preview,setPreview] = useState("")

    console.log(bookDetails);

    const handleUploadBookImage = (e)=>{
        const imageFile = e.target.files[0]
        const uploadBookImageArray = bookDetails.uploadImages
        uploadBookImageArray.push(imageFile)
        setBookDetails({...bookDetails,uploadImages:uploadBookImageArray})
        const url = URL.createObjectURL(imageFile)
        setPreview(url)
    }
    
  return (
    <div className='p-10 my-20 mx-5 bg-gray-200'>
        <h1 className="text-center text-3xl font-medium">Upload Book Details</h1>
        <div className="md:grid grid-cols-2 mt-10 w-full">
            <div className="px-3">
                <div className="mb-3">
                    <input value={bookDetails.title} onChange={e=>setBookDetails({...bookDetails,title:e.target.value})} type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white' />
                </div>
                <div className="mb-3">
                    <input value={bookDetails.author} onChange={e=>setBookDetails({...bookDetails,author:e.target.value})} type="text" placeholder='Author' className='w-full p-2 rounded bg-white' />
                </div>
                <div className="mb-3">
                    <input value={bookDetails.imageURL} onChange={e=>setBookDetails({...bookDetails,imageURL:e.target.value})} type="text" placeholder='Book Cover Image URL' className='w-full p-2 rounded bg-white' />
                </div>
                <div className="mb-3">
                    <input value={bookDetails.pages} onChange={e=>setBookDetails({...bookDetails,pages:e.target.value})} type="text" placeholder='Total Pages' className='w-full p-2 rounded bg-white' />
                </div>
                <div className="mb-3">
                    <input value={bookDetails.price} onChange={e=>setBookDetails({...bookDetails,price:e.target.value})} type="text" placeholder='Original Price' className='w-full p-2 rounded bg-white' />
                </div>
                <div className="mb-3">
                    <input value={bookDetails.discountPrice} onChange={e=>setBookDetails({...bookDetails,discountPrice:e.target.value})} type="text" placeholder='Discount Price' className='w-full p-2 rounded bg-white' />
                </div>
                <div className="mb-3">
                    <textarea value={bookDetails.abstract} onChange={e=>setBookDetails({...bookDetails,abstract:e.target.value})} type="text" placeholder='Abstract' rows={'5'} className='w-full p-2 rounded bg-white' />
                </div>
            </div>
            <div className="px-3">
                <div className="mb-3">
                    <input value={bookDetails.publisher} onChange={e=>setBookDetails({...bookDetails,publisher:e.target.value})} type="text" placeholder='Publisher' className='w-full p-2 rounded bg-white' />
                </div>
                <div className="mb-3">
                    <input value={bookDetails.isbn} onChange={e=>setBookDetails({...bookDetails,isbn:e.target.value})} type="text" placeholder='ISBN' className='w-full p-2 rounded bg-white' />
                </div>
                <div className="mb-3">
                    <input value={bookDetails.language} onChange={e=>setBookDetails({...bookDetails,language:e.target.value})} type="text" placeholder='Language' className='w-full p-2 rounded bg-white' />
                </div>
                <div className="mb-3">
                    <input value={bookDetails.category} onChange={e=>setBookDetails({...bookDetails,category:e.target.value})} type="text" placeholder='Category' className='w-full p-2 rounded bg-white' />
                </div>
                {/* upload book image */}
                <div className="mb-3 flex justify-center items-center mt-10">
                    <label htmlFor="bookImages">
                        <input onChange={e=>handleUploadBookImage(e)} type="file" id='bookImages' hidden/>
                        <img  width={'200px'} height={'200px'}  src={preview?preview:"http://www.pngall.com/wp-content/uploads/2/Upload-Transparent.png"} alt="book file not found" />
                    </label>
                </div>
                {/* display uploaded images */}
                {
                    preview &&
                    <div className="flex justify-center items-center">
                    <img  width={'70px'} height={'70px'}  src="https://tse2.mm.bing.net/th/id/OIP.1Kis_mthP77favEcfzT93QHaLT?pid=Api&P=0&h=180" alt="book Image not found" />
                    <label htmlFor="bookUpload">
                        <input type="file" id='bookUpload' hidden/>
                        <FaPlus className='text-3xl ms-2'/>
                    </label>
                    </div>
                }
            </div>
        </div>
        {/* reset & add button */}
        <div className="flex md:justify-end justify-center w-full p-3 mt-8">
            <button className="bg-gray-600 text-white py-2 px-3 rounded hover:text-gray-600 hover:bg-white">RESET</button>
            <button className="bg-blue-600 text-white py-2 px-3 rounded ms-5  hover:text-blue-600 hover:bg-white">ADD BOOK DETAILS</button>
        </div>
    </div>
  )
}

export default UploadBook