import React from "react";


//---------- import Bootstrap --------
import 'bootstrap/dist/css/bootstrap.min.css';



const SearchBar = (props) => {
  
  const CloseOnSubmit = (e) =>{
    e.preventDefault();
  }
  return (

    <form onSubmit={CloseOnSubmit}>
      <div className="row">
        <div className="mb-3 text-center">
          <h1>Movie Search APP</h1>
          <input onChange={props.searchMovies} type="text" className="form-control" placeholder="Search Movie" />
        </div>
      </div>
    </form>

  );
}


export default SearchBar;

