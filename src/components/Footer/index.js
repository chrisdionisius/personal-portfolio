import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MailchimpForm from "../MailchimpForm";
import Logo from "../../assets/img/logo.svg";
import NavIcon1 from "../../assets/img/nav-icon1.svg";
import NavIcon2 from "../../assets/img/nav-icon2.svg";
import NavIcon3 from "../../assets/img/nav-icon3.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={Logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://facebook.com/">
                <img src={NavIcon1} alt="facebook" />
              </a>
              <a href="https://instagram.com/">
                <img src={NavIcon2} alt="instagram" />
              </a>
              <a href="https://twitter.com/">
                <img src={NavIcon3} alt="twitter" />
              </a>
            </div>
            <p>CopyRight 2022. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
