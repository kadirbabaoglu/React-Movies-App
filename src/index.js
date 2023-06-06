import React from 'react';
import ReactDOM from "react-dom/client";


//---------- Boostrap -------------
import 'bootstrap/dist/css/bootstrap.min.css';


//--------- Components İmport ----------
import App from './components/app.js';


//--------- App Renderer ----------

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);