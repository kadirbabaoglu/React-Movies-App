import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';


const MovieList = (props) => {
   
    return (

        <>
            {props.movies.map((e,index) => (
                <div className="col-sm-6 col-lg-3 mb-sm-0" key={index}>
                    <div className="card m-2">
                        <img src={e.imgUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{e.name}</h5>
                            <p className="card-text">{e.desc}</p>
                            <div className="d-flex justify-content-between">
                                <button type="button" onClick={() => props.deletelists(e.id)} className="btn btn-outline-danger btn-sm">Delete</button>
                                <h2><Badge bg="info">{e.rating}</Badge></h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </>
    );
}



export default MovieList;