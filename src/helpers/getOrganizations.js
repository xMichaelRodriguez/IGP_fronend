export const getOrganizations = async (categories) => {
  const url = "https://www.transparencia.gob.sv/api/v1/institutions.json";
  const resp = await fetch(url);
  const data = await resp.json();
  const organizations = data.map((organization) => {
    return {
      ...organization,
    };
  });

  return organizations;
};
