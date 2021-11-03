import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import './styleSearch.css';
import { FaSearch } from 'react-icons/fa';
import useForm from '../../hooks/useForm';
import TagSearchs from './TagSearchs.jsx';
import SearchContainer from './SearchContainer.jsx';

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const [formValue, handleInputChange] = useForm({
    searchText: q,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${formValue.searchText}`);
  };
  const validSearchContainer =
    (q && q.toLowerCase() === 'derechos' && q === '') ||
    (q && q.toLowerCase() === 'cuentos' && q === '') ||
    (q && q.toLowerCase() === 'deberes' && q === '') ||
    (q && q.toLowerCase() === 'commics' && q === '');
  return (
    <>
      <div className='container-fluid py-5'>
        <div className='container mb-3'>
          <div className='row height d-flex justify-content-center align-items-center mb-5'>
            <div className='form w-100'>
              <FaSearch />
              <input
                type='text'
                className='form-control form-input shadow-sm'
                placeholder='Busca lo que necesites'
                name='searchText'
                value={formValue.searchText}
                onChange={handleInputChange}
                onKeyUp={handleSearch}
              />
              <span className='left-pan'>
                <i className='fa fa-microphone'></i>
              </span>
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col-md-12 mb-3'>
              <h4 className='font-weight-bolder'>Etiquetas</h4>
            </div>

            <TagSearchs history={history} />
          </div>
        </div>
      </div>

      <div className='container-fluid bg-primary mb-3'>
        <div className='container mb-3'></div>
      </div>

      <div className='container-fluid mb-3'>
        <div className='container'>
          {validSearchContainer ? (
            <SearchContainer query='' />
          ) : (
            <SearchContainer query={q} />
          )}
        </div>
      </div>
    </>
  );
};
export default SearchScreen;
