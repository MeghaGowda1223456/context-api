import React, { useEffect, useRef } from 'react';

function RefComponent() {
    const inputRef=useRef('hello')// initially i will be hello then the element will be overrriden
    const passwordRef=useRef()
    useEffect(()=>{
        console.log("inputref",inputRef);
        console.log("input ref current",inputRef.current);
        inputRef.current.focus()
    },[])

  return <div>
      <input type="text" ref={inputRef} placeholder='enter the email' />
      <input type="text" ref={passwordRef} placeholder='enter the password' />
      <button onClick={()=>{
          passwordRef.current.focus()
      }}>Login</button>
  </div>;
}

export default RefComponent;
