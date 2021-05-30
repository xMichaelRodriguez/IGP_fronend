import React from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaFacebookSquare, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { useOrganizations } from "../hooks/useOrganizations";

export const OrganizationsView = () => {
  const { data: organization, loading } = useOrganizations();

  return (
    <>
      {loading && (
        <h1>
          <div className="d-flex justify-content-center">
            <strong>Cargando...</strong>
            <div className="spinner-grow" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </h1>
      )}

      <ul className="list-group mb-5" style={{ listStyle: "none" }}>
        {organization.map((org) => (
          <>
            {(org.acronym.includes("CONNA") ||
              org.acronym.includes("ISNA") ||
              org.acronym.includes("PDDH") ||
              org.acronym.includes("MINEDUCYT")) && (
              <li
                key={org.id}
                className="card a-list-item mb-2  px-3 bg-secondary"
              >
                <blockquote className="blockquote text-center highlight text-break">
                  <div className="mb-1">
                    <div className="font-weight-bold">
                      {!org.avatar_file_url.includes("missing") ? (
                        <img
                          className="img-fluid w-50 h-50"
                          src={`https://www.transparencia.gob.sv/${org.avatar_file_url}`}
                          alt={`${org.avatar_file_name}`}
                        />
                      ) : (
                        <img
                          className="img-fluid w-50 h-50"
                          alt="not found"
                          src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                        />
                      )}
                    </div>
                    <hr />
                    <ul
                      className="list-group list-group-flush"
                      style={{ listStyle: "none" }}
                    >
                      <li className="mb-2">
                        <span>
                          <BsFillCaretRightFill />
                          <span className="font-weight-bold">
                            Encargado/a:{" "}
                          </span>
                          {org.officer_name}
                        </span>
                      </li>

                      <li className="mb-2">
                        <BsFillCaretRightFill />
                        <span className="font-weight-bold"> Sitio web: </span>
                        <a
                          href={org.website_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {org.website_url}
                        </a>
                      </li>
                      <li className="mb-2 text-center">
                        <BsFillCaretRightFill />{" "}
                        <span className="font-weight-bold">Redes</span>
                        <div className="row">
                          <div className="col-md-4">
                            {org.twitter_url &&
                            !org.twitter_url.includes(",") ? (
                              <>
                                <a
                                  href={org.twitter_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaTwitterSquare size="1.5rem" />
                                </a>
                              </>
                            ) : (
                              <span>Sin Twitter</span>
                            )}
                          </div>
                          <div className="col-md-4">
                            {org.facebook_url &&
                            !org.facebook_url.includes(",") ? (
                              <a
                                href={org.facebook_url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaFacebookSquare size="1.5rem" />
                              </a>
                            ) : (
                              <span>Sin Facebook</span>
                            )}
                          </div>
                          <div className="col-md-4">
                            {org.youtube_url &&
                            !org.youtube_url.includes(",") ? (
                              <a
                                href={org.youtube_url}
                                className="bg-red"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaYoutube
                                  size="1.5rem"
                                  className="text-danger"
                                />
                              </a>
                            ) : (
                              <span>Sin Youtube</span>
                            )}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <footer className="blockquote-footer">
                    <span className="Source Title">
                      <span className="font-weight-bold">correo:</span>{" "}
                      {org.officer_email}
                    </span>
                  </footer>
                </blockquote>
              </li>
            )}
          </>
        ))}
      </ul>
    </>
  );
};
