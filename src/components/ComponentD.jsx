import React from 'react';
import UserContext from './context-api/UserContext';

function ComponentD() {
    const nameContext=React.useContext(UserContext)
  return <div>
<p>d context data={nameContext}</p>
  </div>;
}

export default ComponentD;
