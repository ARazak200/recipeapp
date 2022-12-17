import React, { useState } from "react";
import Star from "./star";
import { createArray } from "./lib";

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(3);

  return (
    <div>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))
      }
      <p> {selectedStars} of {totalStars} stars </p>
    </div>
  );
}


// import axios from "axios";

// export default function StarRating({ totalStars = 5 }) {
//   const [selectedStars, setSelectedStars] = useState(0);

//   const handleSelect = async rating => {
//     // Update the selectedStars state variable
//     setSelectedStars(rating);

//     // Make a request to the backend to save the rating to the array
//     try {
//       await axios.post("../data/data", { rating });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       {createArray(totalStars).map((n, i) => (
//         <Star
//           key={i}
//           selected={selectedStars > i}
//           onSelect={() => handleSelect(i + 1)}
//         />
//       ))}
//       <p>{selectedStars} of {totalStars} stars</p>
//     </div>
//   );
// }
