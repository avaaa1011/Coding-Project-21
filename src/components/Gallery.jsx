
import React from "react";
import TourCard from "./TourCard";

const Gallery = ({ tours, onRemoveTour }) => {
  return (
    <div className="gallery">
      {/* Map over the tours array and render a TourCard for each tour */}
      {tours.map((tour) => (
        <TourCard
          key={tour.id} // Unique key for each tour
          id={tour.id} // Pass the tour ID
          name={tour.name} // Pass the tour name
          info={tour.info} // Pass the tour description
          image={tour.image} // Pass the tour image URL
          price={tour.price} // Pass the tour price
          onRemove={onRemoveTour} // Pass the remove function
        />
      ))}
    </div>
  );
};

export default Gallery;