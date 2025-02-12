import React from 'react';
import '../assets/css/LinksBar.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function LinksBar() {
  return (
    <div className='linksBar'>
        <Container>
            <Row>
                <Col md={12}>
                    <div className='linkItem'>
                        <a href='/'>
                        <button type="button" class="linkBtn btn btn-primary">Entrená con nosotros</button>
                        </a>
                    </div>
                </Col>
                <Col md={12}>
                    <div className='linkItem'>
                        <a href='/'>
                        <button type="button" class="linkBtn btn btn-primary">Entrená con nosotros</button>
                        </a>
                    </div>
                </Col>
                <Col md={12}>
                    <div className='linkItem'>
                        <a href='/'>
                        <button type="button" class="linkBtn btn btn-primary">Entrená con nosotros</button>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
