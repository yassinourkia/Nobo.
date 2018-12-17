import React from "react";
import Header from "./Header";
import Root from "./Root";
import Footer from "./Footer";

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-10 col-xs-offset-1">
        <Header />
        <Root />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
