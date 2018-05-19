import * as t from './types';
import * as api from '../config/api';
import { auth } from "../config/firebase";

import { AsyncStorage } from 'react-native';

export function registerUser(data) {
  return (dispatch) => new Promise(async (resolve, reject) => {

    // update store with loading status
    dispatch(checkingStatus());
    try {
      const registerApi = await auth.createUserWithEmailAndPassword(data.email, data.password);
      dispatch(registerSuccess(registerApi));
      resolve(registerApi);
    } catch (error) {
      dispatch(authError(error));
      reject(error);
    }

  });
}

export function registerTeacher(data) {
  return async (dispatch) => {

    dispatch(checkingStatus());

    try {
      const registerApi = await auth.createUserWithEmailAndPassword(data.email, data.password);
      return dispatch(registerSuccess(registerApi));
    } catch (error) {
      dispatch(authError(error));
      throw new Error(error);
    }
  };
}

export function loginUser(data) {
  return (dispatch) => new Promise(async (resolve,reject) => {
    dispatch(checkingStatus());

    try {
      const loginApi = await auth.signInWithEmailAndPassword(data.email, data.password);
      dispatch(loginSuccess(loginApi));
      resolve(loginApi);
    } catch (error) {
      dispatch(authError(error));
      reject(error);
    }
  });
}

export function logoutUser() {
  return async (dispatch) => {
    try {
      const logoutApi = await auth.signOut();
      dispatch(loggedOut());
      return logoutApi;
    } catch (error) {
      dispatch(authError(error));
      throw new Error(error);
    }
  }
}

// Actions Creators
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

const authError = (error) => {
  return {
    type: t.AUTH_ERROR,
    response: error
  }
}

const loginSuccess = (userData) => {
  return {
    type: t.LOGIN_SUCCESS,
    data: userData
  }
}

const loggedOut = () => {
  return {
    type: t.LOGGED_OUT,
  }
}