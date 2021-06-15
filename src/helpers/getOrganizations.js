export const getOrganizations = async () => {
  const url =
    'https://uvsproxycors.herokuapp.com/https://www.transparencia.gob.sv/api/v1/institutions.json';
  const resp = await fetch(url, {});

  const data = await resp.json();
  const organizations =
    !!data &&
    data.map((organization) => {
      return {
        ...organization,
      };
    });

  return organizations;
};
