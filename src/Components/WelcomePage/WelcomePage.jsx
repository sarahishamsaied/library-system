import React, { Fragment } from 'react'
import { Container, Row ,Col} from 'react-bootstrap'

export default function WelcomePage() {
  return <Fragment>
      <Container>
          <Row>
              <Col>
              <h1>Welcome to Projectify</h1>
              </Col>
          </Row>
      </Container>
  </Fragment>
}
