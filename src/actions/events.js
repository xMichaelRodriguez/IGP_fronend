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
export const startstoryDeleted = () => {
  return async (dispatch, getState) => {
    const { id } = getState().story.activeStory;
    try {
      Swal.fire({
        title: "Eliminando...",
        text: "Por favor espere...",
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });

      const resp = await fetchAsync(`stories/${id}`, {}, "DELETE");
      const body = await resp.json();

      if (body.ok) {
        dispatch(storyDeleted());
        Swal.close();
        Swal.fire("Historia Eliminada", "", "success");
      } else {
        Swal.close();
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      Swal.close();
      console.log(error);
    }
  };
};

const storyDeleted = () => ({ type: types.storyDeleted });

export const StorySetActive = (story) => ({
  type: types.storySetActive,
  payload: story,
});

export const storyClearActive = () => ({
  type: types.storyClearActive,
});
