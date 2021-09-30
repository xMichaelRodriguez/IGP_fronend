import React from 'react'

import childrens from '../../img/roadKnowledge.svg'
export const SubHero = () => {
  return (
    <div className=' container-fluid   py-5 '>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 mb-3'>
            <img
              className='img-fluid '
              src={childrens}
              alt='childrens'
              title='childrens'
            />
          </div>
          <div className='col-md-8 mb-3'>
            <h2 className='font-weight-bold mb-3'>
              Aprendamos y Avancemos Juntos
            </h2>
            <p className='lead mb-3'>
              Reflexiona, lee historias de vida, noticias y
              conoce organizaciones que brindan ayuda en{' '}
              <b className='font-weight-bold'>
                El Salvador
              </b>
              . Aprende y enseña mediante el uso de la
              biblioteca virtual integrada en la applicación
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
