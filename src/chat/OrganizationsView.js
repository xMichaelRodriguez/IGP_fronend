import React, { useEffect, useState } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaFacebookSquare, FaTwitterSquare, FaYoutube } from "react-icons/fa";

export const OrganizationsView = () => {
  const [organization, setOrganization] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await fetch(
        "https://www.transparencia.gob.sv/api/v1/institutions.json"
      );
      const body = await result.json();
      setOrganization(body);
    }
    getData();
  }, []);
  return (
    <ul className="list-group mb-5" style={{ listStyle: "none" }}>
      {organization !== [] ? (
        organization.map((organization) => (
          <>
            {(organization.acronym.includes("CONNA") ||
              organization.acronym.includes("ISNA") ||
              organization.acronym.includes("PDDH") ||
              organization.acronym.includes("MINEDUCYT")) && (
              <li
                key={organization.id}
                className="a-list-item mb-2 shadow px-3 bg-secondary"
              >
                <blockquote className="blockquote text-center highlight text-break">
                  <div className="mb-1">
                    <div className="font-weight-bold">
                      {!organization.avatar_file_url.includes("missing") ? (
                        <img
                          className="img-fluid w-50 h-50"
                          src={`https://www.transparencia.gob.sv/${organization.avatar_file_url}`}
                          alt={`${organization.avatar_file_name}`}
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
                          {organization.officer_name}
                        </span>
                      </li>

                      <li className="mb-2">
                        <BsFillCaretRightFill />
                        <span className="font-weight-bold"> Sitio web: </span>
                        <a
                          href={organization.website_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {organization.website_url}
                        </a>
                      </li>
                      <li className="mb-2 text-center">
                        <BsFillCaretRightFill />{" "}
                        <span className="font-weight-bold">Redes</span>
                        <div className="row">
                          <div className="col-md-4">
                            {organization.twitter_url &&
                            !organization.twitter_url.includes(",") ? (
                              <>
                                <a
                                  href={organization.twitter_url}
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
                            {organization.facebook_url &&
                            !organization.facebook_url.includes(",") ? (
                              <a
                                href={organization.facebook_url}
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
                            {organization.youtube_url &&
                            !organization.youtube_url.includes(",") ? (
                              <a
                                href={organization.youtube_url}
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
                      {organization.officer_email}
                    </span>
                  </footer>
                </blockquote>
              </li>
            )}
          </>
        ))
      ) : (
        <>
          <div class="spinner-border text-info" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <span>Cargando contenido...</span>
        </>
      )}
    </ul>
  );
};
