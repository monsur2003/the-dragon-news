import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import "./Header.css";

import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Qzone from "../Qzone/Qzone";

const Header = () => {
   return (
      <Container>
         <div className="text-center">
            <img src={logo} alt="" />
            <p className="text-secondary">
               <small>Journalism Without Fear or Favour</small>
            </p>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
         </div>
         <div className="d-flex row-gap-4 header-title">
            <Button variant="danger">latest</Button>
            <Marquee className="text-success fs-4" speed={80}>
               I can be a React component, multiple React components, or just
               some text. Lorem ipsum, dolor sit amet consectetur adipisicing
               elit. Porro eius qui nulla natus mollitia cumque autem debitis
               accusamus magnam inventore?
            </Marquee>
         </div>
         <div className="mt-2">
            <Navbar collapseOnSelect expand="lg">
               <Container>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="mx-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                     </Nav>
                     <Nav>
                        <Nav.Link href="#deets">Profile</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                           <Button variant="secondary">Log in</Button>
                        </Nav.Link>
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
         </div>
      </Container>
   );
};

export default Header;
