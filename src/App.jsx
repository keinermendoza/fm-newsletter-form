import { useState } from 'react'
import NewsletterCard from './ui/NewsletterCard'
import './css/output.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NewsletterCard />
    </>
  )
}

export default App
