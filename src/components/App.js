import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          {/* <Route exact path="/" component={}></Route> */}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
