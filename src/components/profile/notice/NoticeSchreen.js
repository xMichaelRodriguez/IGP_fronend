import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { noticeStartLoading } from "../../../actions/noticesActions";
import { NotFiles } from "../../../helpers/NotFiles";
import { DeleteButtonFab } from "../../UI/DeleteButtonFab";
import { NoticeItem } from "./NoticeItem";
export const NoticeSchreen = () => {
  const dispatch = useDispatch();
  const { noticies, activeNotice } = useSelector((state) => state.notice);

  useEffect(() => {
    dispatch(noticeStartLoading());
  }, [dispatch]);
  return (
    <>
      <Link to="/profile/new-notice" className="btn btn-info">
        <FaPlus /> Nueva Noticia
      </Link>
      <hr />
      {noticies ? (
        <div className="card-columns">
          {noticies.map(({ id, title, body }) => (
            <NoticeItem key={id} id={id} title={title} body={body} />
          ))}
        </div>
      ) : (
        <NotFiles />
      )}

      {activeNotice && <DeleteButtonFab />}
    </>
  );
};
