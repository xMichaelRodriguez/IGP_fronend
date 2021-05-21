import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  noticeSetActive,
  noticeStartLoading,
} from "../../actions/noticesActions";

export const NoticeScreen = () => {
  const { noticies } = useSelector((state) => state.notice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(noticeStartLoading());
  }, [dispatch]);

  return (
    <div>
      {!!noticies && (
        <div className="list-group">
          {noticies.map((notice) => (
            <span
              className="list-group-item  flex-column align-items-start "
              key={notice.id}
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{notice.title}</h5>
                {/* <small>3 days ago</small> */}
              </div>
              <p className="mb-1">{`${notice.body.substr(0, 100)} ...`}</p>
              <small>Donec id elit non mi porta.</small>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
