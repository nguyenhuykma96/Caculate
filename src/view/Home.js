import React, { useState } from "react";
import { Accordion, Card, Button, Container, Row, Col } from "react-bootstrap";
import { Box } from "@xstyled/styled-components";
import themes from "../commons/variables";
import Slider from "rc-slider";
import { formatter, formatterMoney } from "../commons/function";

export default function Home() {
  const [totalEmployee, setTotalEmployee] = useState({
    min: 1,
    max: 200000,
    value: 100000
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

  return (
    <Container fluid="md">
      <Row>
        <Col md={12}>
          <Accordion defaultActiveKey="2">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <Box as="h4" color={themes.colors.orange}>
                  THÔNG TIN CÔNG TY
                </Box>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h5>Bảng tíng chi phí nhân sự (Employee Cost)</h5>
                  <Box mb={3}>
                    <Box display="flex" mb={2}>
                      <label className="d-inline-block">
                        Số lượng nhân viên:{" "}
                      </label>
                      <Box width="10px"></Box>
                      <Box fontWeight="bold">
                        {formatter.format(totalEmployee.value)}
                      </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Box className="mr-2" minWidth="80px" textAlign="right">
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
                      <Box className="ml-2" minWidth="80px">
                        {formatter.format(200000)}
                      </Box>
                    </Box>
                  </Box>
                  <Box mb={3}>
                    <Box display="flex" mb={2}>
                      <label className="d-inline-block">
                        Mức lương trung bình hằng tháng:
                      </label>
                      <Box width="10px"></Box>
                      <Box fontWeight="bold">
                        {formatter.format(salary.value)}
                      </Box>
                    </Box>
                    <div className="d-flex align-items-center">
                      <span className="mr-2" textAlign="right">
                        {formatter.format(5000000)}
                      </span>
                      <Slider
                        value={salary.value}
                        min={salary.min}
                        max={salary.max}
                        onChange={value => setSalary({ ...salary, value })}
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
                      <span className="ml-2">{formatter.format(50000000)}</span>
                    </div>
                  </Box>
                  <Box display="flex" fontSize={4}>
                    <label className="d-inline-block">
                      Tiền công trung bình mỗi giờ:
                    </label>
                    <Box width="10px"></Box>
                    <Box fontWeight="bold">{formatterMoney.format(z)}</Box>
                  </Box>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <Box as="h4" color={themes.colors.orange}>
                  CHI PHÍ CHO VẤN ĐỀ NĂNG SUẤT BỊ GIÁN ĐOẠN VÌ GIAO TIẾP
                </Box>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Box fontSize={4} mb={3}>
                    THÔNG TIN CÔNG TY
                  </Box>
                  <Box mb={3}>
                    <Box as="ol" style={{ listStyleType: "upper-roman" }}>
                      <Box as="li">
                        Dùng các công cụ giao tiếp đồng bộ như Facebook, Zalo,
                        Line,... Tính năng hiển thị trạng thái "Online" hoặc "Đã
                        xem" khiến bạn cảm thấy áp lực phải trả lời hoặc mong
                        muốn đối phương trả lời.
                      </Box>
                      <Box as="li">
                        Có nhiều thông tin phải "lướt" lại nhóm chat rất lâu để
                        tìm và đọc lại.
                      </Box>
                      <Box as="li">
                        Có nhiều thông tin phải "lướt" lại nhóm chat rất lâu để
                        tìm và đọc lại.
                      </Box>
                    </Box>
                    <Box>
                      Những điều này sẽ lấy đi sự tập trung của bạn, làm giảm
                      năng suất làm việc hoặc quá tải giao tiếp do phải tạm dừng
                      công việc để trả lời tin nhắn, lướt lại nhóm chat hoặc
                      kiểm tra email.
                    </Box>
                    <Box>
                      Ở đây, chúng tôi tính toán chi phí gián đoạn không cần
                      thiết của công ty mỗi năm.
                    </Box>
                  </Box>

                  <Box mb={3}>
                    <Box display="flex" mb={2}>
                      <label className="d-inline-block">
                        Số lượng trung bình những emails tin tức (news & admin)
                        gửi cho nhân viên mỗi ngày:{" "}
                      </label>
                      <Box width="10px"></Box>
                      <Box fontWeight="bold">
                        {formatter.format(email.value)}
                      </Box>
                    </Box>
                    <Box className="d-flex align-items-center">
                      <Box className="mr-2" minWidth="100px" textAlign="right">
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

                  <Box mb={3}>
                    <Box display="flex" mb={2}>
                      <label className="d-inline-block">
                        Số lượt trung bình nhân viên phải lướt group chat để tìm
                        lại thông tin đã lâu (trôi tin) mỗi ngày:
                      </label>
                      <Box width="10px"></Box>
                      <Box fontWeight="bold">{formatter.format(b.value)}</Box>
                    </Box>
                    <Box className="d-flex align-items-center">
                      <Box className="mr-2" minWidth="100px" textAlign="right">
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
                      <Box className="ml-2" minWidth="100px">
                        200 lượt
                      </Box>
                    </Box>
                  </Box>

                  <Box mb={3}>
                    <Box display="flex" mb={2}>
                      <label className="d-inline-block">
                        Số lượt trung bình nhân viên kiểm tra tin nhắn "Đã xem"
                        được trả lời hay chưa mỗi ngày:
                      </label>
                      <Box width="10px"></Box>
                      <Box fontWeight="bold">{formatter.format(c.value)}</Box>
                    </Box>
                    <Box className="d-flex align-items-center">
                      <Box className="mr-2" minWidth="100px" textAlign="right">
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
                      <Box className="ml-2" minWidth="100px">
                        500 lượt
                      </Box>
                    </Box>
                  </Box>
                  <Box mb={3}>
                    <Box display="flex" mb={2}>
                      <label className="d-inline-block">
                        Thời gian trung bình "khôi phục trạng thái làm việc" sau
                        mỗi lần bị gián đoạn bởi emails/ tìm tin/ check xem đối
                        phương trả lời hay chưa:
                      </label>
                      <Box width="10px"></Box>
                      <Box fontWeight="bold">{formatter.format(d.value)}</Box>
                    </Box>
                    <Box className="d-flex align-items-center">
                      <Box className="mr-2" minWidth="100px" textAlign="right">
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
                      <Box className="ml-2" minWidth="100px">
                        5 phút
                      </Box>
                    </Box>
                  </Box>
                  <Box mb={3}>
                    <Box display="flex" mb={2}>
                      <label className="d-inline-block">
                        Tỉ lệ % nhân viên bị "phân tâm" bởi những vấn đề trên:
                      </label>
                      <Box width="10px"></Box>
                      <Box fontWeight="bold">{formatter.format(e.value)}</Box>
                    </Box>
                    <Box className="d-flex align-items-center">
                      <Box className="mr-2" minWidth="100px" textAlign="right">
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

                    <Box mt={3}>
                      <Box display="flex" fontSize={4}>
                        <label className="d-inline-block">
                          Chi phí gián đoạn bởi email không cần thiết mỗi năm:
                        </label>
                        <Box width="10px"></Box>
                        <Box fontWeight="bold">
                          {formatterMoney.format(caculateEmail)}
                        </Box>
                      </Box>
                      <Box display="flex" fontSize={4}>
                        <label className="d-inline-block">
                          Chi phí gián đoạn bởi lướt group chat tìm tin nhắn mỗi
                          năm:
                        </label>
                        <Box width="10px"></Box>
                        <Box fontWeight="bold">
                          {formatterMoney.format(caculateChat)}
                        </Box>
                      </Box>
                      <Box display="flex" fontSize={4}>
                        <label className="d-inline-block">
                          Chi phí gián đoạn bởi check tin nhắn "Đã xem" mỗi năm:
                        </label>
                        <Box width="10px"></Box>
                        <Box fontWeight="bold">
                          {formatterMoney.format(caculateMess)}
                        </Box>
                      </Box>
                      <Box display="flex" fontSize={4}>
                        <label className="d-inline-block">
                          Tổng Chi phí gián đoạn mỗi năm :
                        </label>
                        <Box width="10px"></Box>
                        <Box fontWeight="bold">
                          {formatterMoney.format(totalCaculate)}
                        </Box>
                      </Box>
                      <Box textAlign="center" fontWeight="bold">
                        Giảm 70% thời gian gián đoạn bằng tính năng Screen Alert
                        và Chat không đồng bộ khi đầu tư hệ thống giao tiếp nội
                        bộ chuyên nghiệp với Chatwork{" "}
                      </Box>
                      <Box>
                        <Box display="flex" fontSize={4}>
                          <label className="d-inline-block">
                            Chi phí đầu tư CW:
                          </label>
                          <Box width="10px"></Box>
                          <Box fontWeight="bold">
                            {formatterMoney.format(caculateCW)}
                          </Box>
                        </Box>
                        <Box display="flex" fontSize={4}>
                          <label className="d-inline-block">
                            Chi phí tiết kiệm được :
                          </label>
                          <Box width="10px"></Box>
                          <Box fontWeight="bold">
                            {formatterMoney.format(
                              caculateMeeting * 0.5 - caculateCW
                            )}
                          </Box>
                        </Box>
                        <Box display="flex" fontSize={4}>
                          <label className="d-inline-block">ROI:</label>
                          <Box width="10px"></Box>
                          <Box fontWeight="bold">
                            {/* {formatterMoney.format(totalCaculate * 0.7 - caculateCW)} */}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <Box as="h4" color={themes.colors.orange}>
                  CHI PHÍ CHO VẤN ĐỀ TỔ CHỨC HỌP KHÔNG HIỆU QUẢ
                </Box>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <Box mb={3}>
                    Nhiều tổ chức đang gặp vấn đề lãng phí quá nhiều thời gian
                    cho các cuộc họp cập nhật chung. Đây là một chi phí năng
                    suất khác mà tổ chức của bạn có thể tránh được nếu có hệ
                    thống giao tiếp nội bộ tốt hơn được áp dụng.
                  </Box>

                  <Box mb={3}>
                    <Box display="flex" mb={2}>
                      <label className="d-inline-block">
                        Tổng số cuộc họp được tổ chức hằng tuần:{" "}
                      </label>
                      <Box width="10px"></Box>
                      <Box fontWeight="bold">{formatter.format(a1.value)}</Box>
                    </Box>
                    <Box className="d-flex align-items-center">
                      <Box className="mr-2" minWidth="100px" textAlign="right">
                        0 cuộc họp
                      </Box>
                      <Slider
                        value={a1.value}
                        min={a1.min}
                        max={a1.max}
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

                  <Box mb={3}>
                    <Box display="flex" mb={2}>
                      <label className="d-inline-block">
                        Số giờ họp trung bình (hrs) :
                      </label>
                      <Box width="10px"></Box>
                      <Box fontWeight="bold">{formatter.format(b1.value)}</Box>
                    </Box>
                    <Box className="d-flex align-items-center">
                      <Box className="mr-2" minWidth="100px" textAlign="right">
                        0.25 giờ
                      </Box>
                      <Slider
                        value={b1.value}
                        min={b1.min}
                        max={b1.max}
                        step={0.01}
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
                      <Box className="ml-2" minWidth="100px">
                        3 giờ
                      </Box>
                    </Box>
                  </Box>

                  <Box mb={3}>
                    <Box display="flex" mb={2}>
                      <label className="d-inline-block">
                        Số nhân viên trung bình mỗi cuộc họp:
                      </label>
                      <Box width="10px"></Box>
                      <Box fontWeight="bold">{formatter.format(c1.value)}</Box>
                    </Box>
                    <Box className="d-flex align-items-center">
                      <Box className="mr-2" minWidth="100px" textAlign="right">
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
                      <Box display="flex" fontSize={4}>
                        <label className="d-inline-block">
                          Tổng Chi phí họp mỗi năm:
                        </label>
                        <Box width="10px"></Box>
                        <Box fontWeight="bold">
                          {formatterMoney.format(caculateMeeting)}
                        </Box>
                      </Box>

                      <Box textAlign="center" fontWeight="bold" my={3}>
                        Giảm 50% thời gian họp khi đầu tư hệ thống giao tiếp nội
                        bộ chuyên nghiệp với Chatwork
                      </Box>
                      <Box>
                        <Box display="flex" fontSize={4}>
                          <label className="d-inline-block">
                            Chi phí đầu tư CW:
                          </label>
                          <Box width="10px"></Box>
                          <Box fontWeight="bold">
                            {formatterMoney.format(caculateCW)}
                          </Box>
                        </Box>
                        <Box display="flex" fontSize={4}>
                          <label className="d-inline-block">
                            Chi phí tiết kiệm được :
                          </label>
                          <Box width="10px"></Box>
                          <Box fontWeight="bold">
                            {formatterMoney.format(
                              totalCaculate * 0.7 - caculateCW
                            )}
                          </Box>
                        </Box>
                        <Box display="flex" fontSize={4}>
                          <label className="d-inline-block">ROI:</label>
                          <Box width="10px"></Box>
                          <Box fontWeight="bold">
                            {/* {formatterMoney.format(totalCaculate * 0.7 - caculateCW)} */}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Box mt={2}>
            <Button
              block
              style={{
                backgroundColor: themes.colors.orange,
                border: "none",
                height: "60px"
              }}
            >
              CACULATE
            </Button>
          </Box>
        </Col>
      </Row>
    </Container>
  );
}
