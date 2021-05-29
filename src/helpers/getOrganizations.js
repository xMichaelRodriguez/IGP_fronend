export const getOrganizations = async () => {
  const url = "https://www.transparencia.gob.sv/api/v1/institutions.json";
  const resp = await fetch(url, {
    // mode: "no-cors",
  });
 
  const data = await resp.json();
  const organizations =!!data && data.map((organization) => {
    return {
      ...organization,
    };
  });

  return organizations;
};
