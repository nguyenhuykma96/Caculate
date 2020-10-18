import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Box } from "@xstyled/styled-components";
import styled from 'styled-components';

const StyleHeader = styled(Navbar)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;

const NavbarComponent = () => {
  return (
      <StyleHeader bg="light" expand="lg">
        <Navbar.Brand href="/">
          <Box height="100px" width="100px">
            <img
              width="100%"
              alt="logo"
              src="/images/logo.png"
            />
          </Box>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" d-block text-center m-auto">
            <Box fontSize={6} py={3} fontWeight={500}>
              BẢNG TÍNH CHỈ SỐ RETURN ON INVESTMENT (ROI) <br></br> TRONG GIAO
              TIẾP NỘI BỘ CÔNG TY (INTERNAL COMMUNICATION)
            </Box>
          </Nav>
        </Navbar.Collapse>
      </StyleHeader>
  );
};

export default NavbarComponent;
