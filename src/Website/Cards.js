import React from "react";
import "./Cards.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Cards() {
  return (
    <div className="prevent__cards">
      <h2 className="prevent__cards__head text-uppercase">
        How to prevent the spread?
      </h2>
      <div className="prevent__banner"></div>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div class="card border-0">
              <img
                src="https://img.freepik.com/free-vector/woman-using-hand-sanitizer_311359-28.jpg?size=338&ext=jpg"
                class="card-img-top"
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Sanitize Your Hands</h5>
                <p class="card-text text-center">
                  Sanitize your hands regularly, especially after touching various surfaces and material.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div class="card border-0">
              <img
                src="https://image.freepik.com/free-vector/social-distancing-supermarket-with-two-customers-masks-cartoon-illustration_1284-54957.jpg"
                class="card-img-top"
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Maintain Distance</h5>
                <p class="card-text text-center">
                  Avoid Places That Are Crowded And Maintain Physical Distancing
                  Of At Least 6 Feet.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div class="card border-0">
              <img
                src="https://image.freepik.com/free-vector/touch-your-face-women-using-face-mask-outdoor-avoid-touching-your-face-coronavirus-covid19-prevention_24877-68758.jpg"
                class="card-img-top"
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Don't Touch Your Face</h5>
                <p class="card-text text-center">
                  Kindly Avoid Touching Your Face, Especially Your Eyes, <br />
                  Nose And Mouth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div class="card border-0">
              <img
                src="https://image.freepik.com/free-vector/human-hands-soap-foam_74855-14086.jpg"
                class="card-img-top"
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Wash Your Hands</h5>
                <p class="card-text text-center">
                  Clean your hands often. Use soap and water, or an
                  alcohol-based <br /> hand rub.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div class="card border-0">
              <img
                src="https://image.freepik.com/free-vector/sick-young-man-sneezing-into-handkerchief_274619-122.jpg"
                class="card-img-top"
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Protect Others</h5>
                <p class="card-text text-center">
                  Cover your nose and mouth with your bent elbow or a tissue
                  when you cough or sneeze.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div class="card border-0">
              <img
                src="https://image.freepik.com/free-vector/drawn-man-wearing-adjustable-face-mask_23-2148801317.jpg"
                class="card-img-top"
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Wear A Mask</h5>
                <p class="card-text text-center">
                  It Helps To Reduce The Risk Of Spread Both By Close Contact
                  And By Airborne Transmission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
