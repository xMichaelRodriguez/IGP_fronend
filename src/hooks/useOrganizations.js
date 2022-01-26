import { useEffect, useState } from 'react';
import getOrganizations from '../helpers/getOrganizations';

const useOrganizations = (categories = '') => {
  const [state, SetState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getOrganizations(categories).then((organization) => {
      SetState({
        data: organization[0],
        loading: false,
      });
    });
  }, [categories]);

  return state;
};
export default useOrganizations;
