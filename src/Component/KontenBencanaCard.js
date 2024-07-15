import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function KontenBencanaCard({ title, imageSrc, accordionItems }) {
  return (
    <Card style={{ width: '50rem', marginBottom: '50px' }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title style={{ marginTop: "30px",marginBottom: "50px", fontSize: "30px" }}>{title}</Card.Title>
        <Row noGutters>
          <Col md={12}>
            {/* Accordion component starts here */}
            <Accordion defaultActiveKey={['null']} alwaysOpen style={{ textAlign: "justify" }}>
              {accordionItems.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{item.header}</Accordion.Header>
                  <Accordion.Body>
                    {item.body}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            {/* Accordion component ends here */}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default KontenBencanaCard;