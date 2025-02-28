import React, { useEffect, useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';


function Menu() {

    const [data, setData] = useState()

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/todos/1/comments')
        .then((response) => {
        return response.json()
        })
        .then((data1) => {
            setData(data1)           
        })
        
        }
    ,[])
    
    const columns = [
        { field: 'postId', headerName: 'Post ID', width:70},
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'name', headerName: 'Name', width: 230 },
        { field: 'email', headerName: 'Email', width: 230 },
        { field: 'body', headerName: 'Comment', width: 350 },
      ];

    // const postId1 = data.filter(tableData => tableData.postId === 1)
    // const postMap = postId1.map(tableDataMap => 
    //     <li>{tableDataMap.name}</li>
    // )
        
    return(
              
        <div className="dataGrid">
            <h2 style={{textAlign:'center'}}>Comments</h2>
            <div  style={{ height: 600, width:'100%'}}>
                <DataGrid rows={data} columns={columns} pageSize={1} />
            </div>

        </div>
    
    )
}

export default Menu