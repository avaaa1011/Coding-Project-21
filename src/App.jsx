import { useState, useEffect } from 'react' 
import reactLogo from './assets/react.svg' 
import viteLogo from '/vite.svg' 
import './App.css' 

function App() {
  //manages the count for the button
  const [count, setCount] = useState(0);

  // stores the fetched tours data
  const [tours, setTours] = useState([]);

  //manages the loading state while fetching data
  const [loading, setLoading] = useState(true);

  // stores any error that occurs during the fetch
  const [error, setError] = useState(null);

  // useEffect to fetch tours data when the component mounts
  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true); // Set loading to true before starting the fetch
      try {
        const response = await fetch('https://course-api.com/react-tours-project'); // Fetch data from API
        if (!response.ok) {
          throw new Error('Failed to fetch tours'); // Throw error if response is not OK
        }
        const data = await response.json(); // Parse JSON data
        setTours(data); // Update tours state with fetched data
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err.message); // Set error state if fetch fails
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchTours(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      {/* Logo section with links to Vite and React documentation */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Main heading */}
      <h1>Vite + React</h1>

      {/* Card section with a button to increment count */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} {/* Display current count */}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR {/* Hot Module Replacement */}
        </p>
      </div>

      {/* Footer section with documentation links */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App // Export the App component as default
