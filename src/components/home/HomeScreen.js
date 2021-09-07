import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../UVS-APP.svg';

import { BiMenuAltLeft } from 'react-icons/bi';
import { StoryScreen } from '../stories/StoryScreen';
import { BsArrowRight } from 'react-icons/bs';
import { NoticeScreen } from '../noticies/NoticeScreen';
import { OrganizationScreen } from '../organizations/OrganizationScreen';
import { useSelector } from 'react-redux';

import { CardScreen } from '../cards/CardScreen';
export const HomeScreen = () => {
  const { noticies } = useSelector((state) => state.notice);
  const { stories } = useSelector((state) => state.story);

  return (
    <>
      <section className='row'>
        <div className='col-md-12 my-auto'>
          <h2>Una Vida Segura (UVS)</h2>
          <p className='text-justify text-dark '>
            Es una Web App y App Móvil educativa que surge, para dar respuesta
            de forma organizada a la realidad salvadoreña de violencia en los
            niños, niñas y adolescentes, y la necesidad de trabajar de la mano
            con MINEDUCYT, CONNA para llevar información sobre la violencia a la
            vida de los niños, niñas y adolescentes, buscando así poder ayudar
            en la vida de ellos con el acceso a la información importante de los
            casos de violencia que podrían vivir y como podrían salir de ello.
          </p>
        </div>
      </section>

      <div className='line'></div>

      <h3 className='d-flex justify-content-center'>Ultimas Noticias</h3>
      <section className='row'>
        <CardScreen data={noticies.noticeArr} route='noticias' />
      </section>

      <div className='line'></div>

      <h3 className='d-flex justify-content-center'>
        Ultimas Historias de vida
      </h3>
      <section className='row'>
        <CardScreen data={stories.storyArr} route='historias' />
      </section>

      <div className='line'></div>

      <h2>Los Derechos</h2>
      <p className='text-justify text-dark'>
        Los Derechos Humanos son el conjunto de prerrogativas sustentadas en la
        dignidad humana, cuya realización efectiva resulta indispensable para el
        desarrollo integral de la persona. Este conjunto de prerrogativas se
        encuentra establecido dentro del orden jurídico nacional, en nuestra
        Constitución Política, tratados internacionales y las leyes.Los Derechos
        Humanos son el conjunto de prerrogativas sustentadas en la dignidad
        humana, cuya realización efectiva resulta indispensable para el
        desarrollo integral de la persona. Este conjunto de prerrogativas se
        encuentra establecido dentro del orden jurídico nacional, en nuestra
        Constitución Política, tratados internacionales y las leyes.Los Derechos
        Humanos son el conjunto de prerrogativas sustentadas en la dignidad
        humana, cuya realización efectiva resulta indispensable para el
        desarrollo integral de la persona. Este conjunto de prerrogativas se
        encuentra establecido dentro del orden jurídico nacional, en nuestra
        Constitución Política, tratados internacionales y las leyes.
      </p>
    </>
  );
};
