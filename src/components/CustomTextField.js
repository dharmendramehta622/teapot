
import React from 'react';

const CustomTextField = ({value, name,type,label,hintText, onChange}) => {
    return (
        <div>
        <div className="flex flex-col">
            <label htmlFor="textfield" className='text-xl font-inter text-primary'>{`${label}`}</label>
            <input
                type={`${type}`}
                name={name}
              placeholder={hintText}
              value={value}
              onChange={onChange}
              className="w-max-full p-2  border border-gray  rounded-md hover:border-primary mb-4 w-full"
            />
            </div>
        </div>
            
    );
}
 
export default CustomTextField;