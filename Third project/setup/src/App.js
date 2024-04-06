import React from 'react';
import Review from './Review';
function App() {
  return <main >
    <section className="container">
      <div className="title">
        <h2>Tikshna's Review</h2>
        <div className="underline"></div>
        <Review/>
      </div>
    </section>
  </main>;

  // how to install react icons?
  // npm install react-icons --save /also its a full blown react component 
  // you can also add classes to it and its a svg 
  
  // Usage :
  // import {FaBear} from reac t-icon/fa
}

export default App;
