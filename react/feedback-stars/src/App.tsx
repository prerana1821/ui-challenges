import * as React from "react";
import Feedback from "./Feedback";
import "./App.css";

/**
 * Feedback Stars - Rating system:
 *
 * Use Cases:
 * 1. Feedback component takes in a prop `numberOfStars` which will render the number of stars on the page.
 * 2. On hover, the background color of the star should turn to yellow.
 * 3. On clicking a single star, save the feedback in state
 * 4. Ratings should be in the range of  1 <= ratings <= numberOfStars. (It cannot be zero)
 */

export default function App() {
  let numberOfStars = 5;

  return (
    <div>
      <div className='container'>
        <h1>Feedback Stars</h1>
        <Feedback numberOfStars={numberOfStars} />
      </div>
    </div>
  );
}
