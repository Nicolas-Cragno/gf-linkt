import React from 'react';
import '../assets/css/LinksBar.css';
import { Container, Row, Col } from 'react-bootstrap';
import Wpp from '../assets/statics/wpp.svg';
import Insta from '../assets/statics/instagram.svg';
import Yt from '../assets/statics/youtube.svg';
import Map from '../assets/statics/map.svg';

export default function LinksBar() {
  return (
    <div className='linksBar'>
        <Container>
            <Row>
                <Col md={12}>
                    <div className='linkItem'>
                        <a href='/'>
                            <button type="button" class="linkBtn btn btn-primary">
                                <img src={Wpp} alt='' className='linkImg'></img>
                                Contacto
                            </button>
                        </a>
                    </div>
                </Col>
                <Col md={12}>
                    <div className='linkItem'>
                        <a href='/'>
                            <button type="button" class="linkBtn btn btn-primary">
                                <img src={Insta} alt='' className='linkImg'></img>
                                Instagram
                            </button>
                        </a>
                    </div>
                </Col>
                <Col md={12}>
                    <div className='linkItem'>
                        <a href='/'>
                            <button type="button" class="linkBtn btn btn-primary">
                                <img src={Yt} alt='' className='linkImg'></img>
                                Canal oficial
                            </button>
                        </a>
                    </div>
                </Col>
                <Col md={12}>
                    <div className='linkItem'>
                        <a href='/'>
                            <button type="button" class="linkBtn btn btn-primary">
                                <img src={Map} alt='' className='linkImg'></img>
                                Donde estamos
                            </button>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
