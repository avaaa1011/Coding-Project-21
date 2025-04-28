import React from 'react';
import './TourCard.css'; // Optional: Import CSS for styling the component

// TourCard component to display a single tour's details
function TourCard({ tour, onRemove }) {
  // Destructure the tour object to extract its properties
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour-card">
      {/* Display the tour image */}
      <img src={image} alt={name} className="tour-image" />

      {/* Display the tour details */}
      <div className="tour-details">
        <h2>{name}</h2> {/* Tour name */}
        <p className="tour-price">${price}</p> {/* Tour price */}
        <p className="tour-info">{info}</p> {/* Tour description */}

        {/* Button to remove the tour when clicked */}
        <button className="not-interested-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard; // Export the TourCard component for use in other parts of the app
