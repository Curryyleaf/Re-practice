import React from "react";

function App() {
  // Initialize state
  const [isLoading, setIsLoading] = React.useState(true);

  // Simulate async operation
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating a 2-second delay
  }, []);

  // Conditional rendering based on loading state
  if (isLoading) {
    return <div>Loading...</div>; // Execution stops here if isLoading is true
  }

  // This code won't execute until isLoading is false
  return <div>Data loaded successfully!</div>;
}

export default App;
