import React from "react";
import { render } from "react-dom";

// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// create our App
const App = ({faLink, size}) => (
  <div>
    <FontAwesomeIcon icon={faHome} size={size} />
  </div>
);

export default App;