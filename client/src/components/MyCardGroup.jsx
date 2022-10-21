import Button from "react-bootstrap/Button";
import React from "react";
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";

export const MyCardGroup = ({ listOfUsers }) => (
  <>
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {listOfUsers &&
        listOfUsers.map((user, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Body>
                <Card.Title>Name: {user.name}</Card.Title>
                <Card.Subtitle>Username: {user.username}</Card.Subtitle>
                <Card.Text>Age: {user.age}</Card.Text>
              </Card.Body>
              <Container>
                <Button variant="primary" className="mr-2">
                  Edit
                </Button>
                <Button variant="danger" className="pl-2">
                  Remove
                </Button>
              </Container>
            </Card>
          </Col>
        ))}
    </Row>
  </>
);
