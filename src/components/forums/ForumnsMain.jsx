import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  startLoadingForums,
  startLoadingMyForums,
} from '../../actions/forumsAction';
import Pagination from '../cards/Pagination.jsx';

import CardForum from './CardForum.jsx';
import CardUltimateForum from './CardUltimateForum.jsx';
import ForumUser from './ForumUser.jsx';
import ModalCreateForum from './ModalCreateForum.jsx';
import RegisterForum from './RegisterForum.jsx';

const ForumnsMain = () => {
  const { user, forums } = useSelector((state) => state.userForum);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startLoadingForums({}));
    dispatch(startLoadingMyForums());
  }, [dispatch]);
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
                  <div className='col-md-12 list-unstyled' key={foro._}>
                    <CardForum {...foro} />
                  </div>
                ))
              ) : (
                <h2 className='text-muted'>No hay foros</h2>
              )}
              <div className='col-md-6 mt-3'>
                <Pagination selector='userForum' />
              </div>
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
  );
};
export default ForumnsMain;
