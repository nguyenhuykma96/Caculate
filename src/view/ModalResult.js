import React from "react";
import {
  Card,
  ProgressBar,
  Container,
  Row,
  Col,
  Button,
  Form,
  Modal
} from "react-bootstrap";
import { fadeInDown } from "react-animations";
import styled, { keyframes } from "styled-components";
import { Box } from "@xstyled/styled-components";
import themes from "./../commons/variables";
import { formatterMoney, formatter } from "../commons/function";
import { CardCustom } from "../components";

export default function Result({ showModal, onHide, ...other }) {
  const [open, setOpen] = React.useState(false);
  const [openContact, setOpenContact] = React.useState(false);
  const [openTrial, setOpenTrial] = React.useState(false);

  const bounceAnimation = keyframes`${fadeInDown}`;
  const AnimateBox = styled(Box)`
    animation: 1s ${bounceAnimation};
  `;

  React.useEffect(() => {}, []);

  const showEmail = () => {
    setOpen(true);
  };

  const showTrial = () => {
    setOpenTrial(true);
  };

  const showContactUs = () => {
    setOpenContact(true);
  };

  const renderCardEmail = React.useMemo(
    () => (
      <AnimateBox display={open ? "block" : "none"} mb={3}>
        <Card>
          <Card.Body>
            <Form noValidate onSubmit>
              <Box
                flex={1}
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box flex={{ xs: 1, md: 0.7 }}>
                  <Form.Row>
                    <Form.Group as={Col} md="12" controlId="validationFormik04">
                      <Form.Label>Email của bạn để nhận kết quả:</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        name="email"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Group>
                    <Form.Check
                      required
                      name="terms"
                      label="Bạn có cùng chúng tôi thảo luận sâu hơn về những vấn đề trong doanh nghiệp mình"
                      id="validationFormik0"
                    />
                  </Form.Group>
                </Box>
                <Box />
                <Box
                  flex={{ xs: 1, md: 0.2 }}
                  minWidth={"120px"}
                  mb={{ xs: 3, md: 0 }}
                >
                  <Button
                    type="submit"
                    block
                    style={{
                      backgroundColor: themes.colors.orange,
                      border: "none",
                      height: "48px"
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
              <Box>
                <Box fontWeight="bold" mb={2}>
                  Privacy Policy
                </Box>
                <Box textAlign="justify">
                  We value your privacy. We will never give, lease, sell or
                  otherwise disclose your personal information. Any information
                  you give to Chatwork will be held with the utmost care
                </Box>
              </Box>
            </Form>
          </Card.Body>
        </Card>
      </AnimateBox>
    ),
    [open]
  );

  const renderCardContact = React.useMemo(
    () => (
      <AnimateBox mb={3} display={openContact ? "block" : "none"}>
        <Card>
          <Card.Body>
            <Box textAlign="center" mb={3}>
              <Box fontSize={5} fontWeight={500} mb={2}>
                CONTACT US
              </Box>
              <Box>
                Vui lòng cung cấp thông tin để chúng tôi có thể hỗ trợ bạn được
                nhanh nhất
              </Box>
            </Box>

            <Form noValidate onSubmit>
              <Box
                flex={1}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationFormik01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" name="firstName" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationFormik02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" name="lastName" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationFormik02">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationFormik02">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" name="phone" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationFormik02">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" name="message" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Box>
                    <Box fontWeight="bold" mb={2}>
                      Privacy Policy
                    </Box>
                    <Box textAlign="justify">
                      We value your privacy. We will never give, lease, sell or
                      otherwise disclose your personal information. Any
                      information you give to Chatwork will be held with the
                      utmost care
                    </Box>
                  </Box>
                </Form.Row>
                <Box margin="auto" minWidth={"120px"} mt={3}>
                  <Button
                    type="submit"
                    block
                    style={{
                      backgroundColor: themes.colors.orange,
                      border: "none",
                      height: "48px"
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Form>
          </Card.Body>
        </Card>
      </AnimateBox>
    ),
    [openContact]
  );

  const renderCardTrial = React.useMemo(
    () => (
      <AnimateBox mb={3} display={openTrial ? "block" : "none"}>
        <Card>
          <Card.Body>
            <Box textAlign="center" mb={3}>
              <Box fontSize={5} fontWeight={500} mb={2}>
                TRẢI NGHIỆM DÙNG THỬ CHATWORK ENTERPRISE
              </Box>
              <Box>Hỗ trợ doanh nghiệp xây dựng nền tảng giao tiếp số</Box>
              <Box>Hiện đại - Năng suất - Minh bạch</Box>
            </Box>

            <Form noValidate onSubmit>
              <Box
                flex={1}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationFormik01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" name="firstName" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationFormik02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" name="lastName" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationFormik02">
                    <Form.Label>Business Email</Form.Label>
                    <Form.Control type="email" name="email" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationFormik02">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" name="phone" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationFormik02">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" name="message" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationFormik02">
                    <Form.Label>Job Titile</Form.Label>
                    <Form.Control type="text" name="message" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationFormik02">
                    <Form.Label>Any Questions?</Form.Label>
                    <Form.Control type="text" name="message" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Box>
                    <Box fontWeight="bold" mb={2}>
                      Privacy Policy
                    </Box>
                    <Box textAlign="justify">
                      We value your privacy. We will never give, lease, sell or
                      otherwise disclose your personal information. Any
                      information you give to Chatwork will be held with the
                      utmost care
                    </Box>
                  </Box>
                </Form.Row>
                <Box margin="auto" minWidth={"120px"} mt={3}>
                  <Button
                    type="submit"
                    block
                    style={{
                      backgroundColor: themes.colors.orange,
                      border: "none",
                      height: "48px"
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Form>
          </Card.Body>
        </Card>
      </AnimateBox>
    ),
    [openTrial]
  );

  return (
    <Modal show={showModal} onHide={onHide} size="xl" centered>
      <Modal.Header
        closeButton
        style={{ backgroundColor: themes.colors.orange, color: "#fff" }}
      >
        <Modal.Title>RESULTS</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={12}>
              <CardCustom>
                <Card>
                  <Card.Body>
                    <Box fontSize={3} mb={2}>
                      Tổng chi phí khi sử dụng nền tảng giao tiếp thông thường
                    </Box>
                    <Box fontSize={6} fontWeight="bold" mb={2}>
                      {formatter.format(100000000)}
                      <Box as="span" ml={1}>
                        VND
                      </Box>
                    </Box>
                    <ProgressBar now={100} animated variant="warning" />
                  </Card.Body>
                </Card>
              </CardCustom>
              <Box mb={3}>
                <CardCustom>
                  <Card>
                    <Card.Body>
                      <Box fontSize={3} mb={2}>
                        Tổng chi phí tiết kiệm được khi sử dụng nền tảng giao
                        tiếp Chatwork
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box fontSize={6} fontWeight="bold" mb={2}>
                          {formatter.format(100000000)}
                          <Box as="span" ml={1}>
                            VND
                          </Box>
                        </Box>
                        <Box
                          as="a"
                          color={themes.colors.orange}
                          fontWeight={500}
                          onClick={showEmail}
                        >
                          Email my results
                        </Box>
                      </Box>
                      <ProgressBar now={100} animated variant="warning" />
                      <Box my={3}>
                        <Box
                          display="flex"
                          fontSize={4}
                          mb={3}
                          flex={1}
                          width={0.75}
                          mx="auto"
                        >
                          <Box
                            flex={0.5}
                            display="inline-block"
                            textAlign="right"
                          >
                            Chi phí tiết kiệm được cho năng suất bị gián đoạn:
                          </Box>
                          <Box width="30px" />

                          <Box flex={0.5} fontWeight="bold" fontSize={5}>
                            {formatter.format(50000000)}
                            <Box as="span" ml={1}>
                              VND
                            </Box>
                          </Box>
                        </Box>

                        <Box
                          display="flex"
                          fontSize={4}
                          mb={3}
                          flex={1}
                          width={0.75}
                          mx="auto"
                        >
                          <Box
                            flex={0.5}
                            display="inline-block"
                            textAlign="right"
                          >
                            Chi phí tiết kiệm được cho các cuộc họp không hiệu
                            quả:
                          </Box>
                          <Box width="30px" />
                          <Box flex={0.5} fontWeight="bold" fontSize={5}>
                            {formatter.format(50000000)}
                            <Box as="span" ml={1}>
                              VND
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box textAlign="center" mb={3} fontSize={5}>
                        Trải nghiệm Chatwork Entẻprise Ngay!
                      </Box>
                      <Box display="flex" justifyContent="center">
                        <Box width={{ sm: "auto", md: "150px" }}>
                          <Button
                            block
                            style={{
                              backgroundColor: themes.colors.orange,
                              border: "none",
                              height: "48px"
                            }}
                            onClick={showTrial}
                          >
                            TRIAL
                          </Button>
                        </Box>
                        <Box mr={2} />
                        <Box width={{ sm: "auto", md: "150px" }}>
                          <Button
                            block
                            style={{
                              backgroundColor: "transparent",
                              border: "1px solid ",
                              height: "48px",
                              color: themes.colors.orange
                            }}
                            onClick={showContactUs}
                          >
                            CONTACT US
                          </Button>
                        </Box>
                      </Box>
                    </Card.Body>
                  </Card>
                </CardCustom>
              </Box>
              {renderCardEmail}
              {renderCardContact}
              {renderCardTrial}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
