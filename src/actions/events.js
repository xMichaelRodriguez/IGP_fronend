import { fetchAsync } from "../helpers/fetching";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { removeError } from "./authActios";
import moment from "moment";

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

      const modStory = {
        ...story,
        date: moment(),
      };
      const resp = await fetchAsync("stories/new", modStory, "POST");
      const body = await resp.json();
      if (body.ok) {
        dispatch(storyAddNew(modStory));
        Swal.close();
        Swal.fire(
          "Guardado!!",
          `La historia:${modStory.title} ha sido guardada`,
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

export const storyStartLoading = ({ page = 1 }) => {
  return async (dipatch) => {
    try {
      const resp = await fetchAsync(`stories/?page=${page}`);
      const body = await resp.json();

      if (body.ok) {
        delete body.ok;

        dipatch(storyLoaded(body));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const storyLoaded = (stories) => ({
  type: types.storyLoaded,
  payload: stories,
});

export const storyStartUpdated = (story) => {
  return async (dispatch) => {
    try {
      Swal.fire({
        title: "Actualizando...",
        text: "Por favor espere...",
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
      const history = {
        ...story,
        date: moment(),
      };

      const resp = await fetchAsync(`stories/${story.id}`, history, "PUT");
      const body = await resp.json();

      if (body.ok) {
        dispatch(storyUpdated(story));
        dispatch(storyClearActive());
        Swal.close();
        Swal.fire("Historia Actualizado", story.title, "success");
      } else {
        Swal.close();
        Swal.fire("Error", body.msg, "error");
      }
      dispatch(removeError());
    } catch (error) {
      Swal.close();

      console.log(error);
    }
  };
};

const storyUpdated = (story) => ({
  type: types.storyUpdated,
  payload: story,
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
        dispatch(storyStartLoading({}));
       
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
