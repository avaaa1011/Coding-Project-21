import React from "react";
import TourCard from "./TourCard"; // Import the TourCard component

// Gallery component to display a list of tours
const Gallery = ({ tours, onRemoveTour }) => {
  return (
    <div className="gallery">
      {/* Map over the tours array and render a TourCard for each tour */}
      {tours.map((tour) => (
        <TourCard
          key={tour.id} // Unique key for each tour
          id={tour.id} // Pass the tour ID as a prop
          name={tour.name} // Pass the tour name as a prop
          info={tour.info} // Pass the tour description as a prop
          image={tour.image} // Pass the tour image URL as a prop
          price={tour.price} // Pass the tour price as a prop
          onRemove={onRemoveTour} // Pass the remove handler as a prop
        />
      ))}
    </div>
  );
};

export default Gallery; // Export the Gallery component for use in other parts of the app