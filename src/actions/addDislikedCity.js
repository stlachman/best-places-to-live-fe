import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  ADD_DISLIKED_CITY_FAIL,
  ADD_DISLIKED_CITY_INITIALIZE,
  ADD_DISLIKED_CITY_SUCCESS
} from "./index";
import { toast } from "react-toastify";

export const addDislikedCity = data => dispatch => {
  dispatch({ type: ADD_DISLIKED_CITY_INITIALIZE });

  /* Data in body of request is {id, cityID} */
  return axiosWithAuth()
    .post("/users", data)
    .then(res => {
      dispatch({
        type: ADD_DISLIKED_CITY_SUCCESS,
        payload: res.data
      });
      toast.success("City Disliked Successfully");
      return "Successful";
    })
    .catch(err => {
      dispatch({
        type: ADD_DISLIKED_CITY_FAIL,
        payload: { err, message: err.message }
      });
      toast.warn("City Disliked Failure");
      return "Failure";
    });
};
