import React from 'react';
import '../assets/css/LinksBar.css';
import { Container, Row, Col } from 'react-bootstrap';
import Wpp from '../assets/statics/wpp-3.svg';
import Insta from '../assets/statics/insta-3.svg';
import Yt from '../assets/statics/youtube-3.svg';
import Map from '../assets/statics/map-3.svg';
import Web from '../assets/statics/gf-3.svg';

export default function LinksBar() {
  return (
    <div className='linksBar'>
        <Container>
            <Row>
                <Col md={12}>
                    <div className='linkItem'>
                        <a href='https://wa.me/+5491138609659' target='_blank' rel='noreferrer'> {/* telefono de Pablo Fidani */}
                            <button type="button" class="linkBtn btn btn-primary">
                                <img src={Wpp} alt='' className='linkImg'></img>
                                Contacto
                            </button>
                        </a>
                    </div>
                </Col>
                <Col md={12}>
                    <div className='linkItem'>
                        <a href='https://www.instagram.com/gfpredio?igsh=bWJnMHNka3FrY2p0' target='_blank' rel='noreferrer'> {/* instagram GF */}
                            <button type="button" class="linkBtn btn btn-primary">
                                <img src={Insta} alt='' className='linkImg'></img>
                                Instagram
                            </button>
                        </a>
                    </div>
                </Col>
                <Col md={12}>
                    <div className='linkItem'>
                        <a href='http://youtube.com/@GFPredio' target='_blank' rel='noreferrer'> {/* youtube de GF */}
                            <button type="button" class="linkBtn btn btn-primary">
                                <img src={Yt} alt='' className='linkImg'></img>
                                Canal oficial
                            </button>
                        </a>
                    </div>
                </Col>
                <Col md={12}>
                    <div className='linkItem'>
                        <a href='https://maps.app.goo.gl/CfVdmUxP6MaTaauw5' target='_blank' rel='noreferrer'> {/* ubicación predio (Luz y fuerza) */}
                            <button type="button" class="linkBtn btn btn-primary">
                                <img src={Map} alt='' className='linkImg'></img>
                                Donde estamos
                            </button>
                        </a>
                    </div>
                </Col>
                <Col md={12}>
                    <div className='proximamente'>
                        <p>Próximamente ↓</p>
                        <div className='linkItem'>
                            <a href='/' /*target='_blank' rel='noreferrer'*/> {/* ubicación predio (Luz y fuerza) */}
                                <button type="button" class="linkBtn btn btn-primary">
                                    <img src={Web} alt='' className='linkImg'></img>
                                    Noticias y más
                                </button>
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
