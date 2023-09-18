import React, { useState } from 'react';
import CustomTextField from '../CustomTextField'
import CustomButton from '../CustomButton';
import RadioButton from '../RadioButton';
import CustomDropDown from '../CustomDropDown'
import { LocalStorageService, LocalStorageServiceItems } from '../../application/storages/storage_services'
import { AxiosServices } from '../../application/protocols/services/api_services';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const AuthCard = () => {
  const user_types = [
    'Individual',
    'Organization'
  ]

  const user_sources = [
    'Facebook',
    'Twitter',
    'Instagram',
    'LinkedIn',
    'Pinterest',
    'YouTube',
    'Snapchat',
    'TikTok',
    'WhatsApp',
    'Telegram',
    'Reddit',
    'GitHub',
    'Medium',
    'Other',
  ]
  const location = useLocation();
  const isRegister = location.pathname === '/register';


  const [userSource, setuserSource] = useState();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    company_name:'',
    user_type: '',
    user_source: '',
    confirm_password: '',
  });



  const handleInputChange = (event) => {

    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    var payload = {};
    if (isRegister) {
      payload = {
        "first_name": formData.first_name,
        "last_name": formData.last_name,
        "email": formData.email,
        "password": formData.password,
        "user_type": formData.user_type,
        "company_name":formData.company_name,
        "user_source": userSource,
        "confirm_password": formData.password
      };
    } else {
      payload = {
        "email": formData.email,
        "password": formData.password,
      };
    }

    console.log(JSON.stringify(payload));
    // <Navigate to="/login" />

    // const res = await AxiosServices.instance.post('/auth/user/register/', payload);
    // if (res.status && isRegister) {
    //   <Navigate to="/verify-otp" />
    // } else {
    //   <Navigate to="/verify-otp" />
    // }
  };

  return (
    <div className="mx-auto p-4 h-md">
      <h1 className='text-primary text-center'> {isRegister ? 'Register' : 'Login'}</h1>
      <div className="mt-4 p-4 w-full">
        {isRegister &&
          <div className='flex flex-col'>
            <CustomTextField name='first_name' hintText={'First Name'} label={'First Name'} onChange={handleInputChange} />
            <CustomTextField name='last_name' hintText={'Last Name'} label={'Last Name'} onChange={handleInputChange} />
            <p className='mb-4'>Are you an Individual/Company ? </p>
            {user_types.map((e) => {
              return <RadioButton key={e} value={e} label={e} name='user_type' onChange= {handleInputChange} />
            })}
            {
              formData.user_type === user_types[1] && 
              <CustomTextField name='company_name' hintText={'Company Name'} label={'Company Name'} onChange={handleInputChange} />
            }
          </div>}
        <CustomTextField name='email' hintText={'Enter your email'} label={'Email'} onChange={handleInputChange} />
        <CustomTextField name='password' hintText={'Enter your password'} label={'Password'} onChange={handleInputChange} />
        {isRegister &&
          <div className='flex flex-col  w-full mb-12'>
            <p>Where did you hear about us?</p>
            <CustomDropDown options={user_sources} onSelect={(ev)=>setuserSource(ev.target.value)} />
           </div>
        }
        <div className=' flex flex-col justify-center items-center w-auto' >
          <CustomButton label={isRegister ? 'Register' : 'Login'} onClick={handleSubmit} />
        </div>
      </div>
      <div className='flex py-2 justify-center'>
        <p>{isRegister ? 'Already have an account?' : 'Don\'t have an account?'}</p>
        <a href={isRegister ? '/login' : '/register'} className='px-1 font-inter text-font'>{isRegister ? 'Login' : 'Register'}</a>
      </div>
    </div>
  );
};

export default AuthCard;
