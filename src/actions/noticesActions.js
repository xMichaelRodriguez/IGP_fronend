import { fetchAsync } from "../helpers/fetching";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { removeError } from "./authActios";
export const startnoticeAddNew = (notice) => {
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
      const resp = await fetchAsync("noticies/newNotice", notice, "POST");
      const body = await resp.json();

      if (body.ok) {
        dispatch(noticeAddNew(notice));
        Swal.close();
        Swal.fire(
          "Guardado!!",
          `La noticia:${notice.title} ha sido guardada`,
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

const noticeAddNew = (notice) => ({
  type: types.noticeAddNew,
  payload: notice,
});

export const noticeStartLoading = () => {
  return async (dipatch) => {
    try {
      const resp = await fetchAsync("noticies");
      const body = await resp.json();
      if (body.ok) {
        dipatch(noticeLoaded(body.noticies));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const noticeStartLoadingLast = () => {
  return async (dipatch) => {
    try {
      const resp = await fetchAsync("noticies/lastest");
      const body = await resp.json();
      if (body.ok) {
        dipatch(noticeLoaded(body.noticies));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const noticeLoaded = (noticies) => ({
  type: types.noticeLoaded,
  payload: noticies,
});

export const noticetStartUpdated = (notice) => {
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

      const resp = await fetchAsync(
        `noticies/editNotice/${notice.id}`,
        notice,
        "PUT"
      );
      const body = await resp.json();

      if (body.ok) {
        dispatch(noticetUpdated(notice));
        dispatch(noticeClearActive());
        Swal.close();
        Swal.fire("Noticia Actualizado", body.notice.title, "success");
      } else {
        Swal.close();
        Swal.fire("Error", body.msg, "error");
      }

      console.log(body.ok);
    } catch (error) {
      Swal.close();

      console.log(error);
    }
  };
};

const noticetUpdated = (notice) => ({
  type: types.noticeUpdated,
  payload: notice,
});

// export const noticeLogout = () => ({ type: types.noticeLogout });
export const startnoticeDeleted = () => {
  return async (dispatch, getState) => {
    const { id } = getState().notice.activeNotice;
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

      const resp = await fetchAsync(
        `noticies/deleteNotice/${id}`,
        {},
        "DELETE"
      );
      const body = await resp.json();

      if (body.ok) {
        dispatch(noticeDeleted());
        Swal.close();
        Swal.fire("Noticia  Eliminada", "", "success");
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

const noticeDeleted = () => ({ type: types.noticeDeleted });

export const noticeSetActive = (notice) => ({
  type: types.noticeSetActive,
  payload: notice,
});

export const noticeClearActive = () => ({
  type: types.noticeClearActive,
});



