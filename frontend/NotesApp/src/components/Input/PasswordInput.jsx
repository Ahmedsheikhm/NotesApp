import React,{useState} from 'react';

const PasswordInput = ({value,onChange,placeholder}) => {

    const [isShowPassword,setIsShowPassword] = useState(false);
    const toggleShowPassword = ()=>{
        setIsShowPassword(!isShowPassword);
    };
  return (
    <div className='flex items-center bg-transparent border-[1.5px] border-gray-400 px-5 rounded mb-3'>
        <input 
        value={value}
        onChange={onChange}
        type={isShowPassword?"text":"password"}
        placeholder={placeholder||"Password"}
        className='w-full text-sm bg-transparent py-3 mr-3 rounded focus:outline-none focus:ring-0 shadow-none appearance-none'/>
    </div>
  );
};

export default PasswordInput