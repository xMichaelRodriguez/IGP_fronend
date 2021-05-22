import moment from "moment";
import "moment/locale/es";
import React, { useEffect, useState } from "react";
import { BsArrowReturnLeft } from "react-icons/bs";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchSync } from "../../../helpers/fetching";

export const NoticeCard = () => {
  const { noticeId } = useParams();
  const [notice, setNotice] = useState({});
  useEffect(() => {
    (async function () {
      const data = await fetchSync(`noticies/${noticeId}`);
      const body = await data.json();

      if (body.ok) {
        delete body.ok;
        setNotice(body.noticies);
      }
    })();
  }, []);
  return notice !== {} ? (
    <div className="card animate__animated   animate__zoomIn">
      <div className="card-body">
        <div className="card-title d-flex justify-content-between  animate__animated   animate__zoomIn">
          <h1>{notice.title}</h1>
          <h6 className="text-muted">{moment(notice.date).calendar()}</h6>
        </div>

        <p
          className="card-text text-justify animate__animated   animate__zoomIn"
          style={{ fontSize: "20px" }}
        >
          {notice.body}
        </p>
      </div>
      <div className="card-footer animate__animated   animate__zoomIn">
        <Link className="btn btn-info btn-lg" to="/noticies">
          <BsArrowReturnLeft size="1.5rem" /> Volver
        </Link>
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center">
      <strong>Cargando...</strong>
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
