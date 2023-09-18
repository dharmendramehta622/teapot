
import React from 'react';
import logot from '../../assets/images/logot.png';

 

const AuthHeader = () => {
    return (
        <div className='flex flex-row justify-center items-center    bg-background'>
           <a href='/login'> <img src={logot} height={180} width={180} alt='logo.png' ></img>  </a>
        </div>
    );
}
 
export default AuthHeader;