function App() {
  const [loading, setloading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  // you should not plpace this useEffect after if (loading) . you cant put it after conditional codes , it must be rendered withou condtion

  if (loading) {
    return (
      <section className="section-loading">
        <h1>loading...</h1>
      </section>
    );
  }

  return (
    <>
      <h2>Hello </h2>
    </>
  );
}
// Let's break down your code snippet to understand why the JSX elements inside the if (loading) block are used to create the initial UI:

// Initial State:

// When your App component is initially rendered, the loading state is set to true (const [loading, setloading] = useState(true);).
// Component Execution:

// During the initial render, the entire App component function is executed.
// The code inside the if (loading) block is also executed because loading is initially true.
// Return Statement Execution:

// Since loading is true initially, the return statement inside the if (loading) block is executed.
// The JSX elements (<section className="section-loading">...</section>) returned by this return statement are used by React to create the initial UI.
// The JSX elements returned by the return statement after the if (loading) block (<h2>Hello </h2>) are not used during the initial render because the code execution doesn't reach that point due to the return statement inside the if block.
// Subsequent Renders:

// If the loading state later changes (e.g., due to data fetching completion), the App component will re-render.
// During subsequent renders, React will re-execute the entire App component function.
// If loading is now false, the return statement after the if (loading) block will be executed, and the JSX elements (<h2>Hello </h2>) returned by that return statement will be used to update the UI.
// // 