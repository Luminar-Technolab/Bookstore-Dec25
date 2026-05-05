import React, { useEffect, useState } from 'react'
import { getAllUserBoughtBooksAPI } from '../../services/allAPI';

function Purchase() {

    const [boughtBooks,setBoughtBooks] = useState([])
    console.log(boughtBooks);

    useEffect(()=>{
        getUserBoughtBooks()
    },[])

    const getUserBoughtBooks = async ()=>{
        const result = await getAllUserBoughtBooksAPI()
        setBoughtBooks(result.data)
    }
    
  return (
    <div className='p-10 my-15 shadow rounded'>
        {/* duplicate purchase books */}
        {
            boughtBooks.length>0 ?
                boughtBooks?.map(book=>(
                    <div className="p-5 rounded mt-4 bg-gray-100">
                        <div className="md:grid items-center grid-cols-[3fr_1fr]">
                            <div className="px-4">
                                <h1 className="text-2xl">{book?.title}</h1>
                                <h2 className="text-xl">{book?.author}</h2>
                                <h3 className="text-lg text-blue-500">$ {book?.discountPrice}</h3>
                                <p className="text-justify mt-5 "><span className='font-semibold'>Abstract</span> : {book?.abstract}</p>
                                {/* status images */}
                                <div className="flex mt-3">
                                    <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/previews/023/629/698/non_2x/web-button-icon-purchase-button-free-png.png" alt="purchase" />                       
                                </div>
                            </div>
                            <div className="px-4 mt-4 md:mt-0">
                                <img className='w-full' src={book?.imageURL} alt="No Image" />
                            </div>
                        </div>
                    </div>
                ))
            :
            <div className="text-xl font-bold">You havn't purchased any books!!!</div>
        }
    </div>
  )
}

export default Purchase