import React from 'react'
import successIcon from '/images/icon-success.svg'
import Button from './Button'

export default function SuccessMessage({email, setMessageIsVisible}) {
  return (
    <div className='min-h-screen p-6 pt-0 bg-clr-white flex flex-col lg:min-h-fit lg:max-w-lg lg:p-16 lg:rounded-[2rem] lg:shadow-2xl lg:gap-10'>
      <div 
        id="message-wrapper"
        className='my-auto flex flex-col justify-center gap-6'>
        <img className='size-16 mb-4' src={successIcon} alt="" />
        <h1 className='font-bold text-[2.5rem] leading-10 lg:text-5xl'>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <span className='font-bold'>{email}</span>. 
          Please open it and click the button inside to confirm your subscription.
        </p>
      </div>
      <Button onClick={() => setMessageIsVisible(false)}>
        Dismiss message
      </Button>
    </div>
  )
}
