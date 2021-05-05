import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Col lg={12} className="margin-top">
            <Switch>

            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  )
}
export default App
