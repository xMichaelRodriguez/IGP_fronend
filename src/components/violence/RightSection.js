import React from 'react'

export const RightSection = () => {
  return (
    <div className='container mt-3 animate__animated   animate__fadeIn'>
      <div className='container py-5'>
        <h3 className='font-weight-bold display-4'>
          Los Derechos Humanos
        </h3>
        <p className='text-justify text-dark'>
          Los Derechos Humanos son el conjunto de
          prerrogativas sustentadas en la dignidad humana,
          cuya realización efectiva resulta indispensable
          para el desarrollo integral de la persona. Este
          conjunto de prerrogativas se encuentra establecido
          dentro del orden jurídico nacional, en nuestra
          Constitución Política, tratados internacionales y
          las leyes.Los Derechos Humanos son el conjunto de
          prerrogativas sustentadas en la dignidad humana,
          cuya realización efectiva resulta indispensable
          para el desarrollo integral de la persona.
        </p>
      </div>
      <div className='line'></div>

      <ul className='accordion' id='accordionExample'>
        <div className='card '>
          <div className='card-header' id='headingOne'>
            <h2 className='mb-0'>
              <button
                className='btn btn-link btn-block text-left'
                type='button'
                data-toggle='collapse'
                data-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                El Derecho a tus Propias Posesiones
              </button>
            </h2>
          </div>

          <div
            id='collapseOne'
            className='collapse show'
            aria-labelledby='headingOne'
            data-parent='#accordionExample'
          >
            <div className='card-body'>
              Todo el mundo tiene derecho a tener sus
              propias cosas o a compartirlas. Nadie debería
              tomar nuestras cosas sin una buena razón
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-header' id='headingTwo'>
            <h2 className='mb-0'>
              <button
                className='btn btn-link btn-block text-left collapsed'
                type='button'
                data-toggle='collapse'
                data-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
              >
                Libertad de Pensamiento
              </button>
            </h2>
          </div>
          <div
            id='collapseTwo'
            className='collapse'
            aria-labelledby='headingTwo'
            data-parent='#accordionExample'
          >
            <div className='card-body'>
              Todos tenemos el derecho de creer en lo que
              queramos creer, de tener una religión o de
              cambiarla si así lo queremos.
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header' id='headingThree'>
            <h2 className='mb-0'>
              <button
                className='btn btn-link btn-block text-left collapsed'
                type='button'
                data-toggle='collapse'
                data-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
              >
                Libertad de Expresión
              </button>
            </h2>
          </div>
          <div
            id='collapseThree'
            className='collapse'
            aria-labelledby='headingThree'
            data-parent='#accordionExample'
          >
            <div className='card-body'>
              Todos tenemos el derecho de pensar por
              nosotros mismos, de pensar lo que nos gusta,
              de decir lo que pensamos y de compartir
              nuestras ideas con otra gente.
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header' id='headingFour'>
            <h2 className='mb-0'>
              <button
                className='btn btn-link btn-block text-left collapsed'
                type='button'
                data-toggle='collapse'
                data-target='#collapseFour'
                aria-expanded='false'
                aria-controls='collapseFour'
              >
                El Derecho a Reunirse en Público.
              </button>
            </h2>
          </div>
          <div
            id='collapseFour'
            className='collapse'
            aria-labelledby='headingFour'
            data-parent='#accordionExample'
          >
            <div className='card-body'>
              Todos tenemos el derecho de reunirnos con
              nuestros amigos y de trabajar juntos en paz
              para defender nuestros derechos. Nadie nos
              puede obligar a unirnos a un grupo al que no
              queremos unirnos.
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header' id='headingFive'>
            <h2 className='mb-0'>
              <button
                className='btn btn-link btn-block text-left collapsed'
                type='button'
                data-toggle='collapse'
                data-target='#collapseFive'
                aria-expanded='false'
                aria-controls='collapseFive'
              >
                El Derecho a la Democracia.
              </button>
            </h2>
          </div>
          <div
            id='collapseFive'
            className='collapse'
            aria-labelledby='headingFive'
            data-parent='#accordionExample'
          >
            <div className='card-body'>
              Todos tenemos derecho a tomar parte en el
              gobierno de nuestro país. A todo adulto se le
              debe permitir elegir a sus propios líderes.
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header' id='headingSix'>
            <h2 className='mb-0'>
              <button
                className='btn btn-link btn-block text-left collapsed'
                type='button'
                data-toggle='collapse'
                data-target='#collapseSix'
                aria-expanded='false'
                aria-controls='collapseSix'
              >
                Seguridad Social
              </button>
            </h2>
          </div>
          <div
            id='collapseSix'
            className='collapse'
            aria-labelledby='headingSix'
            data-parent='#accordionExample'
          >
            <div className='card-body'>
              Todos tenemos el derecho a una vivienda
              decente, a cuidados médicos, educación,
              guardería infantil, suficiente dinero para
              vivir y atención médica si estamos enfermos o
              somos mayores.
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header' id='headingSeven'>
            <h2 className='mb-0'>
              <button
                className='btn btn-link btn-block text-left collapsed'
                type='button'
                data-toggle='collapse'
                data-target='#collapseSeven'
                aria-expanded='false'
                aria-controls='collapseSeven'
              >
                Derecho a la vida
              </button>
            </h2>
          </div>
          <div
            id='collapseSeven'
            className='collapse'
            aria-labelledby='headingSeven'
            data-parent='#accordionExample'
          >
            <div className='card-body'>
              El derecho a la vida es un derecho universal,
              es decir que le corresponde a todo ser humano.
              Es un derecho necesario para poder concretizar
              todos los demás derechos universales. El
              derecho a la vida significa tener la
              oportunidad de vivir nuestra propia vida.
            </div>
          </div>
        </div>
      </ul>
    </div>
  )
}
