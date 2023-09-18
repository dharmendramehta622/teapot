import { AiTwotoneDelete, AiTwotoneEye } from "react-icons/ai";
import { BsFillImageFill } from "react-icons/bs";
import React from "react";


const ImageUpload = ({ filename,onClick,onDelete }) => {
    return ( 
        <div   className="flex items-center justify-between w-1/2 mt-4 bg-white border border-gray-300 rounded-lg">
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center">
          <BsFillImageFill className='w-5 h-5 ms-2'/>
        </div>
        <p className="text-gray-700 pt-2">{filename}</p>
        </div>
        <div className="flex flex-row items-center mx-2">
        <button className="text-green-500 hover:text-green-700">
        <AiTwotoneEye onClick={onClick} className='w-5 h-5 ms-2'/>
      </button>
      <button className="text-red-500 hover:text-red-700">
        <AiTwotoneDelete onClick={onDelete} className='w-5 h-5 ms-2'/>
      </button>
    </div>
      </div>
    );
}
 
export default ImageUpload;