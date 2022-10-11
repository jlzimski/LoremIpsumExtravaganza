import React, { useState } from 'react';
import { Alert, Row, Col } from 'reactstrap';

function Results(props) {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Row>
        <Col>
        <Alert color="info" isOpen={visible} toggle={onDismiss}>
      I am an alert and I can be dismissed!
    </Alert>
        </Col>
    </Row>

  );
}

export default Results;