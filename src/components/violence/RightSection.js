import React from 'react';
import { Link } from 'react-router-dom';

export const RightSection = () => {
  return (
    <div className='uk-card uk-card-default uk-margin-bottom uk-padding animate__animated   animate__fadeIn'>
      <div>
        <h3 className='uk-text-bold'>
          <dfn>Los Derechos Humanos </dfn>
        </h3>
        <p className='uk-text-justify'>
          Los Derechos Humanos son el conjunto de prerrogativas sustentadas en
          la dignidad humana, cuya realización efectiva resulta indispensable
          para el desarrollo integral de la persona. Este conjunto de
          prerrogativas se encuentra establecido dentro del orden jurídico
          nacional, en nuestra Constitución Política, tratados internacionales y
          las leyes.Los Derechos Humanos son el conjunto de prerrogativas
          sustentadas en la dignidad humana, cuya realización efectiva resulta
          indispensable para el desarrollo integral de la persona. Este conjunto
          de prerrogativas se encuentra establecido dentro del orden jurídico
          nacional, en nuestra Constitución Política, tratados internacionales y
          las leyes.Los Derechos Humanos son el conjunto de prerrogativas
          sustentadas en la dignidad humana, cuya realización efectiva resulta
          indispensable para el desarrollo integral de la persona. Este conjunto
          de prerrogativas se encuentra establecido dentro del orden jurídico
          nacional, en nuestra Constitución Política, tratados internacionales y
          las leyes.
        </p>
      </div>
      <hr class='uk-divider-icon' />
      <ul uk-accordion=''>
        <li className='uk-open'>
          <Link className='uk-accordion-title' to='#'>
            El Derecho a tus Propias Posesiones
          </Link>
          <div className='uk-accordion-content'>
            <p>
              Todo el mundo tiene derecho a tener sus propias cosas o a
              compartirlas. Nadie debería tomar nuestras cosas sin una buena
              razón
            </p>
          </div>
        </li>
        <li>
          <Link className='uk-accordion-title' to='#'>
            Libertad de Pensamiento
          </Link>
          <div className='uk-accordion-content'>
            <p>
              Todos tenemos el derecho de creer en lo que queramos creer, de
              tener una religión o de cambiarla si así lo queremos.
            </p>
          </div>
        </li>
        <li>
          <Link className='uk-accordion-title' to='#'>
            Libertad de Expresión
          </Link>
          <div className='uk-accordion-content'>
            <p>
              Todos tenemos el derecho de pensar por nosotros mismos, de pensar
              lo que nos gusta, de decir lo que pensamos y de compartir nuestras
              ideas con otra gente.
            </p>
          </div>
        </li>
        <li>
          <Link className='uk-accordion-title' to='#'>
            El Derecho a Reunirse en Público.
          </Link>
          <div className='uk-accordion-content'>
            <p>
              Todos tenemos el derecho de reunirnos con nuestros amigos y de
              trabajar juntos en paz para defender nuestros derechos. Nadie nos
              puede obligar a unirnos a un grupo al que no queremos unirnos.
            </p>
          </div>
        </li>
        <li>
          <Link className='uk-accordion-title' to='#'>
            El Derecho a la Democracia.
          </Link>
          <div className='uk-accordion-content'>
            <p>
              Todos tenemos derecho a tomar parte en el gobierno de nuestro
              país. A todo adulto se le debe permitir elegir a sus propios
              líderes.
            </p>
          </div>
        </li>
        <li>
          <Link className='uk-accordion-title' to='#'>
            Seguridad Social
          </Link>
          <div className='uk-accordion-content'>
            <p>
              Todos tenemos el derecho a una vivienda decente, a cuidados
              médicos, educación, guardería infantil, suficiente dinero para
              vivir y atención médica si estamos enfermos o somos mayores.
            </p>
          </div>
        </li>
        <li>
          <Link className='uk-accordion-title' to='#'>
            Derecho a la vida
          </Link>
          <div className='uk-accordion-content'>
            <p>
              El derecho a la vida es un derecho universal, es decir que le
              corresponde a todo ser humano. Es un derecho necesario para poder
              concretizar todos los demás derechos universales. El derecho a la
              vida significa tener la oportunidad de vivir nuestra propia vida.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
