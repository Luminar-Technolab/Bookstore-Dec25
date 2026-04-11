import React from 'react'

function BookStatus() {
  return (
    <div className='p-10 my-15 shadow rounded'>
        {/* duplicate uploaded books */}
        <div className="p-5 rounded mt-4 bg-gray-100">
            <div className="md:grid grid-cols-[3fr_1fr]">
                <div className="px-4">
                    <h1 className="text-2xl">title</h1>
                    <h2 className="text-xl">author</h2>
                    <h3 className="text-lg text-blue-500">$ discountPrice</h3>
                    <p className="text-justify">abstract</p>
                    {/* status images */}
                    <div className="flex mt-3">
                        <img width={'120px'} height={'120px'} src="https://png.pngtree.com/png-clipart/20230918/original/pngtree-pending-review-stamp-check-picture-image_13053786.png" alt="pending" />
                        <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/previews/024/382/871/non_2x/approved-sign-symbol-icon-label-stamp-green-round-design-transparent-background-free-png.png" alt="approved" />
                        <img width={'120px'} height={'120px'} src="https://www.pngmart.com/files/7/Sold-PNG-Transparent.png" alt="sold" />
                    </div>
                </div>
                <div className="px-4 mt-4 md:mt-0">
                    <img className='w-full' src="https://tse2.mm.bing.net/th/id/OIP.1Kis_mthP77favEcfzT93QHaLT?pid=Api&P=0&h=180" alt="No Image" />
                    <div className="mt-4 flex justify-end">
                        <button className="bg-red-600 text-white p-2 rounded">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookStatus