import React from "react";
import {
  BsArrowReturnLeft,
  BsEnvelopeFill,
  BsInfoCircleFill,
} from "react-icons/bs";
import { FaFacebook, FaFileAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useOrganizations } from "../../hooks/useOrganizations";
export const OrganizationCard = () => {
  const { organization_acronym } = useParams();
  const { data: organizations, loading } = useOrganizations();
  const newOrganization =
    organizations &&
    organizations.find((or) => or.acronym === organization_acronym);

  return (
    <>
      {loading ? (
        <h1>
          <div className="d-flex justify-content-center">
            <strong>Cargando...</strong>
            <div className="spinner-grow" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </h1>
      ) : (
        <div className="card px-5 mb-5 container animate__animated   animate__zoomIn">
          <div className="d-flex justify-content-center">
            <img
              className="card-img-top img-thumbnail text-center"
              style={{ height: "400px", width: "450px" }}
              src={
                !newOrganization.avatar_file_url.includes("missing")
                  ? `https://www.transparencia.gob.sv/${newOrganization.avatar_file_url}`
                  : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
              }
              alt={newOrganization.avatar_file_name}
            />
          </div>
          <div className="card-body">
            <div className="card-title">
              <h1>{newOrganization.name}</h1>
            </div>
            <div className="card-subtitle">
              <p className="font-weight-bolder">{newOrganization.acronym}</p>
            </div>
            <div className="card-text">
              <h4>
                <BsInfoCircleFill className="text-info" /> Oficial de
                información: {newOrganization.officer_name}
              </h4>
              <h4 className="text-muted mt-2 mb-3">
                <BsEnvelopeFill className="text-info" />{" "}
                {newOrganization.officer_email}
              </h4>
              {newOrganization.website_url && (
                <h4 className="text-muted mt-2 mb-3">
                  <FaFileAlt className="text-info" />{" "}
                  {newOrganization.website_url}
                </h4>
              )}
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="card-text">
                  <ul className="list-group" style={{ listStyle: "none" }}>
                    <li>
                      <ul className="list-group" style={{ listStyle: "none" }}>
                        {newOrganization.twitter_url.includes(",") ? (
                          newOrganization.twitter_url
                            .split(",")
                            .map((twitter) => (
                              <li
                                className="btn-link mb-2"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  window.open(twitter);
                                }}
                              >
                                <strong>
                                  <FaTwitter /> {twitter}
                                </strong>
                              </li>
                            ))
                        ) : (
                          <li>
                            <p
                              className="font-weight-bolder btn-link"
                              style={{ cursor: "pointer", fontSize: "15px" }}
                              onClick={() =>
                                newOrganization.twitter_url !== "" &&
                                window.open(newOrganization.twitter_url)
                              }
                            >
                              {newOrganization.twitter_username !== "" ? (
                                <p>
                                  <FaTwitter className="text-primary" />{" "}
                                  {newOrganization.twitter_username}
                                </p>
                              ) : (
                                <p>Sin Twitter</p>
                              )}
                            </p>
                          </li>
                        )}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card-text">
                  <ul className="list-group" style={{ listStyle: "none" }}>
                    <li>
                      <ul className="list-group" style={{ listStyle: "none" }}>
                        {newOrganization.facebook_url.includes(",") ? (
                          newOrganization.facebook_url
                            .split(",")
                            .map((facebook) => (
                              <li
                                className="btn-link mb-2"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  window.open(facebook);
                                }}
                              >
                                <strong>
                                  <FaFacebook /> {facebook}
                                </strong>
                              </li>
                            ))
                        ) : (
                          <li>
                            <p
                              className="font-weight-bolder btn-link"
                              style={{ cursor: "pointer", fontSize: "15px" }}
                              onClick={() =>
                                newOrganization.facebook_url !== "" &&
                                window.open(newOrganization.facebook_url)
                              }
                            >
                              {newOrganization.facebook_username !== "" ? (
                                <p>
                                  <FaFacebook className="text-danger" />{" "}
                                  {newOrganization.Facebook_username}
                                </p>
                              ) : (
                                <p>Sin Facebook</p>
                              )}
                            </p>
                          </li>
                        )}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <ul className="list-group" style={{ listStyle: "none" }}>
                  {newOrganization.youtube_url.includes(",") ? (
                    newOrganization.youtube_url.split(",").map((youtube) => (
                      <li
                        className="btn-link mb-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          window.open(youtube);
                        }}
                      >
                        <strong>
                          <FaYoutube className="text-danger" /> {youtube}
                        </strong>
                      </li>
                    ))
                  ) : (
                    <li>
                      <p
                        className="font-weight-bolder btn-link"
                        style={{ cursor: "pointer", fontSize: "15px" }}
                        onClick={() =>
                          newOrganization.youtube_url !== "" &&
                          window.open(newOrganization.youtube_url)
                        }
                      >
                        {newOrganization.youtube_username !== "" ? (
                          <p>
                            <FaYoutube className="text-danger" />{" "}
                            {newOrganization.youtube_username}
                          </p>
                        ) : (
                          <p>Sin Youtube</p>
                        )}
                      </p>
                    </li>
                  )}
                </ul>
              </div>
              <div className="col-md-6">
                <p
                  className="font-weight-bolder btn-link"
                  style={{ cursor: "pointer", fontSize: "15px" }}
                  onClick={() => {
                    window.open(
                      `https://www.transparencia.gob.sv${newOrganization.administrative_document_file_url}`
                    );
                  }}
                >
                  <BsInfoCircleFill className="text-info" />{" "}
                  <span>URL del archivo del documento administrativo</span>
                </p>
              </div>
            </div>

            <div className="card-link mt-3">
              <Link className="btn btn-outline-info" to="/organizations">
                <BsArrowReturnLeft />
                <span>Volver</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
