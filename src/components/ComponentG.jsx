import React, { useContext } from 'react';
// import ComponentH from './ComponentH';
import DataContext  from './context-api/DataContext';

function ComponentG() {
    let data=useContext(DataContext)
  return <div>
        <p>ComponentG ={data}</p>
        <button onClick={()=>{
            data="9999"
            console.log(data);
        }}>update data g</button>


  </div>;
}

export default ComponentG;
