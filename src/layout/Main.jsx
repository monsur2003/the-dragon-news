import React from "react";
import Header from "../pages/sharedpage/Header/Header";
import { Outlet } from "react-router-dom";
import Foter from "../pages/sharedpage/Foter/Foter";
import LeftNav from "../pages/sharedpage/LeftNav/LeftNav";
import RightNav from "../pages/sharedpage/RightNav/RightNav";
import { Col, Container, Row } from "react-bootstrap";

const Main = () => {
   return (
      <div>
         <Header></Header>
         <div className="mt-4 border-1 border-danger">
            <div className="">
               <Container>
                  <Row>
                     <Col lg={3}>
                        <LeftNav></LeftNav>
                     </Col>
                     <Col lg={6}>
                        <h2>Main section is coming.......</h2>
                     </Col>
                     <Col lg={3}>
                        <RightNav></RightNav>
                     </Col>
                  </Row>
               </Container>
            </div>
         </div>
         <Foter></Foter>
      </div>
   );
};

export default Main;
