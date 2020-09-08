import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Box } from "@xstyled/styled-components";

const NavbarComponent = () => {
  return (
    <Box mb={5}>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Caculate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" d-block text-center m-auto">
            <h2>
              BẢNG TÍNH CHỈ SỐ RETURN ON INVESTMENT (ROI) <br></br> TRONG GIAO
              TIẾP NỘI BỘ CÔNG TY (INTERNAL COMMUNICATION)
            </h2>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Box>
  );
};

export default NavbarComponent;
