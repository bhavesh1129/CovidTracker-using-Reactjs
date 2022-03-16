import React from "react";
import "./Symptons.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Symptons() {
  return (
    <div className="symptoms">
      <h2 className="symptons__head">
        C
        <img
          src="https://img.icons8.com/metro/40/26e07f/virus.png"
          alt="virus"
        />
        VID-19 SYMPTOMS
      </h2>

      <div className="container sym_right">
        <div className="row symptons__img">
          <div className="col-sm">
            <img className="sym-img" src="./aa.jpg" />
            <h4 className="symptons__name text-center text-uppercase">
              Nausea
            </h4>
          </div>
          <div className="col-sm">
            <img className="sym-img" src="./bb.jpg" />
            <h4 className="symptons__name text-center text-uppercase">Cough</h4>
          </div>
          <div className="col-sm">
            <img className="sym-img" src="./cc.jpg" />
            <h4 className="symptons__name text-center text-uppercase">
              Headache
            </h4>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row symptons__img">
          <div className="col-sm">
            <img className="sym-img" src="./dd.jpg" />
            <h4 className="symptons__name text-center text-uppercase">Fever</h4>
          </div>
          <div className="col-sm">
            <img className="sym-img" src="./ee.jpg" />
            <h4 className="symptons__name text-center text-uppercase">
              Short Breath
            </h4>
          </div>
          <div className="col-sm">
            <img className="sym-img" src="./ff.jpg" />
            <h4 className="symptons__name text-center text-uppercase">
              Sore Throat
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Symptons;
