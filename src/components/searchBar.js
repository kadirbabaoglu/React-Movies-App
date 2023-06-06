import React from "react";


//---------- import Bootstrap --------
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = () => {


  return (
    
      <div className="row">
        <div  className="mb-3 text-center">
        <h1>Movie Search APP</h1>
        <input type="text" className="form-control"  placeholder="Search Movie" />
      </div>
      </div>
    
  );
}


export default SearchBar;