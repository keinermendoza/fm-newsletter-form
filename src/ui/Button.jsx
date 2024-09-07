import React from 'react'

export default function Button({children, onClick, form=null}) {
  return (
    <button
        onClick={onClick}
        {...(form && { form })}
        className='mt-1 bg-clr-black text-clr-white font-bold p-4 rounded-lg transition-colors duration-300
        hover:shadow-custom hover:bg-gradient-to-r hover:from-[#ff527b] hover:to-[#ff634b]' 
        form="newsletter-subscription">
        {children}
    </button>
  )
}
