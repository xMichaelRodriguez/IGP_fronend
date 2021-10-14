import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { WaitScreen } from '../wait/WaitScreen'
import { CommicCard } from './CommicCard'
import { PaginateCommic } from './PaginateCommic'

export const CommicsScreen = () => {
  const { commics } = useSelector((state) => state.commic)

  return (
    <div className='container-fluid py-3 animate__animated   animate__fadeIn'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mb-3'>
            <PaginateCommic />
          </div>
          <div className='col-md-6 mb-3'>
            <Link
              to='/profile/commics/crearCommic'
              className='btn primary d-block w-100'
            >
              Crear Commic <FaPlus />
            </Link>
          </div>
          {commics === [] ? (
            <WaitScreen />
          ) : (
            commics.map((commic) => (
              <div className='col-md-4' key={commic.id}>
                <CommicCard {...commic} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
