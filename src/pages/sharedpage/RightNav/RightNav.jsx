import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
   FaFacebook,
   FaGithub,
   FaGoogle,
   FaInstagram,
   FaTwitter,
} from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg1 from "../../../assets/bg1.png";

const RightNav = () => {
   return (
      <div>
         <h4>Log in with</h4>
         <div>
            <Button className="mb-2 w-100" variant="outline-secondary">
               <FaGoogle className="mx-2" />
               Login with google
            </Button>
            <Button className="w-100" variant="outline-primary">
               <FaGithub className="mx-2" /> Log in with github
            </Button>
         </div>
         <div>
            <h4 className="my-3">Find us on</h4>
            <ListGroup>
               <ListGroup.Item className="fw-bold">
                  <FaFacebook className="text-primary mx-2"></FaFacebook>{" "}
                  Facebook
               </ListGroup.Item>
               <ListGroup.Item className="fw-bold">
                  <FaTwitter className="text-primary mx-2"></FaTwitter> Twitter
               </ListGroup.Item>
               <ListGroup.Item className="fw-bold">
                  <FaInstagram className="text-danger mx-2"></FaInstagram>{" "}
                  Instagram
               </ListGroup.Item>
            </ListGroup>
         </div>
         <div className="mt-4">
            <Qzone></Qzone>
         </div>
         <div className="position-relative my-3">
            <div>
               <img src={bg1} alt="" />
            </div>
            <div className="position-absolute top-50 start-50 translate-middle bg-titlee">
               <h3 className="text-center text-white ">
                  Create an Amazing Newspaper
               </h3>
               <p className="text-white mt-4">
                  Discover thousands of options, easy to customize layouts,
                  one-click to import demo and much more.
               </p>
               <div className="text-center">
                  <Button variant="danger">Learn More</Button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default RightNav;
