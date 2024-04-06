import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setloading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour=(id)=>{
    const newTour= tours.filter((item)=> item.id===id )
  setTours(newTour);
  }
  const fetchTours = async () => {
    setloading(true);
    // i am setting loading true here as well as prescationery measure

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setloading(false);
      setTours(tours);
    } catch (error) {
      setloading(false);
      console.log(error);
      // Here's a breakdown of what the error parameter might contain:

      // Name: The type or class of the error (e.g., TypeError, SyntaxError).
      // Message: A human-readable description of the error, providing more context about what went wrong.
      // Stack Trace: A stack trace that shows the sequence of function calls leading to the error. This can be valuable for debugging.
    }
  };

  useEffect(() => {
    fetchTours();

    //  we put fetch tours in the useEffect to stop side effects like infinite loop and efficiency like sperating state and fetching .
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours  tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
