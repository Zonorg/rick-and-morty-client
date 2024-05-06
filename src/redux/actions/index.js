import { ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER } from "./types";
import axios from "axios";

export function addFavorite(character) {
  return async function (dispatch) {
    try {
      const respuestaDelBack = await axios.post(
        `${import.meta.env.VITE_API_URL}/favs/create`,
        character
      );
      return dispatch({
        type: ADD_CHARACTER,
        payload: respuestaDelBack.data,
      });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };
}
export function removeFavorite(id) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/favs/delete/` + id
      );
      return dispatch({ type: DELETE_CHARACTER, payload: response.data });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };
}

export function getFavorites() {
  return async function (dispatch) {
    try {
      const response = await axios(`${import.meta.env.VITE_API_URL}/favs/get`);
      return dispatch({ type: "GET_FAVS", payload: response.data });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}
export function orderCards(id) {
  return {
    type: ORDER,
    payload: id,
  };
}
