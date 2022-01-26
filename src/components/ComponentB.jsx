import React, { useState } from "react";
import ComponentC from "./Componentc";
import ComponentD from "./ComponentD";
import { UserProvider } from "./context-api/UserContext";

function ComponentB() {
  const [name, setname] = useState("chaya");
  return (
    <div>
      <UserProvider value={name}>
        <ComponentD />
      </UserProvider>
      <ComponentC/>
    </div>
  );
}

export default ComponentB;
