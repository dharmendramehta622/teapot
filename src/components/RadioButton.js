
import React from 'react';

const RadioButton = ({value, name,label,onChange}) => {
    return (
        <div className='my-1'>
            <label className="flex items-center space-x-2">
                <input type="radio" className="form-radio text-font" name={name} value={value}  onChange={onChange}/>
                <span className="text-gray">{label}</span>
            </label>
     </div>
    );
}

 

 
export default RadioButton;