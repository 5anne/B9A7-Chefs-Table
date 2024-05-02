
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Recipe from './Components/Recipe/Recipe'
import Menu from './Components/Menu/Menu'
import Cook from './Components/Cook/Cook'

function App() {

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('ingredients.json')
      .then(res => res.json())
      .then(data => setMenu(data))
  }
  )

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipe></Recipe>
      <div className='lg:flex gap-8 mx-8 lg:mx-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3'>
          {
            menu.map(item => <Menu key={item.id} item={item}></Menu>)
          }
        </div>
        <div className='lg:w-1/3 border rounded-xl p-8 h-max'>
          <Cook></Cook>
        </div>
      </div>
    </>
  )
}

export default App
