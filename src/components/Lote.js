import React from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const Lote = (props) => {
  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form>
          <div className="form-group">
            <label htmlFor="precio">Toros</label>
            <label htmlFor="precio">Ubicación: Montevideo</label>
            <label htmlFor="precio">OFERTAS EN U$S</label>
            <label htmlFor="precio">Su oferta: (12 cuotas)</label>
            <Input type="number" className="form-control" name="precio" />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block">
              <span>Iniciar sesión para ofertar</span>
            </button>
          </div>

          <CheckButton style={{ display: "none" }} />
        </Form>
      </div>
    </div>
  );
};

export default Lote;
