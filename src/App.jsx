import { useState } from 'react'
import './css/output.css'
import NewsletterCard from './ui/NewsletterCard'
import SuccessMessage from './ui/SuccessMessage'

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

function App() {
  const [email, setEmail] = useState('')
  const [isError, setIsError] = useState(null) 
  const [messageIsVisible, setMessageIsVisible] = useState(false)

  const handleEmailValidation = (e) => {
    e.preventDefault()
    const result = EMAIL_REGEX.test(email)
    setIsError(!result)

    if (result) {
      setMessageIsVisible(true)  
    }
  }

  return (
    <>
      {messageIsVisible ? (
        <SuccessMessage 
          email={email}
          setMessageIsVisible={setMessageIsVisible}  
        />
      ) : (
        <NewsletterCard
          emial={email}
          setEmail={setEmail}
          isError={isError}
          handleEmailValidation={handleEmailValidation}
        />
      )}
    </>
  )
}

export default App
