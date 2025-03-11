import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../../feature/jsonData/fetchPostSlice'
import { DataGrid } from '@mui/x-data-grid'


function Menu1() {
    
  const dispatch = useDispatch(fetchPost());
  
  const [data, setData] = useState()
    const state = useSelector((state) => state )

    const columns = [
        { field: 'userId', headerName: 'User ID', width:70},
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'title', headerName: 'Title', width: 230 },
        { field: 'body', headerName: 'Body', width: 230 },
        
      ];

      useEffect(() => {
        dispatch(fetchPost());
      }, [dispatch]);

  if(state.post.isLoading) {
    return <h2>Loading....</h2>
  }

  return (
    <div className='dataGrid'>
      {/* <button onClick={(e) => dispatch(fetchPost())}>Fetch Posts</button> */}
      <h2 style={{textAlign:'center'}}>Posts</h2>
        <div style={{ height: 600, width:'100%'}}>
            <DataGrid rows={state.post.data} columns={columns} pageSize={1}/>
        </div>
    </div>
  )
}

export default Menu1
