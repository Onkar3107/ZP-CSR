import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from "react-icons/fc"


const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {

    // console.log("ye rha mera form type");
    // console.log(formtype)
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>

        <div className='w-11/12 max-w-[450px]' >
            <h1
            className='text-black font-semibold text-[1.875rem] leading-[2.375rem]' 
            >
                {title}
            </h1>

            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

        </div>

        <div className='relative w-11/12 max-w-[450px] flex items-center justify-center'>
            <img src={image}
                alt="Students"
                width={558}
                height={490}
                loading="lazy"
                className='absolute '
                />    
        </div>

    </div>
  )
}

export default Template
