import { fetchAsync, fetchSync } from "../helpers/fetching";
import { types } from "../types/types";
// all modules
import Notiflix from "notiflix";
export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchSync("auth", { email, password }, "POST");
    const body = await resp.json();
    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-initDate", new Date().getTime());

      dispatch(login({ uid: body.uid, name: body.name }));
      dispatch(removeError());
    } else {
      dispatch(setError(body.msg));
      Notiflix.Notify.Failure(body.msg);
    }
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchAsync("auth/renew");

    const body = await resp.json();
    if (body.ok) {
      localStorage.setItem("token", body.token);

      localStorage.setItem("token-initDate", new Date().getTime());

      dispatch(login({ uid: body.uid, name: body.name }));
    } else {
      dispatch(checkingFish());
    }
  };
};
const checkingFish = () => ({
  type: types.authFinishChecking,
});
export const setError = (error) => ({
  type: types.setError,
  payload: error,
});

export const removeError = () => {
  return {
    type: types.removeError,
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});
