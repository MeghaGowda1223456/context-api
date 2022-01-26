import React, { Component } from 'react';
import UserContext, { UserConsumer } from './context-api/UserContext';

export class ComponentH extends Component {
    static contextType=UserContext // this is another way of using context in class component

    componentDidMount() {
        console.log(this);
        console.log(this.context);
    }

  render() {
    return <div>
        <UserConsumer>
            {
                (Data)=>{
                    return <p>ComponentH {Data}</p>
                }
            }

           
        </UserConsumer>
         {this.context}
    </div>;
  }
}

export default ComponentH;
