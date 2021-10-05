import React from 'react'

import { useHistory, useLocation } from 'react-router'
import { Pagination } from '../cards/Pagination'
export const SectionPaginate = () => {
    const location = useLocation()
    const param = location.pathname.split('/')[1]
    const history = useHistory()
    return (
        <div className="container-fluid py-2">
            <div className="container">
                <div className="row">


                    {param === 'profile' ? (
                        <>
                            <div className='col-md-6'>
                                <Pagination
                                    selector={'story'}
                                    subSelector='stories'
                                />
                            </div>

                            <div className='col-md-6'>
                                <button
                                    className='btn primary btn-block mb-3'
                                    type='button'
                                    onClick={() => {
                                        history.push(
                                            '/profile/mantenimiento/historias'
                                        )
                                    }}
                                >
                                    Nueva Historia
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className='col-md-12 animate__animated animate__fadeIn'>
                            <Pagination
                                selector={'story'}
                                subSelector='stories'
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
