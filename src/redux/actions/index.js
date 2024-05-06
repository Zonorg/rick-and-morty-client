import apiUrl from "../../main";
import { ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER } from "./types";
import axios from "axios";

export function addFavorite(character) {
  return async function (dispatch) {
    try {
      const respuestaDelBack = await axios.post(
        `${apiUrl}/favs/create`,
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
        `${apiUrl}/favs/delete/` + id
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
      const response = await axios(`${apiUrl}/favs/get`);
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
