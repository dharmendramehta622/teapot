
import React  from 'react';


const CustomButton = ({label, onClick}) => {
    return (
      <div className="">
              <button
            type="submit"
            onClick={onClick}
        className=" bg-primary w-55 h-50 text-background font-bold py-2 px-4 rounded hover:bg-blue-600 focus:ring focus:ring-blue-200"
      >
          {label}
        </button>
    </div>
      );
}
 
export default CustomButton;