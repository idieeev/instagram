import React, { useEffect } from 'react'
import LogIn from '/src/assets/images/LogIn.png'
import links from '/src/assets/images/links.png'
import logo from '/src/assets/images/instagram-logo.png'
import TextField from '@mui/material/TextField';
import facebook from '/src/assets/images/facebook.png'
import { useFormik } from 'formik';
import { axiosRequest } from '../../utils/axiosRequest';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../../utils/token';
import axios from 'axios';

const Registration = () => {
  const navigation = useNavigate()
  const signUpFormik = useFormik(
    {
      initialValues:
      {
        userName:"",
        fullName:"",
        email:"",
        password:"",
        confirmPassword:""
      },
      onSubmit: async ()=>
      {
        try
        {
          let {data} = await axiosRequest.post("Account/register" , signUpFormik.values)
          if(data.statusCode == 200)
          {
            saveToken(data.data)
            navigation("/basic")
          }
        }
        catch(error)
        {
          console.log(error);
        }
      }
    }
  )

  if(!localStorage.getItem("access_token"))
  {
    return (
      <div className='w-[100%] p-[74px_250px] flex justify-between '>
        <div className='flex flex-col gap-3 w-[35%]  items-center'>
          <img src={LogIn} alt="Picture" className='mix-blend-multiply' />
          <p className="text-[20px] text-[gray]">Get the app</p>
          <img src={links} alt="Picture" className='w-[100%]' />
        </div>
        <div className='w-[45%] flex flex-col justify-between'>
          <div className='w-[100%] flex flex-col items-center p-[20px] rounded-md border-[1.7px] border-[#E2E8F0] gap-5'>
            <img src={logo} alt="" />
            <form onSubmit={signUpFormik.handleSubmit} className='w-[95%]  flex flex-col gap-3'>
              <input name='userName' value={signUpFormik.values.userName} onChange={signUpFormik.handleChange} type="text" className='w-[100%] h-[6svh] rounded-md border border-[#E2E8F0] text-[20px] px-[1%] outline-none' placeholder='Phone number, user name or email' />
              <input name='fullName' value={signUpFormik.values.fullName} onChange={signUpFormik.handleChange} type="text" className='w-[100%] h-[6svh] rounded-md border border-[#E2E8F0] text-[20px] px-[1%] outline-none' placeholder='fullName' />
              <input name='email' value={signUpFormik.values.email} onChange={signUpFormik.handleChange} type="text" className='w-[100%] h-[6svh] rounded-md border border-[#E2E8F0] text-[20px] px-[1%] outline-none' placeholder='email' />
              <input name='password' value={signUpFormik.values.password} onChange={signUpFormik.handleChange} type="text" className='w-[100%] h-[6svh] rounded-md border border-[#E2E8F0] text-[20px] px-[1%] outline-none' placeholder='Password' />
              <input name='confirmPassword' value={signUpFormik.values.confirmPassword} onChange={signUpFormik.handleChange} type="text" className='w-[100%] h-[6svh] rounded-md border border-[#E2E8F0] text-[20px] px-[1%] outline-none' placeholder='confirmPassword' />
              <p className="text-gray-400 text-[13px]">By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
              <button className='bg-[#3B82F6] text-[20px] text-[white] w-[100%] py-[10px] rounded-xl' type='submit'>Sign up</button>
            </form>
          </div>
          <div className='flex gap-2 items-center justify-center border-[1.7px] border-[#E2E8F0] rounded-md py-[20px]'>
            <p className="text-[20px]">Have an account?</p>
            <p className="text-[20px] text-[#3B82F6] cursor-pointer" onClick={() => navigation("/")}>Login</p>
          </div>
        </div>
      </div>
    )
  }
  else
  {
    useEffect(() =>
    {
      navigation("/basic")
    } , [] )
  }
}

export default Registration