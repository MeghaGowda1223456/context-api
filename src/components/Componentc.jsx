import React, { useEffect } from 'react';
import UserContext from './context-api/UserContext';


function ComponentC() {
    const context=React.useContext(UserContext)

    useEffect(()=>{
        console.log("context",context);
    })
  return <div>
      <p>Component c context api data-{context}</p>
  </div>;
}

export default ComponentC;
