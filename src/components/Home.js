// dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Items from "./Items";
import CategoriesList from "./Category/CategoriesList";

function Home() {
  return (
    <div className="container-fluid">
      <CategoriesList />

      <Route path="/items" component={Items} />
    </div>
  );
}

export default Home;
