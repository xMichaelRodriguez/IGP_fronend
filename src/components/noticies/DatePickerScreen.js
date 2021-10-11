import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import { registerLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
import {
  FaCalendar,
  FaSearch,
  FaTimesCircle,
} from 'react-icons/fa'
import moment from 'moment'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import {
  setError,
  uiRemoveError,
} from '../../actions/authActios'
import { noticeStartLoading } from '../../actions/noticesActions'
import { storyStartLoading } from '../../actions/events'
registerLocale('es', es)

export const DatePickerScreen = ({ rute }) => {
  const { msgError } = useSelector((state) => state.error)
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)

  const handleSearchForDate = () => {
    if (isFormValid()) {
      const start = moment(startDate)
        .toISOString()
        .toString()
      const end = moment(endDate).toISOString().toString()
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
    if (
      moment(startDate).format('YY-MM-DD') ===
      moment(endDate).format('YY-MM-DD')
    ) {
      dispatch(
        setError('No se puede buscar en el mismo dia')
      )
      return false
    }

    dispatch(uiRemoveError())
    return true
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
            <small>
              filtrar siempre con un día de más en la
              entrada: hasta
            </small>
          </div>
          {msgError.includes('mismo') && (
            <div className='col-md-12 mb-3'>
              <div
                className='alert alert-danger '
                role='alert'
              >
                <FaTimesCircle /> {msgError}
              </div>
            </div>
          )}
          <div className='col-md-12 '>
            <ul className='form-inline   nav justify-content-center '>
              <li className=' nav-item px-4 py-1 '>
                <div className='form-group  mb-2'>
                  <label
                    htmlFor='datepicker '
                    className='py-1'
                  >
                    De: &nbsp;
                    <FaCalendar color='#8f77f2' />
                  </label>

                  <DatePicker
                    className={`form-control ${
                      msgError.includes('inicio')
                        ? 'is-invalid'
                        : ''
                    }`}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    locale='es'
                    popperClassName='pickerPosition '
                  />
                </div>
              </li>
              <li className=' nav-item px-4 py-1 '>
                <div className='form-group mb-2 '>
                  <label
                    htmlFor='datepicker'
                    className='py-1'
                  >
                    Hasta: &nbsp;
                    <FaCalendar color='#8f77f2' />
                  </label>

                  <DatePicker
                    className={`form-control ${
                      msgError.includes('final')
                        ? 'is-invalid'
                        : ''
                    }`}
                    placeholderText='10/10/2021'
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    locale='es'
                  />
                </div>
              </li>
              <li className='nav-item'>
                <button
                  className='btn primary '
                  type='button'
                  onClick={handleSearchForDate}
                >
                  <FaSearch /> Buscar
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
