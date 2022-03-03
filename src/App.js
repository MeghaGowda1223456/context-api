
import './App.css';
import { useState } from 'react';
import ComponentA from "./components/ComponentA"
import { UserProvider } from './components/context-api/UserContext';
import { LoginProvider } from './components/context-api/LoginContext';
import ComponetE from './components/ComponetE';
import { DataProvider } from './components/context-api/DataContext';
import ComponentG from './components/ComponentG';
import ComponentH from './components/ComponentH';
import RefComponent from './components/ref-components/RefComponent';
import RefClassComponent from './components/ref-components/RefClassComponent';


function App() {
  const [userName,setuserName]=useState("Megha")
  const [loginData,setloginData]=useState({
    isLogin:true,
    loggedInUser:"Guru"
  })
  let myData="111"
  return (
    <div className="App">
      ContextApi
      <button onClick={()=>{
        setuserName("Sachi")
      }}>Update user name</button>
      <UserProvider value={userName}>
        <ComponentA/>
        <ComponentH/>
      </UserProvider>

      <LoginProvider value={loginData}>
      <ComponetE/>
      </LoginProvider>

      <DataProvider value={myData}>
        <ComponentG/>
      </DataProvider>

      

    <button onClick={()=>{
      myData="222"
      console.log(myData);
    }}>Update data</button>

    <RefComponent/>
    <RefClassComponent/>
    </div>
  );
}

export default App;
