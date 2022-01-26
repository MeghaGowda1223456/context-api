import React, { useContext, useEffect } from 'react';
import LoginContext from './context-api/LoginContext';

function ComponentF() {
    let logInData=useContext(LoginContext)

    useEffect(()=>{
        console.log("login data",logInData);
    },[])


  return <div>

      <p>ComponentE-{logInData.loggedInUser}</p>
  </div>;
}

export default ComponentF;
