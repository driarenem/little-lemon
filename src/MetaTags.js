import React from "react";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lillte Lemon</title>
        <meta
          name="description"
          content="Experience the taste of the Mediterranean at Little Lemon, 
          where fresh ingredients meet exquisite flavors."
        />
        <meta
          name="keywords"
          content="little lemon, restaurant, 
        Mediterranean, food, cuisine, dining"
        />
        <meta name="author" content="Little Lemon Restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
    </div>
  );
}

export default App;
