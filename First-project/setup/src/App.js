import React, { useState } from "react";
import List from "./List"
import Data from "./data"


function App (){
 const[ people , setPeople ] = useState(Data);

  const removeItem=()=>{
    setPeople([])
  }
  return(
    <main >
     <sectioin className="container">
      <h3>todays Birthday</h3>
      <List People={people}/>
      <button onClick={removeItem}> Clear all </button>
     </sectioin>
    </main>
  )
}

export default App;