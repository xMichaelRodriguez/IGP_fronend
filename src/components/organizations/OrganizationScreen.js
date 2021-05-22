import React from "react";
import { useOrganizations } from "../../hooks/useOrganizations";
import { OrganizationItem } from "./OrganizationItem";

export const OrganizationScreen = () => {
  const { data: organizations, loading } = useOrganizations();
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
      <div className="card-columns ">
        {organizations.map(
          (organization) =>
            (organization.acronym.includes("CONNA") ||
            organization.acronym.includes("MINEDUCYT") ||
            organization.acronym.includes("PDDH") ||
              organization.acronym.includes("ISNA")) && (
              <OrganizationItem key={organization.id} {...organization} />
            )
        )}
      </div>
    </>
  );
};
