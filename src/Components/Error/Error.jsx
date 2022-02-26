import React, { Fragment } from 'react'
import { Col, Container,Row } from 'react-bootstrap'

export default function Error() {
  return <Fragment>
      <Container className = "vh-100 d-flex justify-content-center align-items-center ">
          <Row className=' '>
              <Col>
              <h1 className='p-5'>
                  There must be some error, try again later!:(
              </h1>
              </Col>
          </Row>
      </Container>
  </Fragment>
}
