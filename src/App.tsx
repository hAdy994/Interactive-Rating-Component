import { useState } from 'react'
import './App.css'
import thanks from '/illustration-thank-you.svg'
import star from '/icon-star.svg'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedRating, setSelectedRating] = useState<number>()

  function handleSubmit() {
    setIsSubmitted(true)
  }

  function handleSelectedRating(rating: number) {
    setSelectedRating(rating)
  }
  
  return (
    <div className='flex justify-center h-screen items-center'>
      {isSubmitted
        ? <div className='thankyou flex flex-col items-center max-h-fit modal absolute p-8 rounded-3xl mx-4'>
            <div className=' rounded-full p-4 flex max-w-max mb-3.5'>
              <img src={thanks} width={160} height={160} alt='Thank you!'/>
            </div>
            <div className='selected text-amber-600 p-1 px-4 mb-6 rounded-3xl text-base'>
              You selected {selectedRating} out of 5
            </div>
            <div className='flex flex-col items-center mb-4'>
              <h1 className='text-2xl font-medium my-3'>Thank you!</h1>
              <p className='text-sm leading-relaxed text-center'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>
          </div>
        : <form onSubmit={handleSubmit} className='flex flex-col max-h-fit modal absolute p-8 rounded-3xl mx-4'>
            <div className='rounded-full p-4 flex max-w-max mb-7 background'>
              <img src={star} width={16} height={16} alt='star'/>
            </div>
            <div>
              <div className='mb-8'>
                <h1 className='text-3xl font-medium my-2.5'>How did we do?</h1>
                <p className='text-sm leading-relaxed'>Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!</p>
              </div>
          </div>
          <div className='flex justify-between mb-8'>
            {[1, 2, 3, 4, 5].map((rating) => (
              <button onClick={() => handleSelectedRating(rating)} type='button' className='h-12 w-12 rounded-full hover:text-white focus:text-white transition-colors duration-500 background'>{rating}</button>
            ))}
            </div>
          <div className='flex justify-center items-center'>
            <button disabled={selectedRating === undefined} className='flex grow items-center h-12 justify-center rounded-full text-sm tracking-widest bg-amber-600 hover:bg-white hover:text-amber-600 transition-colors duration-300 submit-button'>SUBMIT</button>
            </div>
        </form>}
    </div>
  )
}

export default App;