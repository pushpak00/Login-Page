import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from './feature/jsonData/fetchPostSlice'
import './App.css'

function App() {
  const dispatch = useDispatch();

  if(state.post.isLoading) {
    return <h2>Loading....</h2>
  }



  return (
    <>
      <button onCLick={(e) => dispatch(fetchPost())}>Fetch Posts</button>
      {state.post.data && state.post.data.map((e) => <li>e.title</li>)}
    </>
  )
}

export default App
