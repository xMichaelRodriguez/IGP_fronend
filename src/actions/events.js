import { fetchAsync } from "../helpers/fetching";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { removeError } from "./authActios";
export const startstoryAddNew = (story) => {
  return async (dispatch) => {
    try {
      Swal.fire({
        title: "Guardando...",
        text: "Por favor espere...",
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
      const resp = await fetchAsync("stories/new", story, "POST");
      const body = await resp.json();
      console.log(body);
      if (body.ok) {
        dispatch(storyAddNew(story));
        Swal.close();
        Swal.fire(
          "Guardado!!",
          `La historia:${body.story.title} ha sido guardada`,
          "success"
        );
        dispatch(removeError());
      }
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  };
};

const storyAddNew = (story) => ({
  type: types.storyAddNew,
  payload: story,
});

export const storyStartLoading = () => {
  return async (dipatch) => {
    try {
      const resp = await fetchAsync("stories");
      const body = await resp.json();

      dipatch(storyLoaded(body.stories));
    } catch (error) {
      console.log(error);
    }
  };
};

const storyLoaded = (stories) => ({
  type: types.storyLoaded,
  payload: stories,
});
// export const storyLogout = () => ({ type: types.storyLogout });
