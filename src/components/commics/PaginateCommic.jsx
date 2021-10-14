import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { commicStartLoading } from '../../actions/commicsActions'
const INITIAL_PAGE = 1
export const PaginateCommic = () => {
  const { totalPage, prevPage, nextPage } = useSelector(
    (state) => state.commic
  )
  const dispatch = useDispatch()

  const handleNextPage = () => {
    dispatch(commicStartLoading({ page: nextPage }))
  }
  const handlePrevPage = () => {
    dispatch(commicStartLoading({ page: prevPage }))
  }
  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        <li
          className={`page-item ${
            prevPage === null ? 'disabled' : ''
          }`}
          onClick={handlePrevPage}
        >
          <p className='page-link'>Previous</p>
        </li>

        <li className='page-item'>
          <p className='page-link disabled'>{totalPage}</p>
        </li>
        <li
          className={`page-item ${
            nextPage === null ? 'disabled' : ''
          }`}
          onClick={handleNextPage}
        >
          <p className='page-link'>Next</p>
        </li>
      </ul>
    </nav>
  )
}
