import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Heading } from "../heading/Heading";

import "./countdown.scss";
import { BodyText } from "../body-text/BodyText";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft as {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Container
      className="justify-content-center"
      style={{ marginTop: "4rem", width: "fit-content" }}
    >
      <Row xs={1} sm={2} md={4}>
        <Col className="column">
          <Heading className="countdown-number">
            {addLeadingZero(timeLeft.days)}{" "}
          </Heading>
          <BodyText className="countdown-unit">Days</BodyText>
        </Col>
        <Col className="column">
          <Heading className="countdown-number">
            {addLeadingZero(timeLeft.hours)}{" "}
          </Heading>
          <BodyText className="countdown-unit">Hours</BodyText>
        </Col>
        <Col className="column">
          <Heading className="countdown-number">
            {addLeadingZero(timeLeft.minutes)}{" "}
          </Heading>
          <BodyText className="countdown-unit">Minutes</BodyText>
        </Col>
        <Col className="column">
          <Heading className="countdown-number">
            {addLeadingZero(timeLeft.seconds)}{" "}
          </Heading>
          <BodyText className="countdown-unit">Seconds</BodyText>
        </Col>
      </Row>
    </Container>
  );
};

export { CountdownTimer };
