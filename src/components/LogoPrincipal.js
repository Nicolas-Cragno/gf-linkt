import React from 'react';
import imgPrincipal from '../assets/statics/logo-principal.svg';
import '../assets/css/LogoPrincipal.css';

export default function LogoPrincipal() {
  return (
    <div className='logoPrincipal'>
      <img src={imgPrincipal} alt='' className='imgPrincipal'></img>
      <h1 className='logoTitle'>GF FÚTBOL</h1>
      <p className='logoTxt'>Profesionalizando el fútbol amateur.</p>
    </div>
  )
}
