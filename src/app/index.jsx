import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import {getCourserList} from '../core/services/api/cours';

function App() {
  const [count, setCount] = useState([]);

  const getList = async() => {
    const result = await getCourserList(5);
    console.log(result);
  }

  useEffect(()=>{
    getList();
  },[])

  return (
    <>

    </>
  )
}

export default App
