import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { storyStartLoading } from '../../actions/events'
import { noticeStartLoading } from '../../actions/noticesActions'

const INITIAL_PAGE = 1

export const Pagination = ({ selector, subSelector }) => {
  const node = useSelector((state) => state[selector])

  const dispatch = useDispatch()
  const [pageNext, setPageNext] = useState(INITIAL_PAGE)
  const [active, setActive] = useState(1)
  //next Page
  const handleNextPage = () => {
    if (pageNext < node[subSelector].total_page) {
      setPageNext(pageNext + 1)
      setActive(pageNext + 1)
    } else {
      setActive(node[subSelector].total_page)
      setPageNext(node[subSelector].total_page)
    }
  }

  //previus page
  const handlePrevpage = () => {
    if (pageNext > node[subSelector].total_page) {
      setPageNext(pageNext - 1)
      setActive(pageNext - 1)
    } else {
      setActive(INITIAL_PAGE)
      setPageNext(INITIAL_PAGE)
    }
  }

  //nextPage and PrevPage
  useEffect(() => {
    if (selector === 'notice') {
      dispatch(noticeStartLoading({ page: pageNext }))
    } else {
      dispatch(storyStartLoading({ page: pageNext }))
    }
  }, [dispatch, pageNext, selector])

  const PageLink = () => {
    const pages = node[subSelector].total_page
    const pageArr = []
    for (let index = 1; index <= pages; index++) {
      pageArr.push(index)
    }

    return pageArr.map((page, index) => (
      <li
        key={index}
        className={`page-item  ${
          active === page ? 'active' : ''
        }`}
        onClick={() => {
          setActive(page)
          if (selector === 'notice') {
            dispatch(noticeStartLoading({ page }))
          } else {
            dispatch(storyStartLoading({ page }))
          }
        }}
      >
        <p className='page-link'>{page}</p>
      </li>
    ))
  }
  return (
    <div className='row mb-4'>
      <div className='col-md-12'>
        <nav aria-label='Page navigation example'>
          <ul className='pagination'>
            <li
              className={`page-item ${
                pageNext === INITIAL_PAGE ? 'disabled' : ''
              }`}
              onClick={handlePrevpage}
            >
              <p className='page-link'>Previous</p>
            </li>
            <PageLink />

            <li
              className={`page-item ${
                pageNext === node[subSelector].total_page
                  ? 'disabled'
                  : ''
              }`}
              onClick={handleNextPage}
            >
              <p className='page-link'>Next</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
