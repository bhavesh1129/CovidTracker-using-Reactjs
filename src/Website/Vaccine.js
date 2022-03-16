import React from "react";
import "./Vaccine.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Vaccine() {
  return (
    <div className="vaccine">
      <h2 className="vaccine__head text-uppercase">
        Available Vacc
        <img src="https://img.icons8.com/ios-filled/40/000000/thin-test-tube.png" />
        nes
      </h2>
      <div className="vaccine__banner"></div>

      <div className="container vaccine__cont">
        <img
          className="vaccine__img"
          src="https://image.freepik.com/free-vector/flat-vaccination-campaign-illustration_23-2148958754.jpg"
          height="250px"
          width="250px"
        />
        <h4 className="vaccine__text">
          <b>COVAXIN:</b> India's indigenous COVID-19 vaccine by Bharat Biotech
          is developed in collaboration with the Indian Council of Medical
          Research (ICMR) - National Institute of Virology (NIV). The vaccine is
          developed using Whole-Virion Inactivated Vero Cell derived platform
          technology. Inactivated vaccines do not replicate and are therefore
          unlikely to revert and cause pathological effects. They contain dead
          virus, incapable of infecting people but still able to instruct the
          immune system to mount a defensive reaction against an infection.
        </h4>
      </div>

      <div className="container vaccine__cont">
        <h4 className="vaccine__text">
          <b>SPUTNIK V:</b> The vaccine, developed by Moscow's Gamaleya
          Institute uses a cold-type virus, engineered to be harmless, as a
          carrier to deliver a small fragment of the coronavirus to the body.
          Safely exposing the body to a part of the virus's genetic code in this
          way allows it to recognise the threat and learn to fight it off,
          without the risk of becoming ill. After being vaccinated, the body
          starts to produce antibodies especially tailored to the coronavirus.
          This means that the immune system is primed to fight coronavirus when
          it encounters it for real.
        </h4>
        <img
          className="vaccine__img"
          src="https://image.freepik.com/free-vector/doctor-injecting-vaccine-patient_23-2148864527.jpg"
          height="250px"
          width="250px"
        />
      </div>
      <div className="container vaccine__cont">
        <img
          className="vaccine__img"
          src="https://img.freepik.com/free-vector/creative-coronavirus-vaccine-illustration_52683-57102.jpg?size=338&ext=jpg"
          height="250px"
          width="250px"
        />
        <h4 className="vaccine__text">
          <b>COVISHIELD:</b> The Oxford-AstraZeneca vaccine is being
          manufactured locally by the Serum Institute of India, the world's
          largest vaccine manufacturer. The vaccine is made from a weakened
          version of a common cold virus (known as an adenovirus) from
          chimpanzees. It has been modified to look more like coronavirus -
          although it can't cause illness.When the vaccine is injected into a
          patient, it prompts the immune system to start making antibodies and
          primes it to attack any coronavirus infection. The jab is administered
          in two doses given between four and 12 weeks apart. It can be safely
          stored at temperatures of 2C to 8C and can easily be delivered in
          existing health care settings such as doctors' surgeries.
        </h4>
      </div>

      <div className="container vaccine__cont">
        <h4 className="vaccine__text">
          <b>Pfizer-BioNTech:</b> The BioNTech technology for the vaccine is
          based on use of nucleoside-modified mRNA (modRNA) which encodes a
          mutated form of the full-length spike protein found on the surface of
          the SARS-CoV-2 virus, triggering an immune response against infection
          by the virus protein. <br /> The vaccine was the first COVID-19
          vaccine to be authorized by a stringent regulatory authority for
          emergency use and the first cleared for regular use.
        </h4>
        <img
          className="vaccine__img"
          src="https://image.freepik.com/free-vector/flat-vaccination-campaign-illustration_23-2148958753.jpg"
          height="250px"
          width="250px"
        />
      </div>
    </div>
  );
}

export default Vaccine;
