import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingForums } from '../../actions/forumsAction'

import { CardForum } from './CardForum'
import { CardUltimateForum } from './CardUltimateForum'
import { ForumUser } from './ForumUser'
import { ModalCreateForum } from './ModalCreateForum'
import { RegisterForum } from './RegisterForum'

export const ForumnsMain = () => {
  const { user, forums } = useSelector(
    (state) => state.userForum
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startLoadingForums())
  }, [dispatch])
  return (
    <>
      <div className='container-fluid p-5'>
        <div className='row'>
          <div className=' col-md-3 mb-3 '>
            {Object.entries(user).length !== 0 ? (
              <ForumUser user={user} />
            ) : (
              <RegisterForum />
            )}
          </div>
          <div className='col-md-6 container   order-3 mb-3'>
            <div className='row'>
              {forums !== [] ? (
                forums.map((foro) => (
                  <div className='col-md-12' key={foro._id}>
                    <CardForum {...foro} />
                  </div>
                ))
              ) : (
                <h1 className='text-muted'>No hay foros</h1>
              )}
            </div>
          </div>
          <div className=' col-md-3  mb-3 order-2 order-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <p className='h3'>Foro mas activo</p>
                <hr />

                <div className='col-md-12'>
                  <CardUltimateForum />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalCreateForum />
    </>
  )
}
