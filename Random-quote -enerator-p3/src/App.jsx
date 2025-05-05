import { useState } from 'react'

const quotes = [
    { text: "life is short, dont learn js", author:"dinesh"},
    {text: "joan doi is the developer", author:"dinu"},
    {text: "dont learn programming", author:"dp"},
]

function App() {

    const [quote, setQuote] = useState(quotes[0]);

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

 

  return (
    <div className="h-screen flex items-center justify-center gap-5">
    <h2 className='bg-[#90ef64]'>{quote.text}</h2>
    <p className='bg-[#65d82f]'><span className='bg-[#5141cb]'>Author</span> {quote.author}</p>
    <button className='bg-zinc-400' onClick={getRandomQuote}>New Quote</button>
    </div>
  )
}

export default App