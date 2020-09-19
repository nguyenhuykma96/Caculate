import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Box } from "@xstyled/styled-components";

const NavbarComponent = () => {
  return (
    <Box mb={1}>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <Box height="100px" width="100px">
            <img
              width="100%"
              alt="logo"
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/118940889_322673785481551_4139333777828955343_n.png?_nc_cat=102&_nc_sid=b96e70&_nc_ohc=wuaDnQ5-iQ8AX-8w7zY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=efdead943fe6619a31cca625d985bdbd&oe=5F7D7C4C"
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
      </Navbar>
    </Box>
  );
};

export default NavbarComponent;
