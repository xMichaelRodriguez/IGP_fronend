import React from 'react'
import ReactLoading from 'react-loading'
export const WaitScreen = () => {
  return (
    <div className='d-flex justify-content-center p-5'>
      <h1 className='display-2'>Espere...</h1>{' '}
      <ReactLoading type='spin' color='#8f77f2' />
    </div>
  )
}
