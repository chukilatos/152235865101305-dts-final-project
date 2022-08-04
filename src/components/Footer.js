import React from "react"

const Footer = () => 
<div>

  <footer className="text-center text-lg-start" style={{backgroundColor: "#063970"}}>
    <div className="container d-flex justify-content-center py-5">
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
        <i className="fab fa-facebook-f"></i>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
        <i className="fab fa-youtube"></i>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
        <i className="fab fa-instagram"></i>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
        <i className="fab fa-twitter"></i>
      </button>
    </div>

    <div className="text-center text-white p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2022 Copyright:
      <p>Ade Ismail</p>
    </div>
  </footer>
  
</div>

export default Footer