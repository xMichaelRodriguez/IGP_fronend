import React from 'react'
import { useSelector } from 'react-redux'

import { CardForum } from './CardForum'
import { ForumUser } from './ForumUser'
import { RegisterForum } from './RegisterForum'

export const ForumnsMain = () => {
  const { user } = useSelector((state) => state.userForum)
  return (
    <div className='container-fluid p-5'>
      <div className='row'>
        <div className=' col-md-3 mb-3 '>
          {user !== '' ? (
            <ForumUser user={user} />
          ) : (
            <RegisterForum />
          )}
        </div>
        <div className='col-md-6 container   order-3 mb-3'>
          <div className='row'>
            <div className='col-md-12'>
              <CardForum />
              <CardForum />
            </div>
          </div>
        </div>
        <div className=' col-md-3  mb-3 order-2 order-md-12'>
          <div className='row'>
            <div className='col-md-12'>
              <CardForum />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
