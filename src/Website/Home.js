import React from "react";
import "./Home.css";
import Prevent from "./Cards";
import Symptons from "./Symptons";
import Vaccine from "./Vaccine";
import Footer from "./Footer";
// import WearMask from "./WearMask";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "../Main";
import { Link, Route, BrowserRouter } from "react-router-dom";

class Home extends React.Component{
  onSubmit = () => {
    this.props.history.push("/main");
  };
  render(){

  return (
    <>
      <div className="home">
        <div className="home__nav">
          <Navbar
            fixed="top"
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
          >
            <Navbar.Brand href="#home">
              C
              <img
                src="https://img.icons8.com/metro/26/26e07f/virus.png"
                alt="virus"
              />
              vid-19
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>

              <Nav variant="pills" defaultActiveKey="#Homes">
                <Nav.Item>
                  <Nav.Link href="#Homes">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#Symptonss">Symptoms</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#Prevents">Preventions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#Vaccines">Vaccines</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link href="#Wear_Mask">Wash Hands</Nav.Link>
                </Nav.Item> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div className="home" id="Homes">
          <div className="home__img img-fluid">
            <h1 className="home__img__h1">#CoronaSeDaroNa</h1>
            <h2 className="home__img__h2">Stay Home, Stay Safe</h2>
            <BrowserRouter>
              <Button
                className="home__img__button"
                size="lg"
                variant="dark font-weight-bold"
                type="submit"
                onSubmit={this.onSubmit}
              >
                <Link to="/main" style={{ textDecoration: 'none', color:'white' }}>Covid Tracker
                 <img src="https://img.icons8.com/material/24/ffffff/rfid-signal.png"/>
                 </Link>
              </Button>
              <Route path="/main" render={() => <Main />} />
            </BrowserRouter>
          </div>
        </div>

        <div className="symptons" id="Symptonss">
          <Symptons />
        </div>

        <div className="home__prevent" id="Prevents">
          <Prevent />
        </div>

        <div className="vaccine" id="Vaccines">
          <Vaccine />
        </div>

        {/* <div className="wearMask" id="Wear_Mask">
          <WearMask />
        </div> */}

        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );}
}

export default Home;