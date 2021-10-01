import React from 'react'

export const RightSection = () => {
  return (
    <div className='container-fluid text-break'>
      <div className='container'>
        <h3 className=' display-4 '>
          Los Derechos Humanos
        </h3>
        <p className=' px-2 text-dark'>
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

        <div class=' row'>
          <div class='col-md-4 mb-3'>
            <div
              class='list-group'
              id='list-tab'
              role='tablist'
            >
              <a
                class='list-group-item list-group-item-action active'
                id='list-home-list'
                data-toggle='list'
                href='#listPosesiones'
                role='tab'
                aria-controls='home'
              >
                El Derecho a tus Propias Posesiones
              </a>
              <a
                class='list-group-item list-group-item-action'
                id='list-profile-list'
                data-toggle='list'
                href='#listPensamientos'
                role='tab'
                aria-controls='profile'
              >
                Libertad de Pensamiento
              </a>
              <a
                class='list-group-item list-group-item-action'
                id='list-messages-list'
                data-toggle='list'
                href='#listExpres'
                role='tab'
                aria-controls='messages'
              >
                Libertad de Expresión
              </a>
              <a
                class='list-group-item list-group-item-action'
                id='list-settings-list'
                data-toggle='list'
                href='#listreunion'
                role='tab'
                aria-controls='settings'
              >
                El Derecho a Reunirse en Público.
              </a>
              <a
                class='list-group-item list-group-item-action'
                id='list-democracia-list'
                data-toggle='list'
                href='#listDemo'
                role='tab'
                aria-controls='demo'
              >
                El Derecho a la Democracia.
              </a>
              <a
                class='list-group-item list-group-item-action'
                id='list-seguridad-list'
                data-toggle='list'
                href='#listseguridad'
                role='tab'
                aria-controls='listseguridad'
              >
                Derecho a seguridad social
              </a>
              <a
                class='list-group-item list-group-item-action'
                id='list-seguridad-list'
                data-toggle='list'
                href='#listVida'
                role='tab'
                aria-controls='listVida'
              >
                Derecho a la vida
              </a>
            </div>
          </div>
          <div class='col-md-8 mb-3'>
            <div class='tab-content' id='nav-tabContent'>
              <div
                class='container tab-pane fade show active'
                id='listPosesiones'
                role='tabpanel'
                aria-labelledby='list-home-list'
              >
                Todo el mundo tiene derecho a tener sus
                propias cosas o a compartirlas. Nadie
                debería tomar nuestras cosas sin una buena
                razón
              </div>
              <div
                class='container tab-pane fade'
                id='listPensamientos'
                role='tabpanel'
                aria-labelledby='list-profile-list'
              >
                Todos tenemos el derecho de creer en lo que
                queramos creer, de tener una religión o de
                cambiarla si así lo queremos.
              </div>
              <div
                class='container tab-pane fade'
                id='listExpres'
                role='tabpanel'
                aria-labelledby='list-messages-list'
              >
                Todos tenemos el derecho de pensar por
                nosotros mismos, de pensar lo que nos gusta,
                de decir lo que pensamos y de compartir
                nuestras ideas con otra gente.
              </div>
              <div
                class='container tab-pane fade'
                id='listreunion'
                role='tabpanel'
                aria-labelledby='list-settings-list'
              >
                Todos tenemos el derecho de reunirnos con
                nuestros amigos y de trabajar juntos en paz
                para defender nuestros derechos. Nadie nos
                puede obligar a unirnos a un grupo al que no
                queremos unirnos.
              </div>
              <div
                class='container tab-pane fade'
                id='listDemo'
                role='tabpanel'
                aria-labelledby='list-demo-list'
              >
                Todos tenemos derecho a tomar parte en el
                gobierno de nuestro país. A todo adulto se
                le debe permitir elegir a sus propios
                líderes.
              </div>
              <div
                class='container tab-pane fade'
                id='listseguridad'
                role='tabpanel'
                aria-labelledby='list-segu-list'
              >
                Todos tenemos el derecho a una vivienda
                decente, a cuidados médicos, educación,
                guardería infantil, suficiente dinero para
                vivir y atención médica si estamos enfermos
                o somos mayores.
              </div>
              <div
                class='container tab-pane fade'
                id='listVida'
                role='tabpanel'
                aria-labelledby='list-vida-list'
              >
                El derecho a la vida es un derecho
                universal, es decir que le corresponde a
                todo ser humano. Es un derecho necesario
                para poder concretizar todos los demás
                derechos universales. El derecho a la vida
                significa tener la oportunidad de vivir
                nuestra propia vida.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
