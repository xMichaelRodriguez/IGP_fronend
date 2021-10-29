import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PropTypes from 'prop-types'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
import {
  FaCalendar,
  FaSearch,
} from 'react-icons/fa'
import validator from 'validator'
import {
  setError,
  uiRemoveError,
} from '../../actions/authActios'
import { noticeStartLoading } from '../../actions/noticesActions'
import { storyStartLoading } from '../../actions/events'
registerLocale('es', es)
setDefaultLocale('es')

export const DatePickerScreen = ({ rute }) => {
  const { msgError } = useSelector((state) => state.error)
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)

  const handleSearchForDate = () => {
    if (isFormValid()) {
      const start = new Date(startDate).toLocaleDateString('en-US')
      const end = new Date(endDate).toLocaleDateString('en-US')

      if (rute === 'notice') {
        dispatch(
          noticeStartLoading({
            startDate: start,
            endDate: end,
          })
        )
      } else {

        dispatch(
          storyStartLoading({
            startDate: start,
            endDate: end,
          })
        )
      }
    }
  }

  const isFormValid = () => {
    if (!validator.isDate(startDate)) {
      dispatch(setError('Fecha inicio invalida'))
      return false
    }
    if (!validator.isDate(endDate)) {
      dispatch(setError('Fecha final invalida'))
      return false
    }


    dispatch(uiRemoveError())
    return true
  }

  const handleReset = () => {
    setEndDate(null)
    setStartDate(new Date())
    dispatch(uiRemoveError())
    if (rute === 'notice') {
      dispatch(
        noticeStartLoading({})
      )
    } else {
      dispatch(
        storyStartLoading({})
      )
    }
  }

  return (
    <div className='container-fluid py-5 '>
      <div className='container rounded border border-dark p-3'>
        <div className='row '>
          <div className='col-md-12 mb-3'>
            <h4 className='display-5'>
              <FaSearch />
              &nbsp; Filtrado por fechas
            </h4>

          </div>

          <div className='col-md-6 '>
            <div className='form-group  mb-3'>

              <label
                htmlFor='datepicker '
                className='py-1'
              >
                De: &nbsp;
                <FaCalendar color='#8f77f2' />
              </label>

              <DatePicker
                className={`w-75 form-control ${msgError.includes('inicio invalida')
                  ? 'is-invalid'
                  : ''
                  }`}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                locale="es"
                dateFormat="dd/MM/yyy"
                popperClassName='pickerPosition '

              />
              {msgError.includes('inicio invalida') &&
                <div className="text-danger pt-1">
                  {msgError}
                </div>
              }

            </div>
          </div>
          <div className="col-md-6">
            <div className='form-group mb-3 '>
              <label
                htmlFor='datepicker'
                className='py-1'
              >
                Hasta: &nbsp;
                <FaCalendar color='#8f77f2' />
              </label>

              <DatePicker
                className={`w-75 form-control ${msgError.includes('final invalida')
                  ? 'is-invalid'
                  : ''
                  }`}
                placeholderText='10 / 10 / 2020 '
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                locale="es"
                dateFormat="dd/MM/yyy"
              />
              {msgError.includes('final invalida') &&
                <div className="pt-1 text-danger">
                  {msgError}
                </div>
              }
            </div>
          </div>
          <div className="col-md-12 text-center">
            <button
              className='btn primary mr-3 m-1'
              type='button'
              onClick={handleSearchForDate}
            >
              <FaSearch /> Buscar
            </button>
            <button
              className='btn btn-outline-primary text-break ml-3 m-1'
              type='button'
              onClick={handleReset}
            >
              Reiniciar busqueda
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
DatePickerScreen.propTypes = {
  rute: PropTypes.string.isRequired
}