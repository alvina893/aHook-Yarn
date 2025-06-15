import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="wrapper">
      <img src="./public/img/logo.jpg" alt="aHook&Yarn" />
      <h1>
        Save Your Favorite <span className="text-gradient">Crochet</span>{" "}
        Tutorials Easily!
      </h1>
      {/* <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      {/* <h1 className="text-shadow-white text-2xl">{searchTerm}</h1> */}
      <div className="authentication-content">
        <Link className="btn-dark" to="/signin">
          <p>Sign In</p>
        </Link>
        <Link className="btn-light" to="/signup">
          <p>Sign Up</p>
        </Link>
      </div>
    </div>
  );
};
