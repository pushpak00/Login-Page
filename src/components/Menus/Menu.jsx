import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

function Menu() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'age', headerName: 'Age', type: 'number', width: 110 },
        { field: 'country', headerName: 'Country', width: 150 },
      ];
      
      const rows = [
        { id: 1, name: 'John', age: 25, country: 'USA' },
        { id: 2, name: 'Anna', age: 30, country: 'Canada' },
        { id: 3, name: 'David', age: 35, country: 'UK' },
        { id: 4, name: 'Sophia', age: 28, country: 'Germany' },
      ];


    return(
        <>
        {/* <h1 style={{justifycontent: 'center', display:'block'}}>this is a menu </h1> */}

        
        <div >
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} />
            </div>
               
        </div>
    

        </>
    )
}

export default Menu