import * as t from './types';
import * as api from '../config/api';
import { auth } from "../config/firebase";

import { AsyncStorage } from 'react-native';

// export function registerUser(data, successCB, errorCB) {
//   return (dispatch) => {
//     api.register(data, function (success, data, error) {
//       if (success) successCB(data);
//       else if (error) errorCB(error)
//     });
//   };
// }

// Actions Creators
export function registerUser(data) {
  return async (dispatch) => {
    
    // update store with loading status
    dispatch(checkingStatus());

    try {
      const registerApi = await auth.createUserWithEmailAndPassword(data.email, data.password);;
      return dispatch(registerSuccess(registerApi));
    } catch (error) {
      return dispatch(registerError(error));
    }
  };
}

// Actions
const checkingStatus = () => {
  return {
    type: t.IS_LOADING,
  }
}

const registerSuccess = (userData) => {
  return {
    type: t.REGISTER_SUCCESS,
    data: userData
  }
}

const registerError = (error) => {
  return {
    type: t.REGISTER_ERROR,
    response: error
  }
}