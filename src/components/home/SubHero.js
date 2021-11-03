import React from 'react';

import childrens from '../../img/roadKnowledge.svg';

const SubHero = () => {
  return (
    <div className=' container-fluid   py-5 '>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-4 mb-3'>
            <img
              className='img-fluid '
              src={childrens}
              alt='childrens'
              title='childrens'
              width=''
              height=''
            />
          </div>
          <div className='col-md-8 mb-3'>
            <h2 className='font-weight-bold mb-3'>
              Aprendamos y Avancemos Juntos
            </h2>
            <p className='lead mb-3'>
              Reflexiona, lee historias de vida, noticias y conoce
              organizaciones que brindan ayuda en{' '}
              <b className='font-weight-bold'>El Salvador</b>. <br></br>
              Aprende y enseña los deberes y derechos de los niños, niñas y
              adolescentes mediante la biblioteca virtual integrada en la
              applicación
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubHero;
