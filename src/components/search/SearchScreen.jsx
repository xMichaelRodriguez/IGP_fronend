import React from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import './styleSearch.css'
import { FaSearch } from 'react-icons/fa'
import { useForm } from '../../hooks/useForm'
import { TagSearchs } from './TagSearchs'
import { SearchContainer } from './SearchContainer'

export const SearchScreen = ({ history }) => {
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)
  const [formValue, handleInputChange] = useForm({
    searchText: q,
  })

  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`?q=${formValue.searchText}`)
  }
  const validSearchContainer =
    (q && q.toLowerCase() === 'derechos') ||
    (q && q.toLowerCase() === 'cuentos') ||
    (q && q.toLowerCase() === 'deberes') ||
    (q && q.toLowerCase() === 'commics') ||
    q === ''
  return (
    <div className='container-fluid py-5'>
      <div className='container'>
        <div className='row height d-flex justify-content-center align-items-center mb-5'>
          <div className='form w-100'>
            <FaSearch />
            <input
              type='text'
              className='form-control form-input shadow-sm'
              placeholder='buscar Cualquier Cosa'
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
            <h4 className='font-weight-bolder'>
              Etiquetas
            </h4>
          </div>

          <TagSearchs history={history} />
        </div>

        {validSearchContainer ? (
          ''
        ) : (
          <SearchContainer query={q} />
        )}
      </div>
    </div>
  )
}
