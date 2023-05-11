import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjImg1 from "../../assets/img/project-img1.png";
import ProjImg2 from "../../assets/img/project-img2.png";
import ProjImg3 from "../../assets/img/project-img3.png";
import ColorSharp2 from "../../assets/img/color-sharp2.png";
import ProjectCards from "../ProjectCards";
import TrackVisibility from "react-on-screen";
import "animate.css";

export default function Projects() {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: ProjImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: ProjImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: ProjImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: ProjImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: ProjImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: ProjImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCards key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={ColorSharp2}
        alt="background"
      />
    </section>
  );
}
