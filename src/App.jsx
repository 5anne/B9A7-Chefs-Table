
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Recipe from './Components/Recipe/Recipe'
import Cook from './Components/Cook/Cook'
import Menubar from './Components/Menubar/Menubar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [items, setItems] = useState([]);
  const [menu, setMenu] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [prepTime, setPrepTime] = useState(0);
  const [calory, setCalory] = useState(0);
  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch('ingredients.json')
      .then(res => res.json())
      .then(data => setMenu(data));
  }, []);

  const notify = () => toast("Already exist");

  const selectedFood = (item) => {
    const flag = count.filter(num => num === item.recipe_id);
    console.log(flag);
    if (flag.length < 1) {
      const newItem = [...items, item];
      setItems(newItem);
    }
    else {
      notify();
    }
    const newCount = [...count, item.recipe_id];
    setCount(newCount);
  }

  const prepareFood = (id, item) => {
    const remainingFood = items.filter(item => item.recipe_id !== id);
    setItems(remainingFood);
    const newItem = [...cooking, item];
    setCooking(newItem);
    setPrepTime(prepTime + item.preparing_time);
    setCalory(calory + item.calories);
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipe></Recipe>
      <div className='lg:flex gap-8 mx-8 lg:mx-16 mb-12'>
        <Menubar menu={menu} selectedFood={selectedFood}></Menubar>
        <div className='lg:w-1/3 border rounded-xl p-8 h-max'>
          <Cook items={items} prepareFood={prepareFood} cooking={cooking} prepTime={prepTime} calory={calory}></Cook>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App;
