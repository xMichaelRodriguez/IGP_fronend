import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { CuentosView } from './CuentosView';
import { historietasView } from './historietasView';
import { RightSection } from './RightSection';

export const ViolenceScreen = () => {
  const [active, setActive] = useState(0);
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div className='uk-container'>
      <Router>
        <div>
          <ul className='uk-tab'>
            <li
              className={`${active === 0 ? 'uk-active' : ''}`}
              onClick={() => setActive(0)}
            >
              <Link to={`${url}`}>Principal</Link>
            </li>
            <li
              className={`${active === 1 ? 'uk-active' : ''}`}
              onClick={() => setActive(1)}
            >
              <Link to={`${url}/derechos`}>Derechos</Link>
            </li>
            <li
              className={`${active === 2 ? 'uk-active' : ''}`}
              onClick={() => setActive(2)}
            >
              <Link to={`${url}/cuentos`}>Cuentos</Link>
            </li>
            <li
              className={`${active === 3 ? 'uk-active' : ''}`}
              onClick={() => setActive(3)}
            >
              <Link to={`${url}/historietas`}>Historietas</Link>
            </li>
          </ul>

          <Switch>
            <Route path={`${path}/derechos`} component={RightSection} />
            <Route path={`${path}/cuentos`} component={CuentosView} />
            <Route path={`${path}/historietas`} component={historietasView} />
            <Route path={`${path}`}>
              <div className='uk-card uk-card-default'>
                <section className='uk-margin animate__animated   animate__fadeIn'>
                  <div uk-slider=''>
                    <ul className='uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid'>
                      <li>
                        <img
                          className='d-block img-fluid w-100'
                          style={{ height: '300px' }}
                          src='https://www.unicef.org/argentina/sites/unicef.org.argentina/files/styles/hero_mobile/public/CVS-teaser_3.jpg?itok=2djE02Cw'
                          alt='slider of data'
                        />
                      </li>
                      <li>
                        <img
                          className='d-block w-100'
                          style={{ height: '300px' }}
                          src='https://www.entrerios.gov.ar/copnaf/userfiles/images/crianzasinviolencia/CSV_Redes_FB_ER-05.jpg'
                          alt='slider of data'
                        />
                      </li>
                      <li>
                        <img
                          className='d-block w-100'
                          style={{ height: '300px' }}
                          src='https://www.entrerios.gov.ar/copnaf/userfiles/images/crianzasinviolencia/CSV_Redes_FB_ER-02.jpg'
                          alt='slider of data'
                        />
                      </li>
                    </ul>
                  </div>
                </section>

                <section className='animate__animated   animate__fadeIn'>
                  <h2 className='uk-text-center'>
                    <dfn>Historietas</dfn>
                  </h2>
                  <div className='uk-text-center'>
                    <img
                      src='https://i.imgur.com/6qqDtWo.jpg'
                      className='img-thumbnail w-100 '
                      alt='historieta'
                      style={{ height: '600px' }}
                    />
                  </div>
                </section>

                <section className='uk-margin animate__animated   animate__fadeIn mb-5'>
                  <h2 className='uk-text-center'>
                    <dfn>Cuentos</dfn>
                  </h2>
                  <div className='uk-column-1-1 uk-padding uk-text-center'>
                    <iframe
                      title='cuentto'
                      src='https://www.youtube.com/embed/eqA-rVwSZk8'
                      width='600'
                      height='400'
                      frameBorder='0'
                      allowFullScreen=''
                      uk-responsive=''
                    ></iframe>
                  </div>
                </section>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
