import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { CuentosView } from './CuentosView';
import { HistorietasView } from './HistorietasView';
import { RightSection } from './RightSection';

export const ViolenceScreen = () => {
  const [active, setActive] = useState(0);
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Router>
        <div>
          <ul className='nav nav-tabs mb-3'>
            <li className={`nav-item`} onClick={() => setActive(0)}>
              <Link
                to={`${url}`}
                className={`nav-link ${active === 0 ? 'active' : ''}`}
              >
                Principal
              </Link>
            </li>
            <li className='nav-item' onClick={() => setActive(1)}>
              <Link
                to={`${url}/derechos`}
                className={`nav-link ${active === 1 ? 'active' : ''}`}
              >
                Derechos
              </Link>
            </li>
            <li className='nav-item' onClick={() => setActive(2)}>
              <Link
                to={`${url}/cuentos`}
                className={`nav-link ${active === 2 ? 'active' : ''}`}
              >
                Cuentos
              </Link>
            </li>
            <li className='nav-item' onClick={() => setActive(3)}>
              <Link
                to={`${url}/historietas`}
                className={`nav-link ${active === 3 ? 'active' : ''}`}
              >
                Historietas
              </Link>
            </li>
          </ul>

          <Switch>
            <Route path={`${path}/derechos`} component={RightSection} />
            <Route path={`${path}/cuentos`} component={CuentosView} />
            <Route path={`${path}/historietas`} component={HistorietasView} />
            <Route path={`${path}`}>
              <div className=''>
                <section className='container py-2 animate__animated   animate__fadeIn'>
                  <div
                    id='carouselExampleIndicators'
                    className='carousel slide'
                    data-ride='carousel'
                  >
                    <ol className='carousel-indicators'>
                      <li
                        data-target='#carouselExampleIndicators'
                        data-slide-to='0'
                        className='active'
                      ></li>
                      <li
                        data-target='#carouselExampleIndicators'
                        data-slide-to='1'
                      ></li>
                      <li
                        data-target='#carouselExampleIndicators'
                        data-slide-to='2'
                      ></li>
                    </ol>
                    <div className='carousel-inner'>
                      <div className='carousel-item active'>
                        <img
                          className='d-block w-100  '
                          height='600px'
                          src='https://www.unicef.org/argentina/sites/unicef.org.argentina/files/styles/hero_mobile/public/CVS-teaser_3.jpg?itok=2djE02Cw'
                          alt='slider of data'
                        />
                      </div>
                      <div className='carousel-item'>
                        <img
                          className='d-block w-100 '
                          height='600px'
                          src='https://www.entrerios.gov.ar/copnaf/userfiles/images/crianzasinviolencia/CSV_Redes_FB_ER-05.jpg'
                          alt='slider of data'
                        />
                      </div>
                      <div className='carousel-item'>
                        <img
                          className='d-block w-100 '
                          height='600px'
                          src='https://www.entrerios.gov.ar/copnaf/userfiles/images/crianzasinviolencia/CSV_Redes_FB_ER-02.jpg'
                          alt='slider of data'
                        />
                      </div>
                    </div>
                    <a
                      className='carousel-control-prev'
                      href='#carouselExampleIndicators'
                      role='button'
                      data-slide='prev'
                    >
                      <span
                        className='carousel-control-prev-icon'
                        aria-hidden='true'
                      ></span>
                      <span className='sr-only'>Previous</span>
                    </a>
                    <a
                      className='carousel-control-next'
                      href='#carouselExampleIndicators'
                      role='button'
                      data-slide='next'
                    >
                      <span
                        className='carousel-control-next-icon'
                        aria-hidden='true'
                      ></span>
                      <span className='sr-only'>Next</span>
                    </a>
                  </div>
                </section>

                <section className=' container animate__animated   animate__fadeIn'>
                  <h2 className='text-center'>
                    <dfn>Historietas</dfn>
                  </h2>
                  <div className='text-center '>
                    <HistorietasView />
                  </div>
                </section>

                <section className=' animate__animated   animate__fadeIn mb-5'>
                  <h2 className='text-center'>Cuentos</h2>
                  <div className='container'>
                    <CuentosView />
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
