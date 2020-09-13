import React, { useState } from "react";
import { Accordion, Card, Button, Container, Row, Col } from "react-bootstrap";
import { ArrowClockwise, Question } from "react-bootstrap-icons";
import { Box } from "@xstyled/styled-components";
import themes from "../commons/variables";
import { CardCustom } from "../components";
import ModalResult from "./ModalResult";
import Slider from "rc-slider";
import styled from "styled-components";
import { formatter } from "../commons/function";

import { useAccordionToggle } from "react-bootstrap/AccordionToggle";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [totalEmployee, setTotalEmployee] = useState({
    min: 1,
    max: 100000,
    value: 10000
  });
  const [salary, setSalary] = useState({
    min: 5000000,
    max: 50000000,
    value: 10000000
  });
  const [email, setEmail] = useState({
    min: 1,
    max: 500,
    value: 100
  });
  const [b, setB] = useState({
    min: 1,
    max: 200,
    value: 100
  });
  const [c, setC] = useState({
    min: 1,
    max: 500,
    value: 100
  });
  const [d, setD] = useState({
    min: 0.5,
    max: 5,
    value: 1
  });
  const [e, setE] = useState({
    min: 10,
    max: 100,
    value: 50
  });
  const [a1, setA1] = useState({
    min: 0,
    max: 50,
    value: 10
  });
  const [b1, setB1] = useState({
    min: 0.25,
    max: 3,
    value: 0.5
  });
  const [c1, setC1] = useState({
    min: 2,
    max: 50,
    value: 10
  });

  const z = salary.value / 160;
  const caculateEmail =
    ((email.value * d.value * e.value * totalEmployee.value * z) / 60) * 1800;
  const caculateChat =
    ((b.value * d.value * e.value * totalEmployee.value * z) / 60) * 1800;
  const caculateMess =
    ((c.value * d.value * e.value * totalEmployee.value * z) / 60) * 1800;
  const totalCaculate = caculateEmail + caculateChat + caculateMess;
  const caculateCW = 50000 * 12 * totalEmployee.value;

  const caculateMeeting = a1.value * b1.value * c1.value * z * 48;
  const saveMoney = caculateMeeting * 0.5 - caculateCW;

  const StyleInput = styled(Box)`
    max-width: 100px;
    font-weight: bold;
    padding: 4px 4px;
    border: thin solid #e1e1e1;
    &:focus {
      outline: none;
    }
  `;

  const StyleButtonRestart = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    svg {
      font-weight: bold;
    }
  `;

  const WrapButtonTop = styled(Box)`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    cursor: pointer;
    &:hover {
      background-color: #e1e1e1;
      border-color: #e1e1e1;
      transition: 0.2s linear;
    }
  `;

  const [openText, setOpenText] = useState({
    isOpen: true,
    eventKey: 0
  });

  const handleResetValue = () => {
    setTotalEmployee({
      min: 1,
      max: 100000,
      value: 10000
    });
    setSalary({
      min: 5000000,
      max: 50000000,
      value: 10000000
    });
    setEmail({
      min: 1,
      max: 500,
      value: 100
    });
    setB({
      min: 1,
      max: 200,
      value: 100
    });
    setC({
      min: 1,
      max: 500,
      value: 100
    });
    setD({
      min: 0.5,
      max: 5,
      value: 1
    });
    setE({
      min: 10,
      max: 100,
      value: 50
    });
    setA1({
      min: 0,
      max: 50,
      value: 10
    });
    setB1({
      min: 0.25,
      max: 3,
      value: 0.5
    });
    setC1({
      min: 2,
      max: 50,
      value: 10
    });
  };

  function CustomToggle({ children, eventKey, callback }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () => {
      if (+eventKey === openText.eventKey) {
        setOpenText({
          eventKey: +eventKey,
          isOpen: !openText.isOpen
        });
      } else {
        setOpenText({
          eventKey: +eventKey,
          isOpen: true
        });
      }
    });

    return (
      <Accordion.Toggle
        as={Card.Header}
        eventKey={eventKey}
        onClick={decoratedOnClick}
      >
        <Box color={themes.colors.orange} fontSize={5}>
          {children}
        </Box>
      </Accordion.Toggle>
    );
  }

  return (
    <>
      <Container fluid="md">
        <Row style={{ margin: "0 auto", justifyContent: "center" }}>
          {/* Top Button */}
          <Col xl={10} md={10}>
            <Box
              display="flex"
              fontSize={5}
              color={themes.colors.orange}
              py={4}
            >
              <WrapButtonTop as="span" margin="auto" mr={2}>
                <StyleButtonRestart>
                  <Question />
                </StyleButtonRestart>
              </WrapButtonTop>
              <WrapButtonTop as="span" p={3} onClick={handleResetValue}>
                <StyleButtonRestart fontWeight="bold">
                  <ArrowClockwise />
                </StyleButtonRestart>
              </WrapButtonTop>
            </Box>
          </Col>

          <Col xl={10} md={10}>
            <Accordion defaultActiveKey="0">
              <Box position="relative">
                <CardCustom>
                  <Card>
                    <CustomToggle eventKey="0" callback>
                      THÔNG TIN CÔNG TY
                    </CustomToggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Box fontSize={5} fontWeight={500} mb={3}>
                          Bảng tính chi phí nhân sự (Employee Cost)
                        </Box>
                        <Box mb={5}>
                          <Box display="flex" alignItems="center" mb={3}>
                            <Box display="inline-block">
                              Số lượng nhân viên:{" "}
                            </Box>
                            <Box width="10px" />
                            <StyleInput
                              as="input"
                              type="number"
                              value={totalEmployee.value}
                              onChange={e =>
                                setTotalEmployee({
                                  ...totalEmployee,
                                  value: +e.target.value || totalEmployee.value
                                })
                              }
                            />
                          </Box>
                          <Box display="flex" alignItems="center">
                            <Box
                              className="mr-2"
                              minWidth="100px"
                              textAlign="right"
                            >
                              1
                            </Box>
                            <Slider
                              value={totalEmployee.value}
                              min={totalEmployee.min}
                              max={totalEmployee.max}
                              onChange={value =>
                                setTotalEmployee({ ...totalEmployee, value })
                              }
                              handleStyle={{
                                backgroundColor: themes.colors.orange,
                                border: 0
                              }}
                              trackStyle={{
                                background: themes.colors.orange
                              }}
                              railStyle={{
                                backgroundColor: themes.colors.border
                              }}
                            />
                            <Box className="ml-2" minWidth="100px">
                              {formatter.format(100000)}
                            </Box>
                          </Box>
                        </Box>
                        <Box mb={5}>
                          <Box display="flex" alignItems="center" mb={3}>
                            <Box display="inline-block">
                              Mức lương trung bình hằng tháng:
                            </Box>
                            <Box width="10px" />

                            <StyleInput
                              as="input"
                              type="number"
                              value={salary.value}
                              onChange={e =>
                                setSalary({
                                  ...salary,
                                  value: +e.target.value || salary.value
                                })
                              }
                              maxWidth="120px"
                            />
                            <Box as="span" ml={1}>
                              VND
                            </Box>
                          </Box>
                          <div className="d-flex align-items-center">
                            <Box
                              as="span"
                              className="mr-2"
                              textAlign="right"
                              minWidth="100px"
                            >
                              {formatter.format(5000000)}
                            </Box>
                            <Slider
                              value={salary.value}
                              min={salary.min}
                              max={salary.max}
                              step={500000}
                              onChange={value =>
                                setSalary({ ...salary, value })
                              }
                              handleStyle={{
                                backgroundColor: themes.colors.orange,
                                border: 0
                              }}
                              trackStyle={{
                                background: themes.colors.orange
                              }}
                              railStyle={{
                                backgroundColor: themes.colors.border
                              }}
                            />
                            <Box as="span" ml={2} minWidth="100px">
                              {formatter.format(50000000)}
                            </Box>
                          </div>
                        </Box>
                        <Box display="flex" fontSize={4}>
                          <label className="d-inline-block">
                            Tiền công trung bình mỗi giờ:
                          </label>
                          <Box width="10px"></Box>
                          <Box fontWeight="bold">
                            {formatter.format(z)} <span>VND/h</span>{" "}
                          </Box>
                        </Box>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </CardCustom>

                <CardCustom
                  backgroundColor="#FAFAFA"
                  position="absolute"
                  top={0}
                  left="102%"
                  // width={{ xl: "220px", lg: "210px", md: "200px" }}
                  width="230px"
                  maxWidth={{ xl: "25%", lg: "100%", md: "100%" }}
                  py={3}
                  px={2}
                  opacity={openText.isOpen && openText.eventKey === 0 ? 1 : 0}
                >
                  <Box>
                    <Box color={themes.colors.orange} fontSize={3}>
                      Tiền công trung bình mỗi giờ:
                    </Box>
                    <Box fontSize={2}>
                      Dựa trên trung bình mỗi tuần làm việc{" "}
                      <Box as="span" fontWeight="bold">
                        40h
                      </Box>{" "}
                      và{" "}
                      <Box as="span" fontWeight="bold">
                        4
                      </Box>{" "}
                      tuần/tháng
                    </Box>
                  </Box>
                </CardCustom>
              </Box>

              <Box position="relative">
                <CardCustom>
                  <Card>
                    <CustomToggle eventKey="1">
                      CHI PHÍ CHO VẤN ĐỀ NĂNG SUẤT BỊ GIÁN ĐOẠN VÌ GIAO TIẾP
                    </CustomToggle>

                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <Box fontSize={5} fontWeight={500} mb={3}>
                          THÔNG TIN CÔNG TY
                        </Box>
                        <Box mb={3}>
                          <Box
                            as="ol"
                            fontSize={3}
                            style={{ listStyleType: "upper-roman" }}
                          >
                            <Box as="li">
                              <p>
                                Dùng các công cụ giao tiếp đồng bộ như Facebook,
                                Zalo, Line,... Tính năng hiển thị trạng thái
                                "Online" hoặc "Đã xem" khiến bạn cảm thấy áp lực
                                phải trả lời hoặc mong muốn đối phương trả lời.
                              </p>
                            </Box>
                            <Box as="li">
                              <p>
                                Có nhiều thông tin phải "lướt" lại nhóm chat rất
                                lâu để tìm và đọc lại.
                              </p>
                            </Box>
                            <Box as="li">
                              <p>
                                Có nhiều thông tin phải "lướt" lại nhóm chat rất
                                lâu để tìm và đọc lại.
                              </p>
                            </Box>
                          </Box>
                          <Box>
                            Những điều này sẽ lấy đi sự tập trung của bạn, làm
                            giảm năng suất làm việc hoặc quá tải giao tiếp do
                            phải tạm dừng công việc để trả lời tin nhắn, lướt
                            lại nhóm chat hoặc kiểm tra email.
                          </Box>
                          <Box>
                            Ở đây, chúng tôi tính toán chi phí gián đoạn không
                            cần thiết của công ty mỗi năm.
                          </Box>
                        </Box>

                        <Box mb={5}>
                          <Box display="flex" alignItems="center" mb={3}>
                            <Box display="inline-block">
                              Số lượng trung bình những emails tin tức (news &
                              admin) gửi cho nhân viên mỗi ngày:
                            </Box>
                            <Box width="10px" />
                            <StyleInput
                              as="input"
                              type="number"
                              value={email.value}
                              onChange={e =>
                                setEmail({
                                  ...email,
                                  value: +e.target.value || email.value
                                })
                              }
                              maxWidth="75px"
                            />
                          </Box>
                          <Box className="d-flex align-items-center">
                            <Box
                              className="mr-2"
                              minWidth="100px"
                              textAlign="right"
                            >
                              1 email
                            </Box>
                            <Slider
                              value={email.value}
                              min={email.min}
                              max={email.max}
                              onChange={value => setEmail({ ...email, value })}
                              handleStyle={{
                                backgroundColor: themes.colors.orange,
                                border: 0
                              }}
                              trackStyle={{
                                background: themes.colors.orange
                              }}
                              railStyle={{
                                backgroundColor: themes.colors.border
                              }}
                            />
                            <Box className="ml-2" minWidth="100px">
                              500 emails
                            </Box>
                          </Box>
                        </Box>

                        <Box mb={5}>
                          <Box display="flex" alignItems="center" mb={3}>
                            <Box className="d-inline-block">
                              Số lượt trung bình nhân viên phải lướt group chat
                              để tìm lại thông tin đã lâu (trôi tin) mỗi ngày:
                            </Box>
                            <Box width="10px"></Box>
                            <StyleInput
                              as="input"
                              type="number"
                              value={b.value}
                              onChange={e =>
                                setB({
                                  ...b,
                                  value: +e.target.value || b.value
                                })
                              }
                              maxWidth="75px"
                            />
                          </Box>
                          <Box className="d-flex align-items-center">
                            <Box minWidth="100px" textAlign="right" mr={2}>
                              1 lượt
                            </Box>
                            <Slider
                              value={b.value}
                              min={b.min}
                              max={b.max}
                              onChange={value => setB({ ...b, value })}
                              handleStyle={{
                                backgroundColor: themes.colors.orange,
                                border: 0
                              }}
                              trackStyle={{
                                background: themes.colors.orange
                              }}
                              railStyle={{
                                backgroundColor: themes.colors.border
                              }}
                            />
                            <Box ml={2} minWidth="100px">
                              200 lượt
                            </Box>
                          </Box>
                        </Box>

                        <Box mb={5}>
                          <Box display="flex" alignItems="center" mb={3}>
                            <Box className="d-inline-block">
                              Số lượt trung bình nhân viên kiểm tra tin nhắn "Đã
                              xem" được trả lời hay chưa mỗi ngày:
                            </Box>
                            <Box width="10px"></Box>

                            <StyleInput
                              as="input"
                              type="number"
                              value={c.value}
                              onChange={e =>
                                setC({
                                  ...c,
                                  value: +e.target.value || c.value
                                })
                              }
                              maxWidth="75px"
                            />
                          </Box>
                          <Box display="flex" alignItems="center">
                            <Box mr={2} minWidth="100px" textAlign="right">
                              1 lượt
                            </Box>
                            <Slider
                              value={c.value}
                              min={c.min}
                              max={c.max}
                              onChange={value => setC({ ...c, value })}
                              handleStyle={{
                                backgroundColor: themes.colors.orange,
                                border: 0
                              }}
                              trackStyle={{
                                background: themes.colors.orange
                              }}
                              railStyle={{
                                backgroundColor: themes.colors.border
                              }}
                            />
                            <Box ml={2} minWidth="100px">
                              500 lượt
                            </Box>
                          </Box>
                        </Box>
                        <Box mb={5}>
                          <Box display="flex" alignItems="center" mb={3}>
                            <Box display="inline-block">
                              Thời gian trung bình "khôi phục trạng thái làm
                              việc" sau mỗi lần bị gián đoạn bởi emails/ tìm
                              tin/ check xem đối phương trả lời hay chưa:
                            </Box>
                            <Box width="10px" />
                            <StyleInput
                              as="input"
                              type="number"
                              value={d.value}
                              onChange={e =>
                                setD({
                                  ...d,
                                  value: +e.target.value || d.value
                                })
                              }
                              maxWidth="75px"
                            />
                          </Box>
                          <Box display="flex" alignItems="center">
                            <Box mr={2} minWidth="100px" textAlign="right">
                              0.5 phút
                            </Box>
                            <Slider
                              value={d.value}
                              min={d.min}
                              max={d.max}
                              step={0.1}
                              onChange={value => setD({ ...d, value })}
                              handleStyle={{
                                backgroundColor: themes.colors.orange,
                                border: 0
                              }}
                              trackStyle={{
                                background: themes.colors.orange
                              }}
                              railStyle={{
                                backgroundColor: themes.colors.border
                              }}
                            />
                            <Box ml={2} minWidth="100px">
                              5 phút
                            </Box>
                          </Box>
                        </Box>
                        <Box mb={5}>
                          <Box display="flex" alignItems="center" mb={3}>
                            <Box className="d-inline-block">
                              Tỉ lệ % nhân viên bị "phân tâm" bởi những vấn đề
                              trên:
                            </Box>
                            <Box width="10px" />

                            <StyleInput
                              as="input"
                              type="number"
                              value={e.value}
                              onChange={event =>
                                setE({
                                  ...e,
                                  value: +event.target.value || e.value
                                })
                              }
                              maxWidth="75px"
                            />
                          </Box>
                          <Box className="d-flex align-items-center">
                            <Box
                              className="mr-2"
                              minWidth="100px"
                              textAlign="right"
                            >
                              10%
                            </Box>
                            <Slider
                              value={e.value}
                              min={e.min}
                              max={e.max}
                              step={1}
                              onChange={value => setE({ ...e, value })}
                              handleStyle={{
                                backgroundColor: themes.colors.orange,
                                border: 0
                              }}
                              trackStyle={{
                                background: themes.colors.orange
                              }}
                              railStyle={{
                                backgroundColor: themes.colors.border
                              }}
                            />
                            <Box className="ml-2" minWidth="100px">
                              100%
                            </Box>
                          </Box>

                          <Box mt={5}>
                            <Box
                              display="flex"
                              fontSize={4}
                              mb={3}
                              flex={1}
                              width={0.8}
                              mx="auto"
                            >
                              <Box
                                flex={0.5}
                                display="inline-block"
                                textAlign="right"
                              >
                                Chi phí gián đoạn bởi email không cần thiết mỗi
                                năm:
                              </Box>
                              <Box width="30px" />
                              <Box
                                display="flex"
                                fontSize={5}
                                flex={0.5}
                                fontWeight="bold"
                              >
                                {formatter.format(caculateEmail)}
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
                              width={0.8}
                              mx="auto"
                            >
                              <Box
                                flex={0.5}
                                display="inline-block"
                                textAlign="right"
                              >
                                Chi phí gián đoạn bởi lướt group chat tìm tin
                                nhắn mỗi năm:
                              </Box>
                              <Box width="30px" />
                              <Box
                                flex={0.5}
                                fontWeight="bold"
                                display="flex"
                                fontSize={5}
                              >
                                {formatter.format(caculateChat)}
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
                              width={0.8}
                              mx="auto"
                            >
                              <Box
                                flex={0.5}
                                display="inline-block"
                                textAlign="right"
                              >
                                Chi phí gián đoạn bởi check tin nhắn "Đã xem"
                                mỗi năm:
                              </Box>
                              <Box width="30px" />
                              <Box
                                flex={0.5}
                                fontWeight="bold"
                                display="flex"
                                fontSize={5}
                              >
                                {formatter.format(caculateMess)}
                                <Box as="span" ml={1}>
                                  VND
                                </Box>
                              </Box>
                            </Box>

                            <Box
                              display="flex"
                              fontSize={4}
                              flex={1}
                              width={0.8}
                              mx="auto"
                            >
                              <Box
                                flex={0.5}
                                display="inline-block"
                                textAlign="right"
                              >
                                Tổng Chi phí gián đoạn mỗi năm :
                              </Box>
                              <Box width="30px" />
                              <Box
                                flex={0.5}
                                fontWeight="bold"
                                display="flex"
                                alignItems="flex-start"
                                fontSize={5}
                                color="#81C136"
                              >
                                {formatter.format(totalCaculate)}
                                <Box as="span" ml={1}>
                                  VND
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              textAlign="center"
                              fontWeight="bold"
                              width={0.8}
                              mx="auto"
                              color={themes.colors.orange}
                              fontStyle="italic"
                              my={4}
                            >
                              Giảm 70% thời gian gián đoạn bằng tính năng Screen
                              Alert và Chat không đồng bộ khi đầu tư hệ thống
                              giao tiếp nội bộ chuyên nghiệp với Chatwork{" "}
                            </Box>

                            <Box>
                              <Box
                                display="flex"
                                alignItem="flex-end"
                                fontSize={4}
                                mb={3}
                                flex={1}
                                width={0.8}
                                mx="auto"
                              >
                                <Box
                                  flex={0.5}
                                  display="inline-block"
                                  textAlign="right"
                                >
                                  Chi phí đầu tư CW:
                                </Box>
                                <Box width="30px" />
                                <Box
                                  flex={0.5}
                                  fontWeight="bold"
                                  display="flex"
                                  fontSize={5}
                                >
                                  {formatter.format(caculateCW)}
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
                                width={0.8}
                                mx="auto"
                              >
                                <Box
                                  flex={0.5}
                                  display="inline-block"
                                  textAlign="right"
                                >
                                  Chi phí tiết kiệm được :
                                </Box>
                                <Box width="30px" />
                                <Box
                                  flex={0.5}
                                  fontWeight="bold"
                                  display="flex"
                                  fontSize={5}
                                >
                                  {formatter.format(saveMoney)}
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
                                width={0.8}
                                mx="auto"
                              >
                                <Box
                                  flex={0.5}
                                  display="inline-block"
                                  textAlign="right"
                                >
                                  ROI:
                                </Box>
                                <Box width="30px" />
                                <Box
                                  fontWeight="bold"
                                  display="flex"
                                  flex={0.5}
                                  fontSize={5}
                                  color="#81C136"
                                >
                                  {formatter.format(saveMoney / caculateCW)}

                                  {/* <Box as="span" ml={1}>
                                  VND
                                </Box> */}
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </CardCustom>

                <CardCustom
                  backgroundColor="#FAFAFA"
                  position="absolute"
                  top={0}
                  left="102%"
                  // width={{ xl: "220px", lg: "210px", md: "200px" }}
                  width="230px"
                  maxWidth={{ xl: "25%", lg: "100%", md: "100%" }}
                  py={3}
                  px={2}
                  opacity={openText.isOpen && openText.eventKey === 1 ? 1 : 0}
                  transition="opacity 0.5s"
                  css={`
                    transition-delay: 1s;
                  `}
                >
                  <Box>
                    <Box fontSize={2}>
                      <Box>
                        <Box as="span" fontWeight="bold">
                          Thời gian khôi phục "gián đoạn":
                        </Box>
                        Nghiên cứu cho thấy rằng nhân viên sẽ mất trung bình 64
                        giây để trở lại làm việc bình thường như trước khi họ bị
                        gián đoạn bởi notification hay email.
                      </Box>
                      <Box>
                        <Box as="span" fontWeight="bold">
                          Tỷ lệ phân tâm:
                        </Box>
                        Nghiên cứu cho thấy rằng 70% nhân viên sẽ xem/phản hồi
                        các tin nhắn trong trung bình 64 giây cho dù chúng có
                        quan trọng hay không. Họ bị phân tâm khỏi việc mình đang
                        làm.
                      </Box>
                      <Box>
                        <Box as="span" fontWeight="bold">
                          Tổng chi phí gián đoạn mỗi năm:
                        </Box>
                        Đây là chi phí mà những tác nhân gián đoạn gây ra như
                        kiểm tra emails, lướt group chat tìm tin, kiểm tra tin
                        nhắn để phản hồi
                      </Box>
                    </Box>
                  </Box>
                </CardCustom>
              </Box>

              <Box position="relative">
                <CardCustom>
                  <Card>
                    <CustomToggle eventKey="2">
                      CHI PHÍ CHO VẤN ĐỀ TỔ CHỨC HỌP KHÔNG HIỆU QUẢ
                    </CustomToggle>

                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <Box mb={3}>
                          Nhiều tổ chức đang gặp vấn đề lãng phí quá nhiều thời
                          gian cho các cuộc họp cập nhật chung. Đây là một chi
                          phí năng suất khác mà tổ chức của bạn có thể tránh
                          được nếu có hệ thống giao tiếp nội bộ tốt hơn được áp
                          dụng.
                        </Box>

                        <Box mb={5}>
                          <Box display="flex" alignItems="center" mb={3}>
                            <Box display="inline-block">
                              Tổng số cuộc họp được tổ chức hằng tuần:{" "}
                            </Box>
                            <Box width="10px" />

                            <StyleInput
                              as="input"
                              type="number"
                              value={a1.value}
                              onChange={e =>
                                setA1({
                                  ...a1,
                                  value: +e.target.value || a1.value
                                })
                              }
                              maxWidth="75px"
                            />
                          </Box>
                          <Box className="d-flex align-items-center">
                            <Box
                              className="mr-2"
                              minWidth="100px"
                              textAlign="right"
                            >
                              0 cuộc họp
                            </Box>
                            <Slider
                              value={a1.value}
                              min={a1.min}
                              max={a1.max}
                              step={5}
                              onChange={value => setA1({ ...a1, value })}
                              handleStyle={{
                                backgroundColor: themes.colors.orange,
                                border: 0
                              }}
                              trackStyle={{
                                background: themes.colors.orange
                              }}
                              railStyle={{
                                backgroundColor: themes.colors.border
                              }}
                            />
                            <Box className="ml-2" minWidth="100px">
                              50 cuộc họp
                            </Box>
                          </Box>
                        </Box>

                        <Box mb={5}>
                          <Box display="flex" alignItems="center" mb={3}>
                            <Box display="inline-block">
                              Số giờ họp trung bình (hrs) :
                            </Box>
                            <Box width="10px" />

                            <StyleInput
                              as="input"
                              type="number"
                              value={b1.value}
                              onChange={e =>
                                setB1({
                                  ...b1,
                                  value: +e.target.value || b1.value
                                })
                              }
                              maxWidth="75px"
                            />
                          </Box>
                          <Box display="flex" alignItems="center">
                            <Box mr={2} minWidth="100px" textAlign="right">
                              0.25 giờ
                            </Box>
                            <Slider
                              value={b1.value}
                              min={b1.min}
                              max={b1.max}
                              step={0.1}
                              onChange={value => setB1({ ...b1, value })}
                              handleStyle={{
                                backgroundColor: themes.colors.orange,
                                border: 0
                              }}
                              trackStyle={{
                                background: themes.colors.orange
                              }}
                              railStyle={{
                                backgroundColor: themes.colors.border
                              }}
                            />
                            <Box ml={2} minWidth="100px">
                              3 giờ
                            </Box>
                          </Box>
                        </Box>

                        <Box mb={5}>
                          <Box display="flex" alignItems="center" mb={3}>
                            <Box display="inline-block">
                              Số nhân viên trung bình mỗi cuộc họp:
                            </Box>
                            <Box width="10px" />

                            <StyleInput
                              as="input"
                              type="number"
                              value={c1.value}
                              onChange={e =>
                                setC1({
                                  ...c1,
                                  value: +e.target.value || c1.value
                                })
                              }
                              maxWidth="75px"
                            />
                          </Box>
                          <Box className="d-flex align-items-center">
                            <Box
                              className="mr-2"
                              minWidth="100px"
                              textAlign="right"
                            >
                              2 nhân viên
                            </Box>
                            <Slider
                              value={c1.value}
                              min={c1.min}
                              max={c1.max}
                              onChange={value => setC1({ ...c1, value })}
                              handleStyle={{
                                backgroundColor: themes.colors.orange,
                                border: 0
                              }}
                              trackStyle={{
                                background: themes.colors.orange
                              }}
                              railStyle={{
                                backgroundColor: themes.colors.border
                              }}
                            />
                            <Box className="ml-2" minWidth="100px">
                              30 nhân viên
                            </Box>
                          </Box>
                        </Box>

                        <Box mb={3}>
                          <Box mt={3}>
                            <Box
                              display="flex"
                              alignItems="flex-end"
                              fontSize={4}
                              mb={3}
                              flex={1}
                              width={0.8}
                              mx="auto"
                            >
                              <Box
                                flex={0.5}
                                display="inline-block"
                                textAlign="right"
                              >
                                Tổng Chi phí họp mỗi năm:
                              </Box>
                              <Box width="30px" />
                              <Box
                                display="flex"
                                alignItems="flex-end"
                                fontSize={5}
                                flex={0.5}
                                fontWeight="bold"
                              >
                                {formatter.format(caculateMeeting)}
                                <Box as="span" ml={1}>
                                  VND
                                </Box>
                              </Box>
                            </Box>

                            <Box
                              textAlign="center"
                              fontWeight="bold"
                              width={0.8}
                              mx="auto"
                              color={themes.colors.orange}
                              fontStyle="italic"
                              my={4}
                            >
                              Giảm 50% thời gian họp khi đầu tư hệ thống giao
                              tiếp nội bộ chuyên nghiệp với Chatwork
                            </Box>

                            <Box>
                              <Box
                                display="flex"
                                alignItems="flex-end"
                                fontSize={4}
                                mb={3}
                                flex={1}
                                width={0.8}
                                mx="auto"
                              >
                                <Box
                                  flex={0.5}
                                  display="inline-block"
                                  textAlign="right"
                                >
                                  Chi phí đầu tư CW:
                                </Box>
                                <Box width="30px" />
                                <Box
                                  display="flex"
                                  alignItems="flex-end"
                                  fontSize={5}
                                  flex={0.5}
                                  fontWeight="bold"
                                >
                                  {formatter.format(caculateCW)}
                                  <Box as="span" ml={1}>
                                    VND
                                  </Box>
                                </Box>
                              </Box>

                              <Box
                                display="flex"
                                alignItems="flex-end"
                                fontSize={4}
                                mb={3}
                                flex={1}
                                width={0.8}
                                mx="auto"
                              >
                                <Box
                                  flex={0.5}
                                  display="inline-block"
                                  textAlign="right"
                                >
                                  Chi phí tiết kiệm được :
                                </Box>
                                <Box width="30px" />
                                <Box
                                  display="flex"
                                  fontSize={5}
                                  flex={0.5}
                                  fontWeight="bold"
                                  color="#81C136"
                                >
                                  {formatter.format(
                                    totalCaculate * 0.5 - caculateCW
                                  )}
                                  <Box as="span" ml={1}>
                                    VND
                                  </Box>
                                </Box>
                              </Box>

                              <Box
                                display="flex"
                                alignItems="center"
                                fontSize={4}
                                mb={3}
                                flex={1}
                                width={0.8}
                                mx="auto"
                              >
                                <Box
                                  flex={0.5}
                                  display="inline-block"
                                  textAlign="right"
                                >
                                  ROI:
                                </Box>
                                <Box width="30px" />
                                <Box
                                  display="flex"
                                  fontSize={5}
                                  flex={0.5}
                                  fontWeight="bold"
                                  color="#81C136"
                                >
                                  {formatter.format(
                                    (totalCaculate * 0.5 - caculateCW) /
                                      caculateCW
                                  )}
                                  <Box as="span" ml={1}>
                                    VND
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </CardCustom>

                <CardCustom
                  backgroundColor="#FAFAFA"
                  position="absolute"
                  top={0}
                  left="102%"
                  // width={{ xl: "220px", lg: "210px", md: "200px" }}
                  width="230px"
                  maxWidth={{ xl: "25%", lg: "100%", md: "100%" }}
                  py={3}
                  px={2}
                  opacity={openText.isOpen && openText.eventKey === 2 ? 1 : 0}
                >
                  <Box>
                    <Box color={themes.colors.orange} fontSize={3}>
                      Tổng chi phí họp mỗi năm:
                    </Box>
                    <Box fontSize={2}>
                      Đây là chi phí mà trung bình dành cho các cuộc họp nội bộ
                      diễn ra dựa vào chi phí trung bình tiền lương lao động mỗi
                      giờ của nhân viên
                    </Box>
                  </Box>
                </CardCustom>
              </Box>
            </Accordion>
            <Box mt={2} mb={4}>
              <Button
                block
                style={{
                  backgroundColor: themes.colors.orange,
                  border: "none",
                  height: "60px"
                }}
                onClick={() => setOpenModal(true)}
              >
                CALCULATE
              </Button>
            </Box>
          </Col>
        </Row>
      </Container>
      <ModalResult showModal={openModal} onHide={() => setOpenModal(false)} />
    </>
  );
}
