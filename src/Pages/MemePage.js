import React, {useEffect, useState} from 'react'
import Meme from '../Components/Meme'
import { getAllMemes } from '../api/Memes'
const MemePage = () => {

  const [data,setData]= useState([]);

  //Jaise hi hamara component load hoga waise hi memes bhi load ho jaye
  useEffect(()=>{
    getAllMemes().then((memes)=>setData(memes.data.memes));

  },[]);
  return (
    <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
        padding: '50px 20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'

    }}
    className='row'>
      {
         data.map((el) =>(
          <Meme image={el.url} title={el.name}/>
         ))
      }
    </div>
        
  )
}

export default MemePage
