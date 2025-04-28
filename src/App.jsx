import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

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

      {/* Gallery section */}
      <div className="gallery">
        <h2>Tour Gallery</h2>
        {tours.map((tour) => (
          <div key={tour.id} className="tour-card">
            <h3>{tour.name}</h3>
            <p>{tour.info}</p>
            <p>Price: ${tour.price}</p>
            <img src={tour.image} alt={tour.name} />
          </div>
        ))}
      </div>

      {/* Footer section with documentation links */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
