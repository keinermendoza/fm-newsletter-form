import React from 'react'
import mobileIlustration from '/images/illustration-sign-up-mobile.svg'
import desktopIlustration from '/images/illustration-sign-up-desktop.svg'
import Button from './Button'
export default function NewsletterCard() {
  return (
    <div className='bg-clr-white grid lg:max-w-[51rem] lg:p-5 lg:rounded-3xl lg:grid-cols-[55%,1fr] lg:gap-4'>
      <img className='w-full lg:hidden' src={mobileIlustration} alt="" />
      <img className='w-full hidden lg:block lg:order-2' src={desktopIlustration} alt="" />
      <div className='p-7 py-10 flex flex-col gap-[1.125rem] lg:order-1 lg:justify-center
        lg:px-10 lg:py-0 lg:text-sm'>
        <h1 className='font-bold text-[2.5rem] lg:text-5xl'>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className='flex flex-col gap-2 lg:gap-1 custom-list-before-svg list-inside'
          role="list">
          <li className='flex gap-2'>Product discovery and building what matters</li>
          <li className='flex gap-2'>Measuring to ensure updates are a success</li>
          <li className='flex gap-2'>And much more!</li>
        </ul>
        <form 
          id="newsletter-subscription"
          className='mt-4' 
          action="">
          <label className='block mb-1 font-bold text-xs' htmlFor="email">Email address</label>
          <input 
            id="email"
            name='email'
            className='w-full p-4 px-6 border border-clr-gray rounded-lg' 
            placeholder="email@company.com" 
            type="email" />
        </form>
        <Button
          form="newsletter-subscription"
          onClick={() => alert("working")}
        >
          Subscribe to monthly newsletter
        </Button>
        
      </div>
    </div>
  )
}
