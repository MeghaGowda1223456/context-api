import React, { Component } from 'react';

export class RefClassComponent extends Component {
    constructor(props){
            super(props)
            this.iRef=React.createRef()
            this.pRef=React.createRef()
    }

    componentDidMount(){
        console.log(this.iRef);
        this.iRef.current.focus()
    }
  render() {
    return <div>
        <input type="text" ref={this.iRef} placeholder='enter the email' />
      <input type="text" ref={this.pRef} placeholder='enter the password' />
      <button onClick={()=>{
          this.pRef.current.focus()
      }}>Login</button>
    </div>;
  }
}

export default RefClassComponent;
