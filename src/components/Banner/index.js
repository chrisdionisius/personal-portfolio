import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImage from "../../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export default function Banner() {
  // state to define which title will be rendered
  const [loopNum, setLoopNum] = useState(0);
  //   state to make deletion animation on the title
  const [isDeleting, setIsDeleting] = useState(false);
  //   state to define what letter in the title that will be written
  const [text, setText] = useState("");
  //   state to define interval of writting next letter
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  //   list of title
  const toRotate = [
    "Back-End Developer",
    "Flutter Mobile Developer",
    "Front-End Developer",
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    // get the index of next title to be render
    let i = loopNum % toRotate.length;
    // assign the selected title to fullText variable
    let fullText = toRotate[i];
    // assign a substring of fullText into updatedText variable
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1) // if it's in the middle of deleting animation remove last letter from the updatedText variable (e.g webdev into webde)
      : fullText.substring(0, text.length + 1); // if it's in the middle of typing animation add another next letter to the updatedText variable (e.g webde into webdev)
    // assign the updatedText variable into text state
    setText(updatedText);
    // if in proses of deleting animation do an acceleration to speed up the deletion animation
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    // check if the updatedText finally has the same value with fullText variable
    if (!isDeleting && updatedText === fullText) {
      // if the value is equal then
      // update the isDeleting state into true so it'll initiate the deletion animation
      setIsDeleting(true);
      // increase the duration of animation to 2000 so it'll give delay before deletion animation start
      setDelta(period);
      // check if deletion animation finally reached the first letter
    } else if (isDeleting && updatedText === "") {
      // update the isDeleting state to false so the deletion animation will stop
      setIsDeleting(false);
      // now take next index and assign it to loopNum state
      setLoopNum(loopNum + 1);
      // decrease the animation speed to 500 ms
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h3>{`Dionisius, at your service`} </h3>
                  <h1>
                    {`I'm a `}
                    <span className="wrap">{text}</span>
                  </h1>
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
                  <button onClick={() => console.log("working")}>
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={HeaderImage} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
