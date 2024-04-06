import React from "react";
import Tour from "./Tour";
const Tours = ({ tours  , removeTour}) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours </h2>
        <div className="underline"></div>
      </div>
      <div>
        {/* You can directly put tours into Tour componenet , and not use map at all .
        the use of map is generally doen when you want ot add a specific operation on each item as well  */}

        {/* When you have a dynamic list of items (tours) that can vary in length, using map ensures that your UI can adapt to different amounts of data. If you directly passed a single tour as a prop, it would limit your ability to render multiple tours dynamically. */}
      
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
