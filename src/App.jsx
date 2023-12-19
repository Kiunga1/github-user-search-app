import React from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Card from './components/Card'

const App = () => {
  return (
    <div className=' font-spaceMono w-100 h-screen bg-[#F6F8FF]'>
      <div className='text-center lg:w-[40%] md:w-[50%] w-[90%] m-auto mt-5 flex flex-col gap-5'>
      <Header/>
      <SearchBar/>
      <Card/>
      </div>
    </div>
  )
}

export default App
